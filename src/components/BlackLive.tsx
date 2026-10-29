import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowRight, CalendarDays, Clock3, Infinity as InfinityIcon, CheckCircle2 } from 'lucide-react';

const liveDate = Date.parse('2026-11-24T20:00:00-03:00');
const registrationEndpoint = '/api/pap-black-subscribe';
const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
function campaignAttribution() {
  const params = new URLSearchParams(window.location.search);
  let saved: Record<string, string> = {};
  try { saved = JSON.parse(sessionStorage.getItem('pap-black-utms') || '{}'); } catch { /* Storage may be unavailable. */ }
  if (utmKeys.some(key => params.has(key))) {
    saved = Object.fromEntries(utmKeys.map(key => [key, params.get(key) || '']));
    try { sessionStorage.setItem('pap-black-utms', JSON.stringify(saved)); } catch { /* Keep current URL values. */ }
  }
  return saved;
}

function Countdown() {
  const [remaining, setRemaining] = useState(() => Math.max(0, liveDate - Date.now()));
  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(Math.max(0, liveDate - Date.now())), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const seconds = Math.floor(remaining / 1000);
  return <div className="black-live-countdown" aria-label="Contagem regressiva para a live">
    <p>{remaining > 0 ? 'A live começa em:' : 'Chegou o dia da live!'}</p>
    <div>{[Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60].map((value, index) =>
      <span key={index}><strong>{String(value).padStart(2, '0')}</strong><small>{['Dias', 'Horas', 'Min', 'Seg'][index]}</small></span>
    )}</div>
  </div>;
}

export function BlackLiveHero() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [graduated, setGraduated] = useState('');
  useEffect(() => { campaignAttribution(); }, []);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const phone = String(values.telefone).replace(/\D/g, '');
    if (phone.length < 10 || phone.length > 13) {
      const input = form.elements.namedItem('telefone') as HTMLInputElement;
      input.setCustomValidity('Informe seu WhatsApp com DDD.');
      input.reportValidity();
      return;
    }
    setStatus('sending');
    const utms = campaignAttribution();
    try {
      const response = await fetch(registrationEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, telefone: phone, ...utms, course: 'pap-5.0', evento: 'Black Friday PAP Acesso VITALÍCIO', data_evento: '2026-11-24T20:00:00-03:00', pagina: 'black', data_inscricao: new Date().toISOString() }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error('Registration failed');
      const tracking = window as unknown as { dataLayer?: Record<string, unknown>[]; fbq?: (...args: unknown[]) => void };
      tracking.dataLayer?.push({ event: 'pap_black_registration_success', campaign: '[AM][BF][PAP]' });
      tracking.fbq?.('track', 'Lead', { content_name: 'Black Friday PAP Acesso VITALÍCIO' });
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return <section id="hero" className="black-live-hero relative overflow-hidden">
    <div className="bg-grid" aria-hidden="true" />
    <div className="black-live-layout">
      <div className="black-live-copy">
        <div className="black-live-brand"><span>BLACK</span> FRIDAY<small>AMBIENTAL PRO</small></div>
        <p className="black-live-badge">LIVE GRATUITA · 100% ONLINE</p>
        <h1>Black Friday PAP<br /><span className="text-brand-gradient">Acesso VITALÍCIO</span></h1>
        <p className="black-live-description">Sua evolução no Geoprocessamento não precisa ter prazo para acabar. Participe da live e conheça a condição de Black Friday para ter acesso vitalício ao Programa Ambiental Pro.</p>
        <div className="black-live-date"><span><CalendarDays size={20} />24 de novembro de 2026</span><span><Clock3 size={20} />20h · Horário de Brasília</span></div>
      </div>
      <div id="inscricao" className="black-live-form-card">
        <h2>Inscreva-se grátis</h2>
        <p>Cadastre-se para participar da live sobre o PAP com acesso vitalício.</p>
        {status === 'sent' ? <div className="black-live-success" role="status"><CheckCircle2 size={40} /><h3>Dados enviados!</h3><p>Reserve na sua agenda: 24/11/2026, às 20h (Brasília).</p></div> :
          <form onSubmit={submit} className="black-live-form">
            <label htmlFor="live-nome">Nome completo<input id="live-nome" name="nome" autoComplete="name" placeholder="Seu nome" required /></label>
            <label htmlFor="live-email">E-mail<input id="live-email" name="email" type="email" autoComplete="email" placeholder="Seu melhor e-mail" required /></label>
            <label htmlFor="live-telefone">WhatsApp com DDD<input id="live-telefone" name="telefone" type="tel" autoComplete="tel" placeholder="(11) 99999-9999" required onInput={event => event.currentTarget.setCustomValidity('')} /></label>
            <label htmlFor="live-formacao">Possui graduação completa?<select id="live-formacao" name="formacao" required value={graduated} onChange={event => setGraduated(event.target.value)}><option value="" disabled>Selecione</option><option>Sim</option><option>Não</option></select></label>
            {graduated === 'Sim' && <label htmlFor="live-area">Área de formação<input id="live-area" name="area" placeholder="Seu curso ou profissão" required /></label>}
            {status === 'error' && <p role="alert" className="black-live-error">Não foi possível enviar. Tente novamente.</p>}
            <button type="submit" disabled={status === 'sending'} className="bg-brand-gradient">{status === 'sending' ? 'Enviando...' : 'Quero participar gratuitamente'}<ArrowRight size={19} /></button>
          </form>}
        <Countdown />
        <p className="black-live-privacy">Seus dados serão utilizados para o contato sobre esta live.</p>
      </div>
    </div>
  </section>;
}

export function BlackLiveAbout() {
  return <section className="black-live-about" id="sobre-live">
    <div className="black-live-about-inner">
      <p className="black-live-badge">UMA NOVA POSSIBILIDADE PARA A SUA FORMAÇÃO</p>
      <h2>O PAP com você.<br /><span className="text-brand-gradient">Por toda a sua jornada.</span></h2>
      <p className="black-live-about-intro">No dia <strong>24 de novembro, às 20h</strong>, vamos apresentar a Black Friday PAP Acesso VITALÍCIO: uma oportunidade para estudar Geoprocessamento no seu ritmo e revisitar o conteúdo do programa ao longo da sua carreira.</p>
      <div className="black-live-about-grid">
        {[
          ['01', 'Entenda o acesso vitalício', 'Conheça a proposta de acesso ao PAP sem prazo de expiração e saiba exatamente o que estará incluído na condição apresentada na live.'],
          ['02', 'Conheça o Programa Ambiental Pro', 'Descubra a formação prática em QGIS, ArcGIS Pro, Sensoriamento Remoto e Inteligência Artificial aplicada ao setor ambiental.'],
          ['03', 'Veja as condições de Black Friday', 'Acompanhe a apresentação da oferta e tire suas dúvidas sobre o acesso vitalício antes de decidir dar o próximo passo.'],
        ].map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}
      </div>
      <div className="black-live-about-bottom"><InfinityIcon size={36} /><p><strong>Mais tempo para aprender. Mais liberdade para evoluir.</strong><br />Participe da live para conhecer todos os detalhes do PAP vitalício.</p><a href="#inscricao" className="bg-brand-gradient">Quero participar <ArrowRight size={18} /></a></div>
    </div>
  </section>;
}
