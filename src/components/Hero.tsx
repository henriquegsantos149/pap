import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#010a04] to-[var(--color-brand-dark)]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-75"></div>
      
      {/* Glow elements */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-brand-primary)]/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[var(--color-brand-accent)]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-36 pb-20 text-center flex flex-col items-center">
        
        {/* Small Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[var(--color-brand-primary)]/30 text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-primary)] mb-8 shadow-[0_0_15px_var(--color-brand-primary)]/20"
        >
          <Sparkles className="w-3.5 h-3.5" />
          PROGRAMA AMBIENTAL PRO 5.0
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight mb-8 max-w-5xl uppercase leading-[1.1] font-primary"
        >
          A formação mais completa <br />
          do mundo em <br />
          <span className="inline-block bg-brand-gradient text-[var(--color-brand-dark)] px-4 py-1 md:px-6 md:py-1.5 mt-3 mb-1.5 shape-leaf transform -skew-x-6">
            <span className="inline-block skew-x-6">Geoprocessamento</span>
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-[var(--color-brand-light)]/80 mb-10 max-w-3xl leading-relaxed font-secondary"
        >
          Garanta o seu lugar de destaque no setor ambiental com a nova fase do PAP. Acelere seus resultados combinando <strong>Geoprocessamento e Inteligência Artificial</strong> para a criação de mapas técnicos profissionais. Tudo isso com certificado validado pelo MEC.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button 
            onClick={onOpenModal}
            className="shape-leaf group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-gradient text-[var(--color-brand-dark)] font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_25px_var(--color-brand-primary)]/30 hover:shadow-[0_0_35px_var(--color-brand-primary)]/50 cursor-pointer"
          >
            <span className="relative z-10 transition-colors uppercase tracking-wider font-primary">GARANTIR A MINHA VAGA</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="absolute bottom-6 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-[var(--color-brand-accent)] opacity-70" />
        </motion.div>

      </div>
    </section>
  );
}
