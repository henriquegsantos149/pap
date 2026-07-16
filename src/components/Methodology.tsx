import { motion } from 'framer-motion';
import { Cpu, CheckCircle2, Award, Users } from 'lucide-react';

const pillars = [
  {
    letter: 'T',
    name: 'Tecnologia',
    description: 'Domínio das melhores ferramentas de Geoprocessamento e Sensoriamento Remoto do mercado, como QGIS e Google Earth Engine.',
    icon: Cpu,
    color: '#0FA60A'
  },
  {
    letter: 'P',
    name: 'Prática',
    description: 'Aulas 100% voltadas a problemas reais. Chega de teoria abstrata: aprenda executando projetos e mapas reais do mercado de trabalho.',
    icon: CheckCircle2,
    color: '#51A629'
  },
  {
    letter: 'R',
    name: 'Resultado',
    description: 'Foco na geração de entregas visuais impecáveis, mapas técnicos profissionais e análises espaciais que resolvem gargalos de projetos.',
    icon: Award,
    color: '#9ABF4B'
  },
  {
    letter: 'O',
    name: 'Orientação',
    description: 'Direcionamento com suporte especializado para que você nunca se sinta travado em nenhuma fase da sua curva de aprendizado.',
    icon: Users,
    color: '#585859'
  }
];

export default function Methodology() {
  return (
    <section id="metodo" className="py-24 bg-gradient-to-b from-[#020705] to-[var(--color-brand-dark)] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[var(--color-brand-secondary)] uppercase">METODOLOGIA ÚNICA</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-primary uppercase tracking-wide">
            O Método <span className="text-brand-gradient">TPRO</span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary text-sm md:text-base mt-4">
            Uma abordagem acelerada que foca exatamente no que o mercado ambiental exige de você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-start shadow-lg"
              >
                {/* Large letter watermark */}
                <div 
                  className="absolute top-4 right-6 text-7xl font-extrabold opacity-5 group-hover:opacity-10 transition-opacity duration-300 font-impact selection:bg-transparent"
                  style={{ color: pillar.color }}
                >
                  {pillar.letter}
                </div>

                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300"
                  style={{
                    background: `rgba(255, 255, 255, 0.03)`,
                    border: `1px solid rgba(255, 255, 255, 0.08)`,
                    color: pillar.color
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 font-primary uppercase text-white tracking-wide">
                  {pillar.name}
                </h3>

                {/* Description */}
                <p className="text-[var(--color-brand-light)]/70 text-sm leading-relaxed font-secondary">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
