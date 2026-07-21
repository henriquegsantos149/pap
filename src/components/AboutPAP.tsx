import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, MessageSquare, Users, Star } from 'lucide-react';

interface CountUpProps {
  end: number;
  duration?: number;
  decimals?: number;
}

function CountUp({ end, duration = 1200, decimals = 0 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          let startTimestamp: number | null = null;
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Quadratic ease-out curve: t * (2 - t)
            const easeOutQuad = progress * (2 - progress);
            const currentCount = easeOutQuad * end;
            setCount(currentCount);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  const formatted = count.toLocaleString('pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return <span ref={elementRef}>{formatted}</span>;
}

export default function AboutPAP() {
  const highlights = [
    {
      icon: Compass,
      title: "Multiferramentas",
      description: "QGIS, ArcGIS Pro, Processamento de Drones, R e Python. Tudo integrado em uma única formação."
    },
    {
      icon: MessageSquare,
      title: "Suporte Diário Individual",
      description: "Área de dúvidas ativa com plantões de especialistas para analisar e destravar o seu projeto real."
    },
    {
      icon: Award,
      title: "Certificado MEC de 200h",
      description: "Extensão universitária válida nacionalmente que valoriza seu currículo em concursos e processos seletivos."
    },
    {
      icon: Users,
      title: "Comunidade Ambiental Pro",
      description: "A maior rede de networking de analistas ambientais e geoprocessadores do país para parcerias e vagas."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#020905] to-[var(--color-brand-dark)] relative overflow-hidden ">
      {/* Glow elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-[var(--color-brand-primary)]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Mockup / Stats Board */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Visual card */}
            <div className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md overflow-hidden shadow-2xl">
              <div className="absolute -top-10 -left-10 w-28 h-28 bg-[var(--color-brand-primary)]/15 rounded-full blur-2xl"></div>
              
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-brand-accent)] bg-[var(--color-brand-accent)]/10 px-3 py-1 rounded-full border border-[var(--color-brand-accent)]/20 mb-6 inline-block">
                ECOSSISTEMA PAP 5.0
              </span>
              
              <h3 className="text-2xl font-bold font-primary text-white uppercase tracking-wide leading-tight mb-4">
                O passaporte para a sua segurança profissional
              </h3>
              
              <p className="text-sm text-[var(--color-brand-light)]/70 font-secondary leading-relaxed mb-6">
                Mais do que um curso: um ecossistema com Inteligência Artificial para você elaborar mapas perfeitos, currículos blindados e relatórios técnicos incontestáveis.
              </p>

              {/* Mini Stats Grid with CountUp Animation */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div>
                  <p className="text-3xl font-extrabold text-[var(--color-brand-primary)] font-primary">
                    +<CountUp end={15000} duration={2500} />
                  </p>
                  <p className="text-xs text-[var(--color-brand-light)]/50 font-secondary uppercase tracking-wider mt-1">Alunos Treinados</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-white font-primary flex items-center gap-1">
                    <CountUp end={4.9} duration={2500} decimals={1} />
                    <Star className="w-5 h-5 fill-[var(--color-brand-accent)] text-[var(--color-brand-accent)] shrink-0" />
                  </p>
                  <p className="text-xs text-[var(--color-brand-light)]/50 font-secondary uppercase tracking-wider mt-1">Avaliação Média</p>
                </div>
              </div>
            </div>

            {/* Micro banner alert */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-gradient/10 border border-[var(--color-brand-primary)]/20">
              <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center text-[var(--color-brand-dark)] font-bold font-primary shrink-0">
                100%
              </div>
              <p className="text-xs text-white/95 font-secondary leading-relaxed">
                <strong>Prática voltada ao mercado real:</strong> Estudos de caso baseados em demandas reais enviadas por órgãos ambientais.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Title and Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start justify-center"
          >
            <span className="text-xs font-semibold tracking-widest text-[var(--color-brand-primary)] uppercase mb-3">O QUE É O PROGRAMA</span>
            
            <h2 className="text-3xl md:text-5xl font-bold font-primary uppercase tracking-tight text-white mb-6 leading-tight">
              O maior ecossistema de <br />
              <span className="text-brand-gradient">Geoprocessamento e IA</span> do país
            </h2>

            <p className="text-base md:text-lg text-[var(--color-brand-light)]/80 leading-relaxed font-secondary mb-10 max-w-2xl">
              O <span className="text-[var(--color-brand-primary)] font-bold">Programa Ambiental Pro (PAP 5.0)</span> evoluiu. Agora, além de te ensinar, na prática e do zero, a dominar as principais ferramentas como <span className="text-white font-bold">QGIS</span>, <span className="text-white font-bold">ArcGIS Pro</span>, <span className="text-white font-bold">Drones</span>, <span className="text-white font-bold">R</span> e <span className="text-white font-bold">Python</span>, você também conta com <strong>Agentes de Inteligência Artificial</strong> para tirar dúvidas 24h, analisar seus mapas e otimizar seu currículo. O objetivo é um só: te capacitar de forma inteligente para produzir mapas e relatórios que aprovam licenciamentos ambientais sem burocracia e destravam contratos de alto valor.
            </p>

            {/* Highlights list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-8">
              {highlights.map((hl, i) => {
                const Icon = hl.icon;
                return (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/[0.01] transition-colors border border-transparent hover:border-white/5">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-brand-accent)] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base font-primary uppercase tracking-wide mb-1">
                        {hl.title}
                      </h4>
                      <p className="text-xs text-[var(--color-brand-light)]/60 font-secondary leading-relaxed">
                        {hl.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
