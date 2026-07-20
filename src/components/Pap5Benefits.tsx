import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Pap5Benefits() {
  const benefits = [
    {
      title: "Hub Totalmente Novo",
      description: "Uma experiência de aprendizado reformulada, mais rápida, intuitiva e focada na sua evolução."
    },
    {
      title: "Agentes Especialistas",
      description: "Dois agentes de IA dedicados: um para tirar suas dúvidas técnicas 24/7 e outro para analisar seus mapas."
    },
    {
      title: "Currículo Pro",
      description: "Um agente inteligente exclusivo para analisar, formatar e criar um currículo impossível de ser ignorado."
    },
    {
      title: "Aulas com Claude",
      description: "No final de cada módulo do QGIS, aulas especiais resolvendo desafios do tema com auxílio da IA Claude."
    },
    {
      title: "Módulo IA na Prática",
      description: "Um módulo inteiro inédito para te ensinar a dominar as IAs e integrá-las aos seus projetos ambientais."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative py-24 bg-[#f2f7f3] overflow-hidden border-t border-[var(--color-brand-primary)]/20">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[var(--color-brand-primary)]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] font-semibold uppercase tracking-widest text-xs mb-6 border border-[var(--color-brand-primary)]/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Nova Fase
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-primary uppercase tracking-tight text-[var(--color-brand-dark)] mb-6"
          >
            O Geoprocessamento <br className="hidden md:block"/> 
            <span className="text-[var(--color-brand-primary)]">Encontrou a Inteligência Artificial</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto font-secondary"
          >
            Apresentamos o <strong>PAP 5.0</strong>. Não é apenas uma atualização, é um ecossistema completamente novo para acelerar seus resultados.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-6 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`bg-white border border-[var(--color-brand-primary)]/10 hover:border-[var(--color-brand-primary)]/40 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(15,166,10,0.1)] p-8 transition-all hover:-translate-y-1 group relative overflow-hidden flex flex-col justify-center rounded-2xl ${index < 3 ? 'md:col-span-2' : 'md:col-span-3'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-bold mb-3 font-primary uppercase tracking-wide text-brand-gradient">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
