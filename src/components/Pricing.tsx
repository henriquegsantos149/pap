import { motion } from 'framer-motion';
import { Check, ShieldCheck } from 'lucide-react';

interface PricingProps {
  onOpenModal: () => void;
}

const valueItems = [
  { text: 'Módulos Práticos Sequenciais', originalPrice: 'R$ 1.050,00' },
  { text: 'Gravação de Todas as Lives', originalPrice: 'R$ 1.638,00' },
  { text: 'Cursos com Especialistas', originalPrice: 'R$ 497,00' },
  { text: 'Certificado Reconhecido pelo MEC', originalPrice: 'R$ 497,00' },
  { text: 'Sucesso do Aluno', originalPrice: 'R$ 450,00' },
  { text: 'Desafios Ambiental Pro', originalPrice: 'R$ 397,00' },
  { text: 'Grupo da Turma no WhatsApp', originalPrice: 'R$ 200,00' },
  { text: 'Comunidade Profissional no LinkedIn', originalPrice: 'R$ 200,00' },
  { text: 'Acelerador de Resultados', originalPrice: 'R$ 2.997,00' },
  { text: 'Carteirinha Digital de Estudante', originalPrice: 'Incalculável' }
];

export default function Pricing({ onOpenModal }: PricingProps) {
  return (
    <section id="preco" className="py-24 bg-[var(--color-brand-dark)] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[var(--color-brand-accent)] uppercase">INVESTIMENTO</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-primary uppercase tracking-wide">
            Quanto você irá <span className="text-brand-gradient">investir</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Checklist of values */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold font-primary uppercase text-white tracking-wide mb-6">
                Tudo o que está incluso no programa:
              </h3>
              
              <ul className="space-y-4">
                {valueItems.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between text-sm md:text-base border-b border-white/5 pb-2">
                    <div className="flex items-center gap-3 text-[var(--color-brand-light)]/80 font-secondary">
                      <Check className="w-5 h-5 text-[var(--color-brand-primary)] shrink-0" />
                      {item.text}
                    </div>
                    <span className="text-[var(--color-brand-light)]/40 line-through text-xs font-secondary shrink-0">
                      {item.originalPrice}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center">
              <span className="text-base text-[var(--color-brand-light)]/60 font-secondary">Valor Total Real:</span>
              <span className="text-lg font-bold text-white line-through font-secondary">R$ 7.926,00</span>
            </div>
          </motion.div>

          {/* Right Column: Checkout Pricing Promo Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-gradient-to-b from-[#020d04] to-[#010602] border-2 border-[var(--color-brand-primary)] rounded-3xl p-8 md:p-12 flex flex-col justify-between text-center relative shadow-[0_0_50px_rgba(15,166,10,0.15)]"
          >
            {/* Top Tag */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-brand-gradient text-[var(--color-brand-dark)] text-xs font-bold uppercase tracking-wider">
              Oferta Especial
            </div>

            <div>
              {/* Product Mockup Image */}
              <div className="mb-8 flex justify-center">
                <img 
                  src={`${import.meta.env.BASE_URL}pap-mockup.webp?v=2`} 
                  alt="Programa Ambiental Pro Mockup" 
                  className="h-44 w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]"
                />
              </div>

              {/* Strikethrough from price */}
              <p className="text-[var(--color-brand-light)]/60 text-sm font-secondary">
                por apenas
              </p>

              {/* Promo Price */}
              <div className="my-6">
                <span className="text-sm font-semibold text-[var(--color-brand-accent)] uppercase tracking-wider block font-secondary">12x de</span>
                <h3 className="text-5xl md:text-6xl font-black font-primary text-white tracking-tight mt-1">
                  R$ 149,70
                </h3>
                <span className="text-xs text-[var(--color-brand-light)]/50 font-secondary mt-2 block">
                  ou R$ 1.497,00 à vista (15% de desconto)
                </span>
              </div>
            </div>

            {/* Call to action & trust badge */}
            <div className="mt-8 space-y-6">
              <button 
                onClick={onOpenModal}
                className="w-full shape-leaf group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-brand-gradient text-[var(--color-brand-dark)] font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_var(--color-brand-primary)]/40 hover:shadow-[0_0_30px_var(--color-brand-primary)]/60 cursor-pointer"
              >
                <span className="relative z-10 transition-colors uppercase tracking-wider font-primary">COMPRAR AGORA</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-[var(--color-brand-light)]/60 font-secondary">
                <ShieldCheck className="w-4 h-4 text-[var(--color-brand-primary)]" />
                Compra 100% Segura • Assinatura Anual
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
