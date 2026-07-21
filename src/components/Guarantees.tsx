import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Award, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

const contracts = ['contrato-1.jpg', 'contrato-2.jpg', 'contrato-3.jpg'];

export default function Guarantees() {
  const [contractIndex, setContractIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextContract = () => {
    setContractIndex((prev) => (prev + 1) % contracts.length);
  };

  const prevContract = () => {
    setContractIndex((prev) => (prev - 1 + contracts.length) % contracts.length);
  };

  return (
    <section id="garantia" className="py-24 bg-gradient-to-b from-[#010905] to-[var(--color-brand-dark)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Conditional Guarantee Card */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-16 mb-16 shadow-[0_10px_40px_rgba(0,0,0,0.05)] relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left/Text Side */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-primary)]/10 border border-[var(--color-brand-primary)]/20 text-xs font-semibold text-[var(--color-brand-primary)] uppercase tracking-widest mb-6">
                <ShieldAlert className="w-3.5 h-3.5" />
                Risco Zero Absoluto
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold font-primary uppercase tracking-wide leading-tight mb-6 text-[var(--color-brand-dark)]">
                Garantia Condicional:<br />
                Tenha resultados ou vou te dar seu dinheiro de volta + R$ 1.000,00!
              </h2>

              <div className="space-y-4 text-sm md:text-base text-gray-600 font-secondary leading-relaxed mb-6">
                <p>
                  O PAP é um investimento garantido. Se você seguir a metodologia completa, assistir as aulas, montar o portfólio, prospectar e não der certo, devolvemos 100% do seu investimento.
                </p>
                <p>
                  Além disso, caso não alcance os resultados prometidos, faremos um depósito adicional de R$ 1.000 em sua conta como forma de compensação pelo seu tempo.
                </p>
              </div>
            </motion.div>

            {/* Right/Contracts Carousel Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 flex flex-col items-center"
            >
              <div className="relative group w-full max-w-[280px] aspect-[1/1.4] rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-gray-50 cursor-zoom-in" onClick={() => setLightboxOpen(true)}>
                <img 
                  src={`${import.meta.env.BASE_URL}${contracts[contractIndex]}`} 
                  alt="Termos do Contrato de Garantia" 
                  className="w-full h-full object-cover"
                />

                {/* Arrow Overlays */}
                <button 
                  onClick={(e) => { e.stopPropagation(); prevContract(); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 border border-gray-200 text-gray-800 hover:bg-white transition-all z-10 cursor-pointer shadow-md"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextContract(); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 border border-gray-200 text-gray-800 hover:bg-white transition-all z-10 cursor-pointer shadow-md"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Zoom overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xs text-gray-400 font-secondary mt-3">
                Contrato Página {contractIndex + 1} de {contracts.length}
              </span>
            </motion.div>

          </div>
        </div>

        {/* Unconditional Guarantee Card */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: 15-day Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 flex justify-center order-2 lg:order-1"
            >
              <img 
                src={`${import.meta.env.BASE_URL}15-dias.webp`} 
                alt="Selo de 15 dias de garantia incondicional" 
                className="w-48 md:w-64 h-auto object-contain drop-shadow-[0_10px_20px_rgba(15,166,10,0.25)] animate-pulse"
              />
            </motion.div>

            {/* Right Side: Copy */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-brand-primary)]/10 border border-[var(--color-brand-primary)]/20 text-xs font-semibold text-[var(--color-brand-primary)] uppercase tracking-widest mb-6">
                <Award className="w-3.5 h-3.5" />
                Garantia Incondicional
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold font-primary uppercase tracking-wide leading-tight mb-6 text-[var(--color-brand-dark)]">
                Experimente por 15 dias sem compromisso
              </h2>

              <div className="space-y-4 text-sm md:text-base text-gray-600 font-secondary leading-relaxed">
                <p>
                  Teste o PAP por 15 dias inteiros (<strong>7 dias a mais do que a lei exige</strong>). Se achar que a metodologia não é para você, basta enviar um e-mail ou WhatsApp e devolvemos 100% do seu dinheiro na hora, sem nenhum questionamento. Confiamos plenamente nos resultados dos nossos alunos!
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>

      {/* Contract Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all cursor-pointer">
              <X className="w-6 h-6" />
            </button>

            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-lg w-full aspect-[1/1.4] bg-black rounded-lg overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={`${import.meta.env.BASE_URL}${contracts[contractIndex]}`} 
                alt="Contrato ampliado" 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
