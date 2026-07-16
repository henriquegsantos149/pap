import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const modules = [
  {
    title: "Módulo 1: Introdução ao QGIS e Geoprocessamento",
    objective: "Introduzir os fundamentos da cartografia e do geoprocessamento, configurando o ambiente do software QGIS para início seguro dos trabalhos práticos.",
    practicalFocus: "Domínio da interface do QGIS, configurações essenciais do projeto, conceitos práticos de datum (SIRGAS 2000), sistemas de coordenadas (GCS vs UTM) e importação inicial de dados espaciais."
  },
  {
    title: "Módulo 2: Criação e Vetorização de Dados Espaciais",
    objective: "Desenvolver habilidades sólidas na criação, vetorização e edição de arquivos vetoriais utilizando padrões profissionais da indústria.",
    practicalFocus: "Modelagem de dados com GeoPackages e Shapefiles, edição de geometrias (pontos, linhas e polígonos), preenchimento estratégico da tabela de atributos e ferramentas de aderência (snapping)."
  },
  {
    title: "Módulo 3: Simbologia e Rótulos Avançados",
    objective: "Aprender a representar visualmente os dados espaciais de forma clara, estética e profissional para garantir fácil interpretação em relatórios técnicos.",
    practicalFocus: "Configuração de simbologias categorizadas, graduadas e baseadas em regras; criação de rótulos dinâmicos inteligentes que evitam sobreposição e ajustam-se automaticamente à escala."
  },
  {
    title: "Módulo 4: Sensoriamento Remoto e Imagens de Satélite",
    objective: "Dominar o acesso, download e o processamento de imagens provenientes dos principais satélites do mundo para fins de monitoramento ambiental.",
    practicalFocus: "Operação com sensores orbitais (Landsat, Sentinel, Planet), composições coloridas de bandas (cor verdadeira e falsa cor) e cálculo prático de índices espectrais como NDVI (vegetação) e NDWI (água)."
  },
  {
    title: "Módulo 5: Processamento Digital de Imagens e Dados Raster",
    objective: "Explorar o potencial dos dados raster e de altimetria para entender o relevo de uma região e produzir análises físicas complexas.",
    practicalFocus: "Processamento de Modelos Digitais de Elevação (MDE), geração automática de curvas de nível, cálculo de mapas de declividade (slope), orientação de vertentes (aspect) e relevo sombreado (hillshade)."
  },
  {
    title: "Módulo 6: Ferramentas de Análise Espacial Avançada",
    objective: "Aprender a cruzar diferentes camadas de informação geográfica para responder a perguntas complexas de planejamento e tomada de decisões ecológicas.",
    practicalFocus: "Execução de operações de geoprocessamento como buffers (áreas de influência), intersecções, uniões, recortes espaciais e análise de proximidade espacial."
  },
  {
    title: "Módulo 7: Cartografia Temática e Layout de Mapas Profissionais",
    objective: "Desenvolver mapas finais prontos para entrega a órgãos ambientais e clientes, contendo todos os elementos normativos exigidos por lei.",
    practicalFocus: "Criação de templates de impressão, inserção dinâmica de grade de coordenadas, escalas gráficas, legendas configuradas, rosas dos ventos, mapas de localização secundários e automação com a ferramenta Atlas."
  },
  {
    title: "Módulo 8: Projetos Ambientais Práticos: Delimitações de APP e Uso do Solo",
    objective: "Conectar o geoprocessamento à legislação ambiental brasileira por meio de estudos de caso reais do mercado de trabalho de consultoria.",
    practicalFocus: "Mapeamento automático de Áreas de Preservação Permanente (APP) de cursos d'água e topo de morro, delimitação de Reserva Legal e classificação supervisionada para mapas de uso e ocupação do solo."
  },
  {
    title: "Módulo 9: Cadastro Ambiental Rural (CAR) e Georreferenciamento",
    objective: "Aprender o passo a passo técnico para realizar o Cadastro Ambiental Rural e preparar arquivos para retificação fundiária.",
    practicalFocus: "Preparação de shapefiles dentro das exigências do Sistema SICAR, importação de dados de GPS de navegação e geodésico, e estruturação de dados de agrimensura legal."
  },
  {
    title: "Módulo 10: Automatização de Rotinas no QGIS (Introdução a PyQGIS)",
    objective: "Elevar o nível profissional aprendendo a automatizar tarefas demoradas e repetitivas para otimizar a velocidade de entrega dos projetos.",
    practicalFocus: "Introdução à linguagem Python rodando dentro do console do QGIS, uso de scripts prontos para processamentos em lote e otimização extrema de fluxos de geoprocessamento."
  }
];

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="conteudo" className="py-24 bg-[var(--color-brand-dark)] relative overflow-hidden border-t border-white/5">
      {/* background grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
      
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,166,10,0.08)_0%,transparent_60%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[var(--color-brand-primary)] uppercase">CONTEÚDO PROGRAMÁTICO</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-primary uppercase tracking-wide">
            O que você vai <span className="text-brand-gradient">aprender</span>?
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary text-sm md:text-base mt-4">
            10 módulos detalhados e estruturados metodologicamente para levar você do absoluto zero ao nível de analista sênior.
          </p>
        </div>

        <div className="space-y-4">
          {modules.map((mod, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`shape-leaf bg-white/[0.02] backdrop-blur-sm border transition-all duration-300 ${isOpen ? 'border-[var(--color-brand-primary)]/80 shadow-[0_0_30px_rgba(15,166,10,0.15)] bg-white/[0.04]' : 'border-white/10 hover:border-[var(--color-brand-accent)]/30 shadow-lg shadow-black/40'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left group gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4 md:gap-6 flex-1 min-w-0">
                    <div className={`w-10 h-10 md:w-12 md:h-12 shape-leaf flex items-center justify-center font-bold font-primary text-base md:text-lg shrink-0 transition-all duration-300 ${isOpen ? 'bg-brand-gradient text-[var(--color-brand-dark)] shadow-[0_0_15px_rgba(15,166,10,0.4)]' : 'bg-white/5 text-[var(--color-brand-light)]/40 group-hover:bg-white/10'}`}>
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <h3 className={`text-base md:text-lg font-bold font-primary uppercase tracking-wide transition-colors duration-300 flex-1 ${isOpen ? 'text-[var(--color-brand-accent)]' : 'text-white/90 group-hover:text-white'}`}>
                      {mod.title.replace(/^Módulo \d+: /, '')}
                    </h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 md:w-6 md:h-6 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[var(--color-brand-accent)]' : 'text-white/40 group-hover:text-white/60'}`} />
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 md:pl-26 space-y-5 border-t border-white/5">
                    
                    {/* Objetivo */}
                    <div className="flex items-start gap-4 mt-6">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)] mt-2 shrink-0" />
                      <p className="text-[var(--color-brand-light)]/80 text-sm md:text-base font-secondary">
                        <strong className="text-[var(--color-brand-primary)] uppercase text-xs tracking-widest block mb-1 font-secondary">Objetivo do Módulo</strong>
                        {mod.objective}
                      </p>
                    </div>

                    {/* Foco Prático */}
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)] mt-2 shrink-0" />
                      <p className="text-[var(--color-brand-light)]/80 text-sm md:text-base font-secondary">
                        <strong className="text-[var(--color-brand-accent)] uppercase text-xs tracking-widest block mb-1 font-secondary">Foco Prático e Aplicação</strong>
                        {mod.practicalFocus}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
