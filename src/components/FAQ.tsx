import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
    <section id="perguntas-frequentes" className="py-24 bg-white relative border-t border-gray-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[var(--color-brand-primary)] uppercase">DÚVIDAS FREQUENTES</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-primary uppercase tracking-wide text-[var(--color-brand-dark)]">
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
                className="bg-gray-50 border-2 border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-300 hover:shadow-md hover:bg-gray-100"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-[var(--color-brand-dark)] text-base md:text-lg font-secondary">
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
                      <div className="px-6 pb-6 text-sm md:text-base text-gray-600 font-secondary leading-relaxed border-t-2 border-gray-100 pt-4">
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
          className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center max-w-2xl mx-auto shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
        >
          <h3 className="text-xl md:text-2xl font-bold font-primary uppercase text-[var(--color-brand-dark)] mb-2">
            Ficou com alguma dúvida por aí?
          </h3>
          <p className="text-sm md:text-base text-gray-600 font-secondary mb-8">
            Converse diretamente conosco. Estamos prontos para te ajudar.
          </p>

          <a 
            href="https://tinyurl.com/contato-ambientalpro"
            target="_blank"
            rel="noopener noreferrer"
            className="shape-leaf group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-black font-bold text-base overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] cursor-pointer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            <span className="relative z-10 uppercase tracking-wider font-primary">FALAR COM A AMBIENTAL PRO</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
