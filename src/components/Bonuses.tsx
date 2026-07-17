import { motion } from 'framer-motion';
import { Gift, Terminal, CreditCard, ChevronRight, Ticket, FileText } from 'lucide-react';

const mainBonuses = [
  { id: 1, title: 'Curso de Hidrologia Descomplicada' },
  { id: 2, title: 'Curso de Sensoriamento Remoto Avançado' },
  { id: 3, title: 'Curso de Processamento de Imagens de Drone' },
  { id: 4, title: 'Curso de Geologia Aplicada' },
  { id: 5, title: 'Curso de Geomarketing na Prática' },
  { id: 6, title: 'Curso de CAR (Cadastro Ambiental Rural)' },
  { id: 7, title: 'Curso de Google Earth Engine' },
  { id: 8, title: 'Curso de Geoprocessamento Aplicado ao Licenciamento Ambiental' },
  { id: 9, title: 'Curso de Agricultura de Precisão' },
  { id: 10, title: 'Mini-Curso de Memorial Descritivo e Plantas Topográficas Automatizadas' }
];

export default function Bonuses() {
  return (
    <section id="bonus" className="py-24 bg-[var(--color-brand-dark)] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[var(--color-brand-primary)] uppercase">BÔNUS EXCLUSIVOS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-primary uppercase tracking-wide">
            Acelere com <span className="text-brand-gradient">Super Bônus</span>
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary text-sm md:text-base mt-4">
            Além do conteúdo completo de Geoprocessamento, você recebe capacitações de ponta sem pagar nenhum centavo extra.
          </p>
        </div>

        {/* 10 Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {mainBonuses.map((bonus, index) => (
            <motion.div
              key={bonus.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[var(--color-brand-primary)] uppercase tracking-wider">Bônus {bonus.id}</span>
                  <Gift className="w-5 h-5 text-[var(--color-brand-accent)] opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-sm font-bold text-white font-secondary leading-snug group-hover:text-[var(--color-brand-accent)] transition-colors">
                  {bonus.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Promo Rows (Programming + Student ID) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Programming Bonus */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 text-[var(--color-brand-accent)] font-semibold tracking-wider text-xs uppercase mb-6">
                <Terminal className="w-4 h-4" />
                Mini-Cursos de Programação
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold font-primary uppercase tracking-wide mb-6">
                Linguagem R e Python aplicados ao Geo
              </h3>
              
              <p className="text-sm md:text-base text-[var(--color-brand-light)]/70 font-secondary leading-relaxed mb-6">
                <strong>Automatize tarefas e processe grandes volumes de dados espaciais.</strong> Aprenda a criar rotinas que economizam horas de trabalho manual e resolvem análises que softwares comuns não dão conta.
              </p>
              
              <p className="text-sm text-[var(--color-brand-light)]/50 font-secondary leading-relaxed">
                Tutoriais práticos do zero para você perder o medo de programar. Escreva seus primeiros scripts em R e Python com foco 100% no mercado ambiental.
              </p>
            </div>
            
            <div className="mt-8 flex justify-center">
              <img 
                src={`${import.meta.env.BASE_URL}r-python-logo.webp`} 
                alt="R and Python logos" 
                className="h-28 w-auto object-contain opacity-80"
              />
            </div>
          </motion.div>

          {/* Student ID (Carteirinha) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 text-[var(--color-brand-primary)] font-semibold tracking-wider text-xs uppercase mb-6">
                <CreditCard className="w-4 h-4" />
                Comprovante de Matrícula
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold font-primary uppercase tracking-wide mb-6">
                Carteirinha de Estudante Digital
              </h3>
              
              <p className="text-sm md:text-base text-[var(--color-brand-light)]/70 font-secondary leading-relaxed mb-6">
                Como aluno do PAP, você tem direito à carteirinha de estudante digital sem custo adicional. Ela garante meia entrada em shows, cinemas e eventos culturais em todo o país.
              </p>
              
              <p className="text-sm text-[var(--color-brand-light)]/50 font-secondary leading-relaxed">
                Após 15 dias da matrícula, sua carteirinha estará pronta para ser instalada diretamente no seu celular, pronta para uso.
              </p>
            </div>

            <div className="mt-8 flex items-center bg-black/30 border border-white/5 rounded-2xl p-4 gap-4 transition-colors hover:bg-white/5">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-primary)]/10 flex items-center justify-center text-[var(--color-brand-primary)] shrink-0">
                <Ticket className="w-5 h-5" />
              </div>
              <div className="text-left flex-1">
                <span className="text-xs font-bold text-[var(--color-brand-primary)] uppercase tracking-wider block">Bônus Adicional</span>
                <span className="text-sm font-semibold text-white">Meia Entrada Garantida</span>
              </div>
              <ChevronRight className="w-5 h-5 text-[var(--color-brand-light)]/30" />
            </div>
          </motion.div>

          {/* CV Pro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-12 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 text-[var(--color-brand-accent)] font-semibold tracking-wider text-xs uppercase mb-6">
                <FileText className="w-4 h-4" />
                Preparação Profissional
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold font-primary uppercase tracking-wide mb-6">
                Currículo Pro: Seu Currículo no Topo
              </h3>
              
              <p className="text-sm md:text-base text-[var(--color-brand-light)]/70 font-secondary leading-relaxed mb-6">
                Acesso exclusivo ao nosso <strong className="text-white">Software de Inteligência Artificial</strong> focado no mercado ambiental. Ele analisa descritivos de vagas reais e cria ou otimiza o seu currículo automaticamente para entregar exatamente o que os recrutadores estão procurando.
              </p>
              
              <p className="text-sm text-[var(--color-brand-light)]/50 font-secondary leading-relaxed">
                Esqueça modelos genéricos. O Currículo Pro usa IA para destacar suas habilidades de forma estratégica e personalizada para cada vaga, transformando seu currículo em uma máquina de gerar entrevistas, mesmo que você não tenha muita experiência na área.
              </p>
            </div>

            <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center mt-8 md:mt-0">
              <img 
                src={`${import.meta.env.BASE_URL}cvpro-logo.webp`} 
                alt="Logo Currículo Pro" 
                className="w-56 md:w-72 h-auto object-contain drop-shadow-[0_10px_20px_rgba(15,166,10,0.3)] hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
