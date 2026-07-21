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
    <section id="para-quem-e" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[var(--color-brand-primary)] uppercase">SERVE PARA VOCÊ?</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-primary uppercase tracking-wide text-[var(--color-brand-dark)]">
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
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:bg-gray-50 hover:border-gray-200 transition-all duration-300 flex flex-col items-center text-center shadow-lg hover:shadow-xl"
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
                    background: `rgba(0, 0, 0, 0.02)`,
                    border: `1px solid rgba(0, 0, 0, 0.05)`,
                    color: target.color
                  }}
                >
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 font-primary uppercase text-[var(--color-brand-dark)] tracking-wide">
                  {target.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed font-secondary">
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
