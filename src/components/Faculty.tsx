import { motion } from 'framer-motion';

interface FacultyProps {
  onOpenModal: () => void;
}

export default function Faculty({ onOpenModal }: FacultyProps) {
  return (
    <section id="professores" className="py-24 bg-[var(--color-brand-dark)] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Henrique Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <span className="text-xs font-semibold tracking-widest text-[var(--color-brand-primary)] uppercase mb-3">QUEM SERÁ SEU PROFESSOR?</span>
            <h2 className="text-3xl md:text-5xl font-bold font-primary uppercase tracking-wide leading-tight mb-8">
              Henrique Gonzalez
            </h2>

            <div className="space-y-6 text-[var(--color-brand-light)]/80 font-secondary text-sm md:text-base leading-relaxed">
              <p>
                Henrique Gonzalez é Engenheiro Ambiental formado pela UFRJ e Especialista em Geotecnologias pelo IPOG. Teve a oportunidade de fazer uma parte da graduação na UTS (University of Technology Sydney) e lá se descobriu um apaixonado por Geoprocessamento e Sensoriamento Remoto.
              </p>
              <p>
                Após se formar, atuou em uma multinacional de consultoria ambiental para remediação de áreas contaminadas, mas nesse caminho identificou em si mesmo uma grande vontade de ensinar tudo o que vinha aprendendo com as oportunidades e experiências.
              </p>
              <p>
                Foi então que, no começo de 2019, ele fundou a Ambiental Pro com a missão de capacitar profissionais da área ambiental para suprir as demandas do mercado por meio de tecnologia e inovação. Ao longo de sua trajetória, já treinou mais de 70 mil profissionais no Brasil e no mundo, sempre com o propósito de democratizar o conhecimento técnico e valorizar quem atua na linha de frente dos desafios ambientais. Seu trabalho é referência para quem busca aliar impacto, eficiência e atualização constante em um setor em plena transformação.
              </p>
            </div>

            {/* CTA Button */}
            <button 
              onClick={onOpenModal}
              className="mt-10 shape-leaf group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-gradient text-[var(--color-brand-dark)] font-bold text-base overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_var(--color-brand-primary)]/20 hover:shadow-[0_0_30px_var(--color-brand-primary)]/40 cursor-pointer"
            >
              <span className="relative z-10 transition-colors uppercase tracking-wider font-primary">APROVEITAR DESCONTO</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </button>
          </motion.div>

          {/* Right Column: Henrique Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute inset-0 border-2 border-[var(--color-brand-accent)] rounded-3xl translate-x-[-16px] translate-y-4 group-hover:translate-x-[-8px] group-hover:translate-y-2 transition-transform duration-300 pointer-events-none"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10 aspect-[4/5]">
              <img 
                src={`${import.meta.env.BASE_URL}henrique-profile.png`} 
                alt="Henrique Gonzalez Professor" 
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
