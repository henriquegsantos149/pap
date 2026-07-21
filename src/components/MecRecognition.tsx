import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

export default function MecRecognition() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image / Certificate Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex justify-center"
          >
            <img 
              src={`${import.meta.env.BASE_URL}reconhecido_mec.webp`} 
              alt="Certificado reconhecido pelo MEC" 
              className="w-full max-w-[260px] h-auto object-contain drop-shadow-[0_10px_25px_rgba(15,166,10,0.15)]"
            />
          </motion.div>

          {/* Right Column: Information */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-[var(--color-brand-primary)] uppercase tracking-widest mb-6 font-secondary">
              <Award className="w-3.5 h-3.5" />
              Certificação Oficial
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold font-primary uppercase tracking-wide leading-tight mb-6 text-slate-900">
              Curso de Extensão Universitária
            </h2>
            
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-secondary mb-8">
              Curso de Extensão Universitária em Geoprocessamento, Sensoriamento Remoto e produção de mapas profissionais, com certificado com carga horária de 200 horas validado pelo Ministério da Educação (MEC).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex items-center gap-3 text-sm text-slate-700 font-secondary font-medium">
                <CheckCircle className="w-5 h-5 text-[var(--color-brand-primary)] shrink-0" />
                Carga Horária de 200 Horas
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700 font-secondary font-medium">
                <CheckCircle className="w-5 h-5 text-[var(--color-brand-primary)] shrink-0" />
                Válido em todo o território nacional
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700 font-secondary font-medium">
                <CheckCircle className="w-5 h-5 text-[var(--color-brand-primary)] shrink-0" />
                Enriquece o Currículo Lattes
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700 font-secondary font-medium">
                <CheckCircle className="w-5 h-5 text-[var(--color-brand-primary)] shrink-0" />
                Garante pontuação em concursos públicos
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
