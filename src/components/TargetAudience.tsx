import { motion } from 'framer-motion';
import { Map, GraduationCap, Rocket } from 'lucide-react';

const targets = [
  {
    icon: Map,
    title: 'Profissionais da Área Ambiental',
    description: 'que querem se sentir seguros e confiantes com as demandas reais do mercado de trabalho.',
    color: 'var(--color-brand-primary)'
  },
  {
    icon: GraduationCap,
    title: 'Estudantes de Graduação e Pós-Graduação',
    description: 'que desejam ser convidados para participar de artigos e ganhar bolsas de estudo devido ao amplo conhecimento de Geoprocessamento e Sensoriamento Remoto.',
    color: 'var(--color-brand-secondary)'
  },
  {
    icon: Rocket,
    title: 'Analistas Ambientais',
    description: 'que querem ser valorizados por conseguirem sempre trazer as melhores soluções a partir de tomadas de decisões assertivas baseadas na análise de dados geográficos e mapas claros e impactantes.',
    color: 'var(--color-brand-accent)'
  }
];

export default function TargetAudience() {
  return (
    <section id="para-quem-e" className="py-24 bg-gradient-to-b from-[var(--color-brand-dark)] to-[#020705] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[var(--color-brand-primary)] uppercase">SERVE PARA VOCÊ?</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-primary uppercase tracking-wide">
            Para quem é o <span className="text-brand-gradient">PAP</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {targets.map((target, index) => {
            const Icon = target.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-center text-center shadow-lg"
              >
                {/* Glow border background */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: `0 0 30px ${target.color}`
                  }}
                ></div>

                {/* Icon wrapper */}
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300"
                  style={{
                    background: `rgba(255, 255, 255, 0.05)`,
                    border: `1px solid rgba(255, 255, 255, 0.1)`,
                    color: target.color
                  }}
                >
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 font-primary uppercase text-white tracking-wide">
                  {target.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--color-brand-light)]/70 text-sm leading-relaxed font-secondary">
                  {target.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
