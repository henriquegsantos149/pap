import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2 } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutUrl: string;
}

export default function LeadModal({ isOpen, onClose, checkoutUrl }: LeadModalProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    formacao: '',
    area: '',
    experiencia: 'Sim'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        formacao: '',
        area: '',
        experiencia: 'Sim'
      });
      setError('');
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const cleanValue = name === 'telefone' ? value.replace(/\D/g, '').slice(0, 11) : value;
    setFormData(prev => ({ ...prev, [name]: cleanValue }));
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.nome || !formData.email || !formData.telefone || !formData.formacao) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    if (formData.telefone.length < 10) {
      setError('Por favor, insira um telefone válido com DDD.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send data to Google Sheets script
      fetch('https://script.google.com/macros/s/AKfycbzoQQtPl_TazLAIbacOSLYyq_fCulFa10Dv_Wd1DOR96Xsurd9_HeSKgsv9axxm9l4PTg/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          course: 'pap-5.0'
        }),
      });

      // Redirect quickly while the request is being processed in parallel
      setTimeout(() => {
        window.location.href = checkoutUrl;
      }, 300);

    } catch (err) {
      console.error('Error submitting form:', err);
      // Redirect anyway to not block user purchase
      window.location.href = checkoutUrl;
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-[var(--color-brand-dark)] border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Design accents */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--color-brand-primary)]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[var(--color-brand-accent)]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold font-primary uppercase tracking-tight mb-2">
              Preencha suas informações
            </h2>
            <p className="text-[var(--color-brand-light)]/60 font-secondary text-sm mb-6">
              Para prosseguir e garantir sua vaga com desconto no Programa Ambiental Pro.
            </p>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-lg p-3 mb-4 font-secondary">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[var(--color-brand-primary)] text-xs font-bold uppercase tracking-widest mb-1.5 font-secondary">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-brand-primary)]/50 transition-colors font-secondary text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[var(--color-brand-primary)] text-xs font-bold uppercase tracking-widest mb-1.5 font-secondary">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Seu email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-brand-primary)]/50 transition-colors font-secondary text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[var(--color-brand-primary)] text-xs font-bold uppercase tracking-widest mb-1.5 font-secondary">
                    WhatsApp (com DDD)
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="Apenas números (Ex: 11999999999)"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-brand-primary)]/50 transition-colors font-secondary text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[var(--color-brand-primary)] text-xs font-bold uppercase tracking-widest mb-1.5 font-secondary">
                  Qual é a sua área de formação?
                </label>
                <input
                  type="text"
                  name="area"
                  required
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="Digite sua profissão ou curso"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-brand-primary)]/50 transition-colors font-secondary text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[var(--color-brand-primary)] text-xs font-bold uppercase tracking-widest mb-1.5 font-secondary">
                    Possui Graduação completa?
                  </label>
                  <select
                    name="formacao"
                    required
                    value={formData.formacao}
                    onChange={handleChange}
                    className="w-full bg-[#0d1310] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[var(--color-brand-primary)]/50 transition-colors font-secondary text-sm cursor-pointer"
                  >
                    <option value="">Selecione...</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[var(--color-brand-primary)] text-xs font-bold uppercase tracking-widest mb-1.5 font-secondary">
                    Experiência com Geoprocessamento?
                  </label>
                  <select
                    name="experiencia"
                    required
                    value={formData.experiencia}
                    onChange={handleChange}
                    className="w-full bg-[#0d1310] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[var(--color-brand-primary)]/50 transition-colors font-secondary text-sm cursor-pointer"
                  >
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full shape-leaf bg-brand-gradient text-[var(--color-brand-dark)] font-bold py-4 mt-6 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(15,166,10,0.3)] cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    REDIRECIONANDO...
                  </>
                ) : (
                  <>
                    COMPRAR AGORA
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
