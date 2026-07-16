import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Qual software é utilizado nas aulas?',
    answer: 'Nós focamos principalmente no QGIS, que é a ferramenta de SIG de código aberto mais utilizada no mundo, além do Google Earth Engine para sensoriamento remoto avançado em nuvem.'
  },
  {
    question: 'O curso tem certificado reconhecido pelo MEC?',
    answer: 'Sim, ao concluir o Programa Ambiental Pro, você receberá um certificado de Curso de Extensão Universitária com carga horária de 200 horas validado pelo MEC.'
  },
  {
    question: 'Como funciona a garantia do curso?',
    answer: 'Você tem duas garantias. A Incondicional de 15 dias (se não gostar, devolvemos seu dinheiro na hora). E a Garantia Condicional: se você seguir o método, assistir às aulas, criar seu portfólio, prospectar e mesmo assim não tiver resultados, devolvemos seu dinheiro e depositamos mais R$ 1.000,00 adicionais na sua conta pelo seu tempo.'
  },
  {
    question: 'E se eu tiver dúvidas durante as aulas?',
    answer: 'Você terá acesso a suporte diário de nossa equipe de especialistas, além do grupo de alunos no WhatsApp para trocar ideias e fazer networking com profissionais da área.'
  },
  {
    question: 'Por quanto tempo terei acesso ao curso?',
    answer: 'O acesso ao Programa Ambiental Pro é anual (12 meses), incluindo todas as atualizações de aulas, novos módulos e gravação de lives lançadas no período.'
  },
  {
    question: 'Quais as formas de pagamento disponíveis?',
    answer: 'Você pode pagar via Cartão de Crédito (em até 12x de R$ 99,70), PIX à vista com 15% de desconto (R$ 997,00) ou boleto bancário.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="perguntas-frequentes" className="py-24 bg-gradient-to-b from-[var(--color-brand-dark)] to-[#010603] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[var(--color-brand-primary)] uppercase">DÚVIDAS FREQUENTES</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-primary uppercase tracking-wide">
            Perguntas <span className="text-brand-gradient">Frequentes</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-20">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-white text-base md:text-lg font-secondary">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[var(--color-brand-primary)]"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-sm md:text-base text-[var(--color-brand-light)]/70 font-secondary leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* WhatsApp CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center max-w-2xl mx-auto shadow-xl"
        >
          <h3 className="text-xl md:text-2xl font-bold font-primary uppercase text-white mb-2">
            Ficou com alguma dúvida por aí?
          </h3>
          <p className="text-sm md:text-base text-[var(--color-brand-light)]/60 font-secondary mb-8">
            Converse diretamente conosco. Estamos prontos para te ajudar.
          </p>

          <a 
            href="https://tinyurl.com/contato-ambientalpro"
            target="_blank"
            rel="noopener noreferrer"
            className="shape-leaf group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-black font-bold text-base overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span className="relative z-10 uppercase tracking-wider font-primary">FALAR COM A AMBIENTAL PRO</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
