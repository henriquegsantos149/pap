import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Check, Loader2 } from 'lucide-react';

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExitIntentModal({ isOpen, onClose }: ExitIntentModalProps) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    formacao: '',
    area: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handle cursor exit intent
  useEffect(() => {
    // Check if the user has already seen or closed this popup in this session
    const hasSeenPopup = sessionStorage.getItem('seenExitPopup');
    
    if (hasSeenPopup) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 50) { // Cursor exits the top of the viewport
        sessionStorage.setItem('seenExitPopup', 'true');
        // Trigger modal open (will be managed by state in parent App.tsx)
        // Since the parent manages it, we will assume App.tsx binds it
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const cleanValue = name === 'telefone' ? value.replace(/\D/g, '').slice(0, 11) : value;
    setFormData(prev => ({ ...prev, [name]: cleanValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.nome || !formData.email || !formData.telefone || !formData.formacao || !formData.area) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send to google sheets script
      await fetch('https://script.google.com/macros/s/AKfycbzoQQtPl_TazLAIbacOSLYyq_fCulFa10Dv_Wd1DOR96Xsurd9_HeSKgsv9axxm9l4PTg/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          course: 'pap-qgis-package'
        }),
      });

      setIsSubmitting(false);
      setSubmitted(true);
      
      // Auto close after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);

    } catch (err) {
      console.error('Error submitting exit intent form:', err);
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 3000);
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
          className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          className="relative w-full max-w-4xl bg-[var(--color-brand-dark)] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors z-20 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Left side: Visual Offer */}
            <div className="md:col-span-5 bg-gradient-to-br from-[#020d04] to-black p-8 md:p-12 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
              <Gift className="w-12 h-12 text-[var(--color-brand-primary)] mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold font-primary uppercase text-center text-white tracking-wide mb-4">
                Acesso Gratuito
              </h3>
              <p className="text-xs text-[var(--color-brand-light)]/60 text-center font-secondary leading-relaxed mb-6">
                Receba o Pacotão QGIS com templates, dados de apoio e atalhos para acelerar seu aprendizado.
              </p>
              
              <img 
                src={`${import.meta.env.BASE_URL}qgis-lead.webp`} 
                alt="Pacotão QGIS de Acesso Gratuito" 
                className="w-48 h-auto object-contain drop-shadow-[0_15px_30px_rgba(15,166,10,0.2)]"
              />
            </div>

            {/* Right side: Form details */}
            <div className="md:col-span-7 p-8 md:p-12 relative flex flex-col justify-center">
              {!submitted ? (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold font-primary uppercase tracking-tight text-white mb-2">
                    Garanta o seu pacote!
                  </h2>
                  <p className="text-sm text-[var(--color-brand-light)]/60 font-secondary mb-6">
                    Preencha com seus dados abaixo para liberarmos o acesso ao Pacotão QGIS.
                  </p>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-lg p-3 mb-4 font-secondary">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[var(--color-brand-accent)] text-xs font-bold uppercase tracking-widest mb-1 font-secondary">
                          Seu Nome
                        </label>
                        <input
                          type="text"
                          name="nome"
                          required
                          value={formData.nome}
                          onChange={handleChange}
                          placeholder="Digite seu nome"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-brand-primary)]/50 transition-colors font-secondary text-sm"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-[var(--color-brand-accent)] text-xs font-bold uppercase tracking-widest mb-1 font-secondary">
                          Seu E-mail
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="email@exemplo.com"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-brand-primary)]/50 transition-colors font-secondary text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[var(--color-brand-accent)] text-xs font-bold uppercase tracking-widest mb-1 font-secondary">
                          Seu WhatsApp (com DDD)
                        </label>
                        <input
                          type="tel"
                          name="telefone"
                          required
                          value={formData.telefone}
                          onChange={handleChange}
                          placeholder="Ex: 21999999999"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-brand-primary)]/50 transition-colors font-secondary text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-[var(--color-brand-accent)] text-xs font-bold uppercase tracking-widest mb-1 font-secondary">
                          Graduação Completa?
                        </label>
                        <select
                          name="formacao"
                          required
                          value={formData.formacao}
                          onChange={handleChange}
                          className="w-full bg-[#0d1310] border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[var(--color-brand-primary)]/50 transition-colors font-secondary text-sm cursor-pointer"
                        >
                          <option value="">Selecione...</option>
                          <option value="Sim">Sim</option>
                          <option value="Não">Não</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[var(--color-brand-accent)] text-xs font-bold uppercase tracking-widest mb-1 font-secondary">
                        Qual a sua área de formação?
                      </label>
                      <input
                        type="text"
                        name="area"
                        required
                        value={formData.area}
                        onChange={handleChange}
                        placeholder="Ex: Biologia, Geografia, Engenharia..."
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/20 focus:outline-none focus:border-[var(--color-brand-primary)]/50 transition-colors font-secondary text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full shape-leaf bg-brand-gradient text-[var(--color-brand-dark)] font-bold py-3.5 mt-4 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(15,166,10,0.3)] cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          SOLICITANDO ACESSO...
                        </>
                      ) : (
                        <>
                          CLIQUE AQUI E VAMOS PRA CIMA!
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_25px_rgba(15,166,10,0.4)]">
                    <Check className="w-8 h-8 text-[var(--color-brand-dark)]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-primary uppercase mb-3">
                    Acesso Liberado!
                  </h2>
                  <p className="text-[var(--color-brand-light)]/70 font-secondary text-base leading-relaxed">
                    O link de acesso ao Pacotão QGIS foi enviado para o seu e-mail. Aproveite!
                  </p>
                </motion.div>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
