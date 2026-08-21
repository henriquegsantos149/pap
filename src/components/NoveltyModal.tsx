import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NoveltyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NoveltyModal({ isOpen, onClose }: NoveltyModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#05130b] border border-[var(--color-brand-primary)]/30 p-8 shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-white/50 hover:text-white hover:bg-white/10 transition-colors z-10"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Glowing background accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-[var(--color-brand-primary)]/20 blur-[60px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-gradient flex items-center justify-center rounded-full mb-6 shadow-[0_0_30px_var(--color-brand-primary)]/40">
                <Sparkles className="w-8 h-8 text-[#010a04]" />
              </div>

              <h2 className="text-3xl font-bold font-primary uppercase tracking-tight text-white mb-2">
                O PAP Evoluiu. <br/>
                <span className="text-[var(--color-brand-primary)]">Chegou o PAP 5.0!</span>
              </h2>

              <p className="text-[var(--color-brand-light)]/80 text-sm md:text-base mb-8 leading-relaxed">
                Nós revolucionamos o Programa Ambiental Pro. Agora, além do Geoprocessamento de elite, você conta com <strong>Agentes de Inteligência Artificial</strong>, <strong>Criação de Currículos com IA</strong>, e muito mais para acelerar sua carreira.
              </p>

              <button
                onClick={onClose}
                className="w-full py-4 bg-brand-gradient text-[#010a04] font-bold uppercase tracking-wider font-primary hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-[0_0_20px_var(--color-brand-primary)]/30"
              >
                Conferir Novidades
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
