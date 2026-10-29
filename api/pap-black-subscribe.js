const prefix = '[AM][BF][PAP]';
const base = 'https://ambientalpro.api-us1.com/api/3';
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido.' });
  const key = process.env.ACTIVE_API_KEY;
  if (!key) return res.status(503).json({ error: 'Cadastro temporariamente indisponível.' });
  const data = req.body || {};
  const fields = ['nome', 'email', 'telefone', 'formacao', 'area', 'utm_content', 'utm_term', 'utm_campaign', 'utm_source', 'utm_medium'];
  if (fields.some(field => data[field] !== undefined && (typeof data[field] !== 'string' || data[field].length > 500))) {
    return res.status(400).json({ error: 'Dados inválidos.' });
  }
  if (!data.nome?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '') || !/^\d{10,13}$/.test(data.telefone || '') || !['Sim', 'Não'].includes(data.formacao) || (data.formacao === 'Sim' && !data.area?.trim())) {
    return res.status(400).json({ error: 'Confira os campos obrigatórios.' });
  }
  const request = async (path, method = 'GET', payload) => {
    const response = await fetch(`${base}${path}`, {
      method, headers: { 'Api-Token': key, 'Content-Type': 'application/json' },
      ...(payload ? { body: JSON.stringify(payload) } : {}),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error('ActiveCampaign request failed');
    return response.json();
  };
  const list = async resource => {
    const results = [];
    for (let offset = 0; offset < 10000; offset += 100) {
      const page = (await request(`/${resource}?limit=100&offset=${offset}`))[resource];
      if (!Array.isArray(page)) throw new Error('Invalid configuration');
      results.push(...page);
      if (page.length < 100) return results;
    }
    throw new Error('Incomplete configuration');
  };
  try {
    const [customFields, tags] = await Promise.all([list('fields'), list('tags')]);
    const dateParts = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
      timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23',
    }).formatToParts(new Date()).map(part => [part.type, part.value]));
    const day = `${dateParts.year}-${dateParts.month}-${dateParts.day}`;
    const values = [
      ['UTM Content', data.utm_content || ''], ['UTM Term', data.utm_term || ''],
      ['UTM Data de Inscrição', null], ['UTM Possui Graduação', data.formacao],
      ['UTM Área de Formação', data.formacao === 'Sim' ? data.area.trim() : ''],
      ['UTM Campaign', data.utm_campaign || ''], ['UTM Source', data.utm_source || ''],
      ['UTM Medium', data.utm_medium || ''],
    ];
    const fieldValues = values.map(([title, value]) => {
      const matches = customFields.filter(field => normalize(field.title) === normalize(`${prefix} ${title}`));
      if (matches.length !== 1) throw new Error('Campaign field missing or ambiguous');
      const field = matches[0];
      return { field: String(field.id), value: value === null
        ? (field.type === 'datetime' ? `${day}T${dateParts.hour}:${dateParts.minute}:${dateParts.second}-03:00` : field.type === 'date' ? day : `${dateParts.day}/${dateParts.month}/${dateParts.year}`)
        : value };
    });
    const matchingTags = tags.filter(tag => normalize(tag.tag) === normalize(`${prefix} Lead`));
    if (matchingTags.length !== 1) throw new Error('Campaign tag missing or ambiguous');
    const { contact } = await request('/contact/sync', 'POST', { contact: {
      email: data.email.trim(), firstName: data.nome.trim(), phone: data.telefone, fieldValues,
    } });
    if (!contact?.id) throw new Error('Contact missing');
    const tagId = String(matchingTags[0].id);
    const existing = await request(`/contacts/${contact.id}/contactTags`);
    if (!(existing.contactTags || []).some(tag => String(tag.tag) === tagId)) {
      await request('/contactTags', 'POST', { contactTag: { contact: String(contact.id), tag: tagId } });
    }
    return res.status(200).json({ success: true });
  } catch {
    console.error('PAP Black: falha ao concluir cadastro no ActiveCampaign.');
    return res.status(503).json({ error: 'Não foi possível concluir sua inscrição. Tente novamente.' });
  }
}
