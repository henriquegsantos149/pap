import { useState } from 'react';
import { ChevronDown, CheckCircle, Image as ImageIcon, X, Layers, Compass, Globe, Award, Database } from 'lucide-react';

const categories = [
  { id: 'qgis', label: 'QGIS', icon: Globe },
  { id: 'arcgis', label: 'ArcGIS Pro', icon: Layers },
  { id: 'remotesensing', label: 'Sensoriamento & Drones', icon: Compass },
  { id: 'projects', label: 'Projetos Ambientais', icon: Award },
  { id: 'programming', label: 'Programação', icon: Database },
];

const modules = [
  // CATEGORY: QGIS
  {
    category: 'qgis',
    title: "Módulo 1: Introdução ao QGIS e Geoprocessamento",
    objective: "Introduzir os fundamentos da cartografia e do geoprocessamento, configurando o ambiente do software QGIS para início seguro dos trabalhos práticos.",
    practicalFocus: "Domínio da interface do QGIS, configurações essenciais do projeto, conceitos práticos de datum (SIRGAS 2000), sistemas de coordenadas (GCS vs UTM) e importação inicial de dados espaciais.",
    submodules: [
      "Alinhamento e Nivelamento da Rota",
      "Instalação da versão LTR do QGIS",
      "Instalação de complementos essenciais",
      "Conceito de SIRGAS2000 e Sistemas de Projeções (UTM e Geográficas)"
    ],
    slides: [1, 2, 3, 4]
  },
  {
    category: 'qgis',
    title: "Módulo 2: Criação e Vetorização de Dados Espaciais",
    objective: "Desenvolver habilidades sólidas na criação, vetorização e edição de arquivos vetoriais utilizando padrões profissionais da indústria.",
    practicalFocus: "Modelagem de dados com GeoPackages e Shapefiles, edição de geometrias (pontos, linhas e polígonos), preenchimento estratégico da tabela de atributos e ferramentas de aderência (snapping).",
    submodules: [
      "Criação de arquivos Shapefile e GeoPackage",
      "Uso da Barra de Ferramentas de Aderência (Snapping)",
      "Vetorização manual e avançada de polígonos, linhas e pontos",
      "Edição topológica e correção de geometrias inválidas"
    ],
    slides: [5, 6, 7, 8]
  },
  {
    category: 'qgis',
    title: "Módulo 3: Simbologia e Rótulos Avançados",
    objective: "Aprender a representar visualmente os dados espaciais de forma clara, estética e profissional para garantir fácil interpretação em relatórios técnicos.",
    practicalFocus: "Configuração de simbologias categorizadas, graduadas e baseadas em regras; criação de rótulos dinâmicos inteligentes que evitam sobreposição e ajustam-se automaticamente à escala.",
    submodules: [
      "Estilos de Simbologia (Categorizado, Graduado e Baseado em Regras)",
      "Uso da biblioteca de símbolos oficiais da Ambiental Pro",
      "Configuração de Rótulos Simples e Baseados em Fórmulas",
      "Diagramação visual e hierarquia de informações no mapa"
    ],
    slides: [9, 10, 11, 12]
  },
  {
    category: 'qgis',
    title: "Módulo 4: Processamento Digital de Imagens e Dados Raster",
    objective: "Explorar o potencial dos dados raster e de altimetria para entender o relevo de uma região e produzir análises físicas complexas.",
    practicalFocus: "Processamento de Modelos Digitais de Elevação (MDE), geração automática de curvas de nível (intervalos customizados), cálculo de mapas de declividade (slope), orientação de vertentes (aspect) e relevo sombreado (hillshade).",
    submodules: [
      "Importação de dados SRTM e Modelos Digitais de Elevação",
      "Geração automatizada de curvas de nível (intervalos customizados)",
      "Cálculo de Declividade (Slope) em graus e porcentagem",
      "Geração de Relevo Sombreado (Hillshade) para representação 3D"
    ],
    slides: [17, 18, 19, 20]
  },
  {
    category: 'qgis',
    title: "Módulo 5: Cartografia Temática e Layout de Mapas",
    objective: "Desenvolver mapas finais prontos para entrega a órgãos ambientais e clientes, contendo todos os elementos normativos exigidos por lei.",
    practicalFocus: "Criação de templates de impressão, inserção dinâmica de grade de coordenadas, escalas gráficas, legendas configuradas, rosas dos ventos, mapas de localização secundários e automação com a ferramenta Atlas.",
    submodules: [
      "Configuração do Gerenciador de Layout (Folhas A4, A3, A0)",
      "Inserção de Grade de Coordenadas e Escala Dinâmica",
      "Criação de Legendas Inteligentes e Tabela de Atributos no Layout",
      "Automação de geração de pranchas com a ferramenta Atlas"
    ],
    slides: [25, 26, 27, 28]
  },

  // CATEGORY: ARCGIS PRO
  {
    category: 'arcgis',
    title: "Módulo 1: Introdução ao ArcGIS Pro",
    objective: "Apresentar a interface moderna e o fluxo de trabalho baseado em projetos do ArcGIS Pro.",
    practicalFocus: "Migração do ArcMap clássico para o ArcGIS Pro, ambientação com abas Ribbon, gerenciamento de geodatabases locais e criação de conexões de banco de dados geográficos.",
    submodules: [
      "Estrutura de Projetos (.aprx) e Pastas Principais",
      "Criação e Gestão de File Geodatabase (.gdb)",
      "Importação e conversão de arquivos de outros sistemas GIS",
      "Simbologia básica e gerenciamento de camadas de feições"
    ],
    slides: [21, 22]
  },
  {
    category: 'arcgis',
    title: "Módulo 2: Vetorização e Análise Avançada no ArcGIS Pro",
    objective: "Dominar ferramentas avançadas de edição vetorial e análise espacial 2D e 3D no ArcGIS Pro.",
    practicalFocus: "Uso do Geoprocessing Pane, criação de modelos com ModelBuilder para automatização visual de tarefas e ferramentas de análise de proximidade.",
    submodules: [
      "Vetorização de precisão com templates de feição",
      "Modelagem com ModelBuilder para fluxos automatizados",
      "Análise de Hot Spots (Densidades) e Proximidades Espaciais",
      "Elaboração de mapas no layout de impressão do ArcGIS Pro"
    ],
    slides: [23, 24]
  },

  // CATEGORY: REMOTE SENSING
  {
    category: 'remotesensing',
    title: "Módulo 1: Sensoriamento Remoto e Imagens de Satélite",
    objective: "Dominar o acesso, download e o processamento de imagens provenientes dos principais satélites do mundo para fins de monitoramento ambiental.",
    practicalFocus: "Operação com sensores orbitais (Landsat, Sentinel, Planet), composições coloridas de bandas (cor verdadeira e falsa cor) e cálculo prático de índices espectrais como NDVI (vegetação) e NDWI (água).",
    submodules: [
      "Acesso aos portais de download (USGS, Copernicus, Planet)",
      "Composição de Bandas Coloridas (Cor Verdadeira, Infravermelho)",
      "Cálculo prático de Índices Espectrais (NDVI e NDWI)",
      "Mapeamento temporal de desmatamento e cicatrizes de queimadas"
    ],
    slides: [13, 14, 15, 16]
  },
  {
    category: 'remotesensing',
    title: "Módulo 2: Processamento de Imagens de Drones",
    objective: "Aprender as etapas do processamento de imagens obtidas por drones para fins de mapeamento cadastral e de relevo.",
    practicalFocus: "Uso de ferramentas como WebODM e Pix4D para gerar ortomosaicos de altíssima resolução e modelos tridimensionais de terreno.",
    submodules: [
      "Planejamento de voo e distribuição de pontos de controle",
      "Geração automatizada de Ortomosaico Georreferenciado",
      "Criação de Modelos Digitais de Superfície (MDS) e de Terreno (MDT)",
      "Importação e pós-processamento de altimetria de drones no QGIS"
    ],
    slides: [29, 30]
  },

  // CATEGORY: PROJECTS
  {
    category: 'projects',
    title: "Módulo 1: Cadastro Ambiental Rural (CAR)",
    objective: "Aprender o passo a passo técnico para realizar o Cadastro Ambiental Rural e preparar arquivos para retificação fundiária.",
    practicalFocus: "Preparação de shapefiles dentro das exigências do Sistema SICAR, importação de dados de GPS de navegação e geodésico, e estruturação de dados de agrimensura legal.",
    submodules: [
      "Importação de dados de receptores GNSS e planilhas de campo",
      "Geração do arquivo de shapefiles exigidos pelo sistema SICAR",
      "Elaboração de Planta e Memorial Descritivo de imóveis rurais",
      "Retificação de limites e análise de sobreposições de glebas"
    ],
    slides: [33, 34, 35]
  },
  {
    category: 'projects',
    title: "Módulo 2: Projetos Ambientais Práticos: Delimitação de APP",
    objective: "Conectar o geoprocessamento à legislação ambiental brasileira por meio de estudos de caso reais do mercado de trabalho de consultoria.",
    practicalFocus: "Mapeamento automático de Áreas de Preservação Permanente (APP) de cursos d'água e topo de morro, delimitação de Reserva Legal e classificação supervisionada para mapas de uso e ocupação do solo.",
    submodules: [
      "Delimitação automática de Áreas de Preservação Permanente (APP)",
      "Cálculo de Reserva Legal e Áreas Consolidadas",
      "Geração de mapas de Uso e Ocupação do Solo para licenciamento",
      "Integração de arquivos de Drones (Ortofotos e Modelos de Superfície)"
    ],
    slides: [31, 32]
  },

  // CATEGORY: PROGRAMMING
  {
    category: 'programming',
    title: "Módulo 1: Automatização no QGIS (PyQGIS)",
    objective: "Elevar o nível profissional aprendendo a automatizar tarefas demoradas e repetitivas para otimizar a velocidade de entrega dos projetos.",
    practicalFocus: "Introdução à linguagem Python rodando dentro do console do QGIS, uso de scripts prontos para processamentos em lote e otimização extrema de fluxos de geoprocessamento.",
    submodules: [
      "Introdução ao console Python dentro do QGIS",
      "Uso da biblioteca PyQGIS para carregar e manipular camadas",
      "Criação de scripts básicos para automatizar tarefas repetitivas",
      "Execução de processos em lote (Batch Processing) no QGIS"
    ],
    slides: [36, 37]
  },
  {
    category: 'programming',
    title: "Módulo 2: Linguagem R aplicada ao Geoprocessamento",
    objective: "Introduzir a linguagem R como ferramenta avançada de análise de dados espaciais e estatística ambiental.",
    practicalFocus: "Manipulação de tabelas, análise estatística de qualidade ambiental, geração de relatórios dinâmicos e plotagem de dados espaciais geo-estatísticos.",
    submodules: [
      "Instalação do R e RStudio",
      "Estrutura de dados espaciais com o pacote `sf` e `raster`",
      "Visualização avançada de dados espaciais com `ggplot2`",
      "Geração de relatórios PDF automatizados com R Markdown"
    ],
    slides: []
  }
];

export default function Curriculum() {
  const [activeTab, setActiveTab] = useState('qgis');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState<string | null>(null);

  // Filter modules by active category tab
  const filteredModules = modules.filter(mod => mod.category === activeTab);

  // Reset accordion when switching tabs
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setOpenIndex(null);
  };

  return (
    <section id="conteudo" className="py-24 bg-[var(--color-brand-dark)] relative overflow-hidden border-t border-white/5">
      {/* background grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
      
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,166,10,0.08)_0%,transparent_60%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-[var(--color-brand-primary)] uppercase">CONTEÚDO PROGRAMÁTICO</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 font-primary uppercase tracking-wide">
            O que você vai <span className="text-brand-gradient">aprender</span>?
          </h2>
          <p className="text-[var(--color-brand-light)]/70 max-w-2xl mx-auto font-secondary text-sm md:text-base mt-4">
            Escolha o conteúdo principal abaixo para visualizar os módulos e tópicos detalhados.
          </p>
        </div>

        {/* Tab Buttons Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 border-b border-white/10 pb-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleTabChange(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-semibold font-primary uppercase tracking-wider transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-brand-gradient text-[var(--color-brand-dark)] shadow-[0_0_15px_rgba(15,166,10,0.3)] scale-105' 
                    : 'bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Modules Accordion */}
        <div className="space-y-4">
          {filteredModules.map((mod, index) => {
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
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}>
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

                    {/* Submódulos (Aulas/Tópicos) */}
                    <div className="mt-4 pt-4 border-t border-white/5">
                      <strong className="text-white uppercase text-xs tracking-widest block mb-3 font-primary">Tópicos e Aulas Práticas:</strong>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {mod.submodules.map((sub, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 text-xs md:text-sm text-[var(--color-brand-light)]/70 font-secondary">
                            <CheckCircle className="w-4 h-4 text-[var(--color-brand-primary)] shrink-0 mt-0.5" />
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Visual Slide Thumbnails */}
                    {mod.slides && mod.slides.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-white/5">
                        <strong className="text-white uppercase text-xs tracking-widest flex items-center gap-1.5 mb-3 font-primary">
                          <ImageIcon className="w-3.5 h-3.5 text-[var(--color-brand-accent)]" />
                          Slides e Material Visual:
                        </strong>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {mod.slides.map((slideNum) => {
                            const slidePath = `${import.meta.env.BASE_URL}curriculum/slide-${slideNum}.png`;
                            return (
                              <button
                                key={slideNum}
                                onClick={() => setActiveSlide(slidePath)}
                                className="group/slide relative border border-white/10 rounded-lg overflow-hidden aspect-[4/3] bg-black hover:border-[var(--color-brand-primary)]/40 transition-colors cursor-pointer"
                              >
                                <img 
                                  src={slidePath} 
                                  alt={`Slide ${slideNum}`} 
                                  className="w-full h-full object-cover opacity-60 group-hover/slide:opacity-100 transition-opacity duration-300"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 group-hover/slide:bg-black/10 transition-colors">
                                  <span className="text-[10px] uppercase font-bold text-white tracking-widest bg-black/60 px-2 py-0.5 rounded-full border border-white/10 group-hover/slide:bg-[var(--color-brand-primary)] group-hover/slide:text-[var(--color-brand-dark)] transition-colors">
                                    Ver Slide {slideNum}
                                  </span>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox for Slides Zoom */}
      {activeSlide && (
        <div 
          onClick={() => setActiveSlide(null)}
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
        >
          <button 
            onClick={() => setActiveSlide(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-5xl max-h-[85vh] overflow-hidden rounded-xl border border-white/10 bg-black/50 shadow-2xl flex items-center justify-center">
            <img 
              src={activeSlide} 
              alt="Curriculum Slide Zoomed" 
              className="w-auto h-auto max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
