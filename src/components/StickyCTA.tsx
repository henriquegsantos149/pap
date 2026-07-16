import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StickyCTAProps {
  onOpenModal: () => void;
}

export default function StickyCTA({ onOpenModal }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scroll position is greater than 600px
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 w-full z-40 bg-[var(--color-brand-dark)]/90 backdrop-blur-md border-t border-white/10 py-4 px-6 md:py-3 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Title / Info */}
            <div className="text-center sm:text-left">
              <p className="text-xs font-semibold text-[var(--color-brand-accent)] uppercase tracking-wider font-secondary">
                Oferta Especial Ativa
              </p>
              <h4 className="text-sm md:text-base font-bold text-white font-primary uppercase tracking-wide">
                Formação Completa em Geoprocessamento por 12x de R$ 99,70
              </h4>
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto shape-leaf px-6 py-2.5 bg-brand-gradient text-[var(--color-brand-dark)] font-bold text-sm tracking-wide uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_var(--color-brand-primary)]/30 hover:shadow-[0_0_20px_var(--color-brand-primary)]/50 cursor-pointer font-primary"
            >
              Garantir Minha Vaga
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
