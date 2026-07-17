import { motion } from 'framer-motion';

interface TransformationProps {
  onOpenModal: () => void;
}

export default function Transformation({ onOpenModal }: TransformationProps) {
  return (
    <section id="sobre" className="py-24 bg-[var(--color-brand-dark)] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Image with modern offset border style */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute inset-0 border-2 border-[var(--color-brand-primary)] rounded-3xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 pointer-events-none"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10 aspect-[4/5]">
              <img
                src={`${import.meta.env.BASE_URL}henrique-story.webp`}
                alt="Henrique Gonzalez Story"
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
              />
            </div>
          </motion.div>

          {/* Right Column: Copywriting content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <span className="text-xs font-semibold tracking-widest text-[var(--color-brand-accent)] uppercase mb-3">COMO O PAP PODE TE AJUDAR?</span>
            <h2 className="text-3xl md:text-5xl font-bold font-primary uppercase tracking-wide leading-tight mb-8">
              Elaborar mapas profissionais mudou a minha vida, e pode mudar a sua também.
            </h2>

            <div className="space-y-6 text-[var(--color-brand-light)]/80 font-secondary text-sm md:text-base leading-relaxed">
              <p>
                Nos últimos 10 anos, realizei os mais variados tipos de análises espaciais e mapas técnicos, desde mapas para consultorias ambientais, mapas acadêmicos para artigos e até mapas decorativos.
              </p>
              <p>
                Saí de uma constante insegurança em relação a minha formação (cursei 3 cursos diferentes antes de me formar Engenheiro Ambiental na UFRJ), até ser considerado um dos profissionais que mais gera resultado na área ambiental, sendo convidado para palestras e já tendo treinado mais de 80 mil pessoas de diversos países.
              </p>
              <p>
                Em 2015, tive a oportunidade fornecida pelo governo de estudar SIG com um dos maiores nomes do Sensoriamento Remoto, Alfredo Huete, na University of Technology em Sydney na Austrália.
              </p>
              <p>
                A partir daí a chave virou e eu realmente encontrei o que eu amava. Hoje, trago esse conhecimento de forma didática e descomplicada para alunos que desejam ter acesso a uma metodologia única (TPRO) que tem como foco a aplicação da Tecnologia, Prática, Resultado e Orientação na resolução de problemas práticos reais do mercado de trabalho, ganhando melhores salários e sendo valorizados na área ambiental.
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenModal}
              className="mt-10 shape-leaf group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-gradient text-[var(--color-brand-dark)] font-bold text-base overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_var(--color-brand-primary)]/20 hover:shadow-[0_0_30px_var(--color-brand-primary)]/40 cursor-pointer"
            >
              <span className="relative z-10 transition-colors uppercase tracking-wider font-primary">GARANTIR A MINHA VAGA</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
