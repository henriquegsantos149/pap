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
        <motion.button
          onClick={onOpenModal}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 shape-leaf px-6 py-4 bg-brand-gradient text-[var(--color-brand-dark)] font-bold text-sm tracking-wide uppercase transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_var(--color-brand-primary)]/40 hover:shadow-[0_0_25px_var(--color-brand-primary)]/60 cursor-pointer font-primary"
        >
          Garantir Minha Vaga
        </motion.button>
      )}
    </AnimatePresence>
  );
}
