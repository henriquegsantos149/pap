import { useState } from 'react';
import { ChevronDown, CheckCircle, Image as ImageIcon, X, Layers, Globe, Award, Database } from 'lucide-react';

const categories = [
  { id: 'qgis', label: 'QGIS', icon: Globe },
  { id: 'arcgis', label: 'ArcGIS Pro', icon: Layers },
  { id: 'arcmap', label: 'ArcMap (Desktop)', icon: Layers },
  { id: 'specialists', label: 'Cursos de Especialistas', icon: Award },
  { id: 'lives', label: 'Gravação das Lives (+107 Aulas)', icon: Database },
];

const modules = [
  // CATEGORY: QGIS (Slides 2-6)
  {
    category: 'qgis',
    title: "Módulo 1: Interface e Vetorização Básica",
    objective: "Introduzir a interface do QGIS e aprender a manusear sistemas de coordenadas e arquivos vetoriais básicos.",
    practicalFocus: "Configuração do ambiente de trabalho, importação de dados e criação de Shapefiles com vetorização inicial.",
    submodules: [
      "1.1 Interface do QGIS",
      "1.2 Sistemas de Coordenadas na prática (Datum e UTM)",
      "1.3 Arquivos Vetoriais (Criação de Shapefiles)",
      "1.4 Seleção Manual e por Localização",
      "1.5 Seleção por Valores e Expressões",
      "1.6 Filtro de feições (Definition Query / Query Builder)",
      "1.7 Medições práticas (comprimentos, áreas e ângulos)",
      "✏️ Exercícios práticos"
    ],
    slides: [2]
  },
  {
    category: 'qgis',
    title: "Módulo 2: Importação e Manipulação de Dados",
    objective: "Aprender a importar tabelas externas e manipular bancos de dados geoespaciais.",
    practicalFocus: "Integração de tabelas do Excel com geometrias do QGIS e operações internas em bancos de dados.",
    submodules: [
      "2.1 Importação de Dados do Excel",
      "2.2 Junção de Tabelas (Joins)",
      "2.3 Bancos de Dados Gratuitos (IBGE, ANA, CPRM)",
      "2.4 Extraindo Dados do OSM (OpenStreetMap)",
      "2.5 Importando dados de uma WMS/WFS",
      "2.6 Trabalhando com GeoPackage (.gpkg)",
      "2.7 Por dentro da Tabela de Atributos",
      "2.8 Inserindo Fotos na Tabela de Atributos",
      "✏️ Exercícios práticos",
      "✅ Resolução comentada do Exercício"
    ],
    slides: [2]
  },
  {
    category: 'qgis',
    title: "Módulo 3: Ferramentas de Geoprocessamento",
    objective: "Dominar as principais ferramentas de análise vetorial e georreferenciamento de arquivos estáticos.",
    practicalFocus: "Aplicação prática de buffers, recortes, uniões e retificação de imagens escaneadas no QGIS.",
    submodules: [
      "3.1 Buffer (Simples, Normal e em Batelada)",
      "3.2 Dissolve (Limpeza geral e por atributos)",
      "3.3 Recorte, Interseção e União",
      "3.4 Mesclagem de Camadas e de Atributos (Merge)",
      "3.5 Ferramentas de Edição Vetorial Avançada",
      "3.6 Georreferenciamento de Imagens",
      "Extra: Cálculos de áreas em várias Zonas UTM (Albers)",
      "✏️ Exercícios práticos",
      "✅ Resolução comentada do Exercício"
    ],
    slides: [3]
  },
  {
    category: 'qgis',
    title: "Módulo 4: Desvendando as Simbologias",
    objective: "Aprender as técnicas cartográficas de representação de dados quantitativos e qualitativos.",
    practicalFocus: "Renderização estética de mapas temáticos usando simbologia graduada, proporcional e categorizada.",
    submodules: [
      "4.1 Símbolos Simples e Categorizados",
      "4.2 Símbolos Graduados",
      "4.3 Centróides e Símbolos Graduados Proporcionais",
      "4.4 Simbologia Baseada em Regras",
      "4.5 Importando e Exportando Estilos",
      "✏️ Exercícios práticos",
      "✅ Resolução comentada do Exercício"
    ],
    slides: [3]
  },
  {
    category: 'qgis',
    title: "Módulo 5: Labels (Rótulos) e Etiquetas",
    objective: "Aprender a inserir e configurar rótulos e etiquetas dinâmicas de forma profissional no mapa.",
    practicalFocus: "Formatação de fontes externas, posicionamento inteligente de rótulos e expressões em script para exibição de texto.",
    submodules: [
      "5.1 Noções Básicas de Rótulos",
      "5.2 Inserindo fontes externas",
      "5.3 Reposicionamento de rótulos",
      "5.4 Salvando estilos de rótulo (Style Manager)",
      "5.5 Regras e Expressões",
      "5.6 Etiquetas e Anotações",
      "✏️ Exercícios práticos",
      "✅ Resolução comentada do Exercício"
    ],
    slides: [3]
  },
  {
    category: 'qgis',
    title: "Módulo 6: Modelos Digitais de Elevação",
    objective: "Compreender o relevo e a altimetria de uma região utilizando arquivos raster e de elevação espacial.",
    practicalFocus: "Geração de declividade, curvas de nível, sombreamento e orientação de encostas a partir de dados MDE.",
    submodules: [
      "6.1 Introdução aos MDEs",
      "6.2 Como baixar Modelos Digitais de Terreno (MDT) e Superfície (MDS)",
      "6.3 Sombreamento (Hillshade)",
      "6.4 Declividade (Slope)",
      "6.5 Orientação de Encostas (Aspect)",
      "6.6 Curvatura (Perfil e Tangencial)",
      "6.7 Gerando Curvas de Nível a partir do MDE",
      "✅ Resolução comentada do Exercício"
    ],
    slides: [4]
  },
  {
    category: 'qgis',
    title: "Módulo 7: Análises Espaciais e Estatísticas",
    objective: "Trabalhar com interpolações e estatísticas espaciais para representação contínua de fenômenos pontuais.",
    practicalFocus: "Uso de interpoladores por krigagem, IDW e densidade de Kernel para mapas de calor.",
    submodules: [
      "7.1 Estatística Básica para Dados Vetoriais e Matriciais",
      "7.2 Interpolação IDW (Inverso da Distância)",
      "7.3 Interpolação por Krigagem",
      "7.4 Densidade de Kernel (Mapa de Calor)"
    ],
    slides: [4]
  },
  {
    category: 'qgis',
    title: "Módulo 8: Gráficos e Labelling Avançado",
    objective: "Aprender a associar gráficos estatísticos e rótulos avançados aos mapas.",
    practicalFocus: "Uso da extensão Data Plotly no QGIS para elaboração de gráficos integrados diretamente às feições do mapa.",
    submodules: [
      "8.1 Gráficos com Data Plotly",
      "8.2 Cores: Do Mapa para o Gráfico no Data Plotly",
      "8.3 Histograma",
      "8.4 Gráfico de Dispersão (Scatter Plot)"
    ],
    slides: [4]
  },
  {
    category: 'qgis',
    title: "Módulo 9: Ferramentas de Hidrologia",
    objective: "Aprender o processo completo de delimitação de bacias hidrográficas e modelagem de drenagem.",
    practicalFocus: "Operações de fill sinks, direção de fluxo, delimitação de exutórios e design do mapa de bacia hidrográfica final.",
    submodules: [
      "9.1 Download e Instalação Avançada para o Módulo",
      "9.2 Trabalhando com dados da ANA (Formato GPKG)",
      "9.3 Definindo Área de Estudo",
      "9.4 Importação do Modelo Digital de Elevação (MDE)",
      "9.5 Preenchendo Falhas (Fill Sinks)",
      "9.6 Direção do Fluxo (Local Drain Direction)",
      "9.7 Rede de Drenagem e Classificação dos Corpos Hídricos",
      "9.8 Definição do Exutório e Geração da Bacia de Drenagem",
      "9.9 Vetorização dos Trechos de Drenagem",
      "9.10 Map Design & Layout do Mapa de Área de Contribuição",
      "✏️ Exercícios práticos"
    ],
    slides: [5]
  },
  {
    category: 'qgis',
    title: "Módulo 10: Sensoriamento Remoto: A Base",
    objective: "Aprender os conceitos físicos que regem os sistemas sensores orbitais e a captação de imagens de satélite.",
    practicalFocus: "Conhecimento do espectro eletromagnético, tipos de resolução e identificação de satélites adequados para projetos.",
    submodules: [
      "10.1 Introdução aos Sistemas Sensores",
      "10.2 Desvendando o Espectro Eletromagnético",
      "10.3 Os Diferentes Tipos de Resolução (Espacial, Espectral, Temporal)",
      "10.4 Plataformas e Catálogos para Aquisição de Imagens"
    ],
    slides: [5]
  },
  {
    category: 'qgis',
    title: "Módulo 11: Processamento de Imagens",
    objective: "Aplicar composições de bandas coloridas e índices de reflectância espectral sobre dados orbitais.",
    practicalFocus: "Manipulação de imagens Sentinel/Landsat, fusão pancromática e geração de mapas de vegetação.",
    submodules: [
      "11.1 Imagem de Cor Verdadeira (TCI)",
      "11.2 Fusão com a Pancromática (Pansharpening para melhoria de resolução)",
      "11.3 Composição Falsa Cor",
      "11.4 Índice NDVI (Índice de Vegetação por Diferença Normalizada)"
    ],
    slides: [5]
  },
  {
    category: 'qgis',
    title: "Módulo 12: Classificação e Mapas de Uso de Solo",
    objective: "Mapear a cobertura e uso do solo utilizando classificação automática de imagens de satélite.",
    practicalFocus: "Uso de classificadores supervisionados, não-supervisionados e segmentação OBIA no QGIS.",
    submodules: [
      "12.1 Introdução e Tipos de Classificação",
      "12.2 Classificação Não-Supervisionada",
      "12.3 Classificação Supervisionada (SCP Plugin)",
      "12.4 Segmentação e Classificação baseada em Objeto (OBIA)",
      "12.5 Dissolvendo e Calculando Área das Classes de Uso do Solo"
    ],
    slides: [6]
  },

  // CATEGORY: ARCGIS PRO (Slides 7-11)
  {
    category: 'arcgis',
    title: "Módulo 1: Introdução e Interface",
    objective: "Ambientação completa na interface Ribbon do ArcGIS Pro e configuração de sistemas geodésicos.",
    practicalFocus: "Configurações de projetos, shapefiles, definition query e medições espaciais básicas no ArcGIS Pro.",
    submodules: [
      "1.1 Interface do ArcGIS Pro",
      "1.2 Sistemas de coordenadas na prática",
      "1.3 Arquivos Vetoriais (O famoso Shapefile)",
      "1.4 Seleção Manual e por Localização",
      "1.5 Seleção por Atributos",
      "1.6 Definition Query (Filtros avançados)",
      "1.7 Ferramenta Measure (Medição)",
      "1.8 Locate para identificação de locais e atributos",
      "✏️ Exercícios práticos"
    ],
    slides: [7]
  },
  {
    category: 'arcgis',
    title: "Módulo 2: Importação e Manipulação de Dados",
    objective: "Gerenciamento de geodatabases e importação de bases de dados tabulares externas.",
    practicalFocus: "Criação de Geodatabases corporativos e pessoais, importação de planilhas de campo e anexo de imagens.",
    submodules: [
      "2.1 Importação de Dados do Excel",
      "2.2 Bancos de Dados Geográficos Gratuitos",
      "2.3 Geodatabase - O que é e quais as vantagens",
      "2.4 Imagem como Atributo na Tabela",
      "✅ Resolução comentada do Exercício"
    ],
    slides: [7]
  },
  {
    category: 'arcgis',
    title: "Módulo 3: Ferramentas de Geoprocessamento",
    objective: "Uso das ferramentas de proximidade, sobreposição e edição topológica de arquivos vetoriais e CAD.",
    practicalFocus: "Cruzamento de limites, buffers em lote, georreferenciamento de arquivos raster e desenhos em CAD/DWG.",
    submodules: [
      "3.1 Buffer e delimitação em lote",
      "3.2 Tudo sobre o Dissolve",
      "3.3 Clip, Intersect e Union",
      "3.4 Os 2 tipos de Merge (Mesclagem)",
      "3.5 Ferramentas de Edição Vetorial",
      "3.6 Georreferenciamento de Imagens",
      "3.7 Georreferenciando DWG e Shapefile",
      "3.8 Atribuindo Dimensões (Estilo CAD)",
      "✏️ Exercícios práticos"
    ],
    slides: [8]
  },
  {
    category: 'arcgis',
    title: "Módulo 4: Desvendando as Simbologias",
    objective: "Desenvolver cartografias complexas utilizando a biblioteca nativa do ArcGIS Pro.",
    practicalFocus: "Aplicação de estilos e simbologias quantitativas e qualitativas sobre camadas raster e vetor.",
    submodules: [
      "4.1 Simbologia de Valores Únicos e Paleta de Cores",
      "4.2 Simbologia por Quantidade (Rampas de Cores)",
      "4.3 Simbologias em dados Raster",
      "4.4 Técnicas Avançadas de Simbologia e Efeitos Visuais",
      "✅ Resolução comentada do Exercício"
    ],
    slides: [8]
  },
  {
    category: 'arcgis',
    title: "Módulo 5: Labels (Rótulos) e Anotações",
    objective: "Configurar identificações inteligentes de feições no ArcGIS Pro.",
    practicalFocus: "Criação de classes de anotação de banco de dados, expressões em Arcade/Python para rótulos e etiquetas dinâmicas.",
    submodules: [
      "5.1 Opções Básicas de Labelling",
      "5.2 Descobrindo e inserindo fontes externas",
      "5.3 Anotação e Reposicionamento Manual das Etiquetas",
      "5.4 Texto como elemento Gráfico",
      "5.5 Expressões (scripts) para Labels dinâmicos",
      "✏️ Exercícios práticos",
      "✅ Resolução comentada do Exercício"
    ],
    slides: [8]
  },
  {
    category: 'arcgis',
    title: "Módulo 6: Modelos Digitais de Elevação",
    objective: "Processamento de relevo tridimensional e altimetria no ArcGIS Pro.",
    practicalFocus: "Utilização do Living Atlas e download de MDEs para cálculo de hipsometria, sombreamento e declividades.",
    submodules: [
      "6.1 Introdução aos MDEs",
      "6.2 Download do MDE",
      "6.3 Conhecendo e explorando o Living Atlas",
      "6.4 Relevo Sombreado (Hillshade)",
      "6.5 Declividade (Slope)",
      "6.6 Orientação e Curvatura (Aspect e Curvature)",
      "✏️ Exercícios práticos"
    ],
    slides: [9]
  },
  {
    category: 'arcgis',
    title: "Módulo 7: Modelagem 3D e TIN",
    objective: "Geração e edição de malhas triangulares de relevo (TIN) e simulações tridimensionais.",
    practicalFocus: "Visualizações de terrenos em 3D, cálculos volumétricos de corte e aterro, e simulação de inundação animada.",
    submodules: [
      "7.1 Extração de Curvas de Nível",
      "7.2 Geração de Redes Irregulares de Triângulos (TIN)",
      "7.3 Ferramentas para Edição de TIN",
      "7.4 Visualização 3D do terreno",
      "7.5 Simulação de Inundação (Criando Animações de Cheia)",
      "7.6 Cálculo de Corte e Aterro (Volume)",
      "7.7 Visualização de Dados de Empreendimentos em 3D",
      "✏️ Exercícios práticos"
    ],
    slides: [9]
  },
  {
    category: 'arcgis',
    title: "Módulo 8: Análises Espaciais e Estatísticas",
    objective: "Manipular ferramentas avançadas de estatística espacial no ArcGIS Pro.",
    practicalFocus: "Uso do Geostatistical Wizard, análises de hot-spots e engenharia exploratória de dados.",
    submodules: [
      "8.1 Por dentro do Data Engineering",
      "8.2 Interpolação IDW",
      "8.3 Interpolação por Krigagem",
      "8.4 Densidade de Kernel (Mapa de Calor)"
    ],
    slides: [9]
  },
  {
    category: 'arcgis',
    title: "Módulo 9: Elaboração de Gráficos",
    objective: "Elaborar representações estatísticas integradas aos atributos espaciais.",
    practicalFocus: "Montagem de histogramas, dispersões e gráficos de barras com dados geográficos ativos.",
    submodules: [
      "9.1 Elaboração de Gráficos e Visualizações Integradas"
    ],
    slides: [10]
  },
  {
    category: 'arcgis',
    title: "Módulo 10: Ferramentas de Hidrologia",
    objective: "Delimitar microbacias e bacias hidrográficas de maneira totalmente automatizada no ArcGIS Pro.",
    practicalFocus: "Cálculo de acúmulo de fluxo, extração automática de bacias, suavização de drenagens e design do layout final.",
    submodules: [
      "10.1 Importando Dados Oficiais da ANA (Trechos e Bacias)",
      "10.2 Definição da Área de Estudo",
      "10.3 Importação do Modelo Digital de Elevação (MDE)",
      "10.4 Preenchendo Falhas (Fill Sinks)",
      "10.5 Direção do Fluxo Hidrológico",
      "10.6 Cálculo do Acúmulo de Fluxo Hidrológico",
      "10.7 Rede de Drenagem e Classificação dos Corpos Hídricos",
      "10.8 Definição do Exutório e Geração da Bacia de Drenagem",
      "10.9 Suavização de Linhas e Técnicas de Visualização (Map Design)",
      "10.10 Elaboração de Layout (Montagem do Mapa Final)"
    ],
    slides: [10]
  },
  {
    category: 'arcgis',
    title: "Módulo 11: Sensoriamento Remoto: A Base",
    objective: "Entender os pilares espectrais de aquisição de imagens orbitais.",
    practicalFocus: "Uso das ferramentas do ArcGIS Pro conectadas ao Living Atlas e catálogos internacionais.",
    submodules: [
      "11.1 Introdução aos Sistemas Sensores",
      "11.2 Desvendando o Espectro Eletromagnético",
      "11.3 Os Diferentes Tipos de Resolução",
      "11.4 Plataformas para Aquisição de Imagens"
    ],
    slides: [10]
  },
  {
    category: 'arcgis',
    title: "Módulo 12: Processamento de Imagens",
    objective: "Tratamento digital de imagens espectrais no ArcGIS Pro.",
    practicalFocus: "Geração de pansharpening, cálculo de NDVI, NDMI e detecção temporal de mudanças.",
    submodules: [
      "12.1 Imagem de cor verdadeira (TCI)",
      "12.2 Fusão com a Pancromática (Pansharpening)",
      "12.3 Composição Falsa Cor",
      "12.4 Índice NDVI",
      "12.5 Index Database e NDMI"
    ],
    slides: [11]
  },
  {
    category: 'arcgis',
    title: "Módulo 13: Classificação e Mapas de Uso do Solo",
    objective: "Mapeamento temático automatizado de cobertura e uso do solo.",
    practicalFocus: "Uso do Image Classification Wizard e classificações orientadas a objetos (OBIA) no ArcGIS Pro.",
    submodules: [
      "13.1 Introdução e Tipos de Classificação",
      "13.2 Classificação Não-Supervisionada",
      "13.3 Classificação Supervisionada",
      "13.4 Classificação baseada em Objeto (OBIA)",
      "13.5 Juntando as Classes e Calculando a Área do Solo"
    ],
    slides: [11]
  },

  // CATEGORY: ARCMAP (Slides 12-15)
  {
    category: 'arcmap',
    title: "Módulo 1: Interface, Vetores e Importação",
    objective: "Trabalhar com a interface clássica do ArcMap, tabelas Excel e arquivos shapefile.",
    practicalFocus: "Digitalização vetorial básica, conexão do ArcCatalog, joins de tabelas e queries de seleção.",
    submodules: [
      "1.1 Interface do ArcMap",
      "1.2 Sistemas de Coordenadas na prática",
      "1.3 Seleção e Definition Query",
      "1.4 Seleção e Definition Query (Parte 2)",
      "1.5 Desvendando os operadores lógicos",
      "1.6 Windows, Measure e Find",
      "1.7 Formatos e conexões do ArcGIS",
      "2.1 Importação de Dados do Excel",
      "2.2 Bancos de Dados grátis online",
      "2.3 Trabalhando com a Tabela de Atributos",
      "2.4 Extraindo dados do OpenStreetMap",
      "2.5 Adicionando Imagens na Tabela de Atributos"
    ],
    slides: [12]
  },
  {
    category: 'arcmap',
    title: "Módulo 2: Geoprocessamento, Simbologia e MDE",
    objective: "Dominar as principais ferramentas de análise espacial clássicas do ArcMap.",
    practicalFocus: "Criação de buffers, clip, intersect, simbologias temáticas, relevo sombreado e curvas de nível.",
    submodules: [
      "3.1 Buffer",
      "3.2 Clip, Intersect e Union",
      "3.3 Os 2 tipos de Merge (Mesclagem)",
      "3.4 Dissolve",
      "3.5 Ferramentas de edição vetorial",
      "3.6 Georreferenciamento de Imagens e Cartas",
      "3.7 Georreferenciando DWG e Shapefile",
      "4.1 Desvendando o Symbol Selector",
      "4.2 Simbologia de dados raster e vetores",
      "4.3 Configurações básicas de Rótulos (Labels)",
      "4.4 Máscaras e efeitos visuais",
      "5.1 Introdução aos MDEs",
      "5.2 Hillshade (Sombreamento) e Perfil de Elevação",
      "5.3 Aspect, Slope e 3D no ArcScene",
      "5.4 Curvas de nível e Viewshed"
    ],
    slides: [13]
  },
  {
    category: 'arcmap',
    title: "Módulo 3: Análises 3D, Estatística e Hidrologia",
    objective: "Operar com modelagens ambientais, krigagem e traçado de bacias hidrográficas.",
    practicalFocus: "Cálculos de corte e aterro, simulação de inundação no ArcScene, interpolações e balanço hídrico.",
    submodules: [
      "6.2 Simulação de inundação 3D no ArcScene",
      "6.3 Dados a partir do Google Earth e TCX Converter",
      "6.4 Corte e Aterro (Volume)",
      "6.5 Visualização de dados em 3D",
      "7.1 Ferramentas Geoestatísticas (Geostatistical Analyst)",
      "7.2 Interpolação IDW e Krigagem",
      "7.4 Análise de Hotspot",
      "7.5 Mapa de densidade Kernel",
      "8.2 Gráfico de Dispersão (ScatterPlot)",
      "8.3 Criando Relatórios",
      "8.4 Labelling Avançado (Maplex Engine)",
      "9.1 Traçando bacias hidrográficas do zero",
      "9.2 Vetorizando a rede de drenagem clássica",
      "9.3 Classificação da Bacia e Balanço Hídrico"
    ],
    slides: [14, 15]
  },
  {
    category: 'arcmap',
    title: "Módulo 4: Sensoriamento Remoto e Classificação",
    objective: "Processar imagens Sentinel e Landsat para confecção de mapas de uso do solo.",
    practicalFocus: "Composição de bandas, Pansharpening e classificação supervisionada e não-supervisionada.",
    submodules: [
      "10.1 Introdução ao sensoriamento remoto",
      "10.2 Satélites e Sensores (Landsat, Sentinel)",
      "10.3 Plataformas para aquisição dos dados",
      "11.1 Composição de Bandas Espectrais",
      "11.2 Relação de bandas para mapeamento de Queimadas",
      "11.4 Pan Sharpening (Melhoria de Resolução Espacial)",
      "12.1 Classificação Não-Supervisionada",
      "12.2 Classificação Supervisionada",
      "12.3 Limpeza e generalização de pixels classificados",
      "12.4 Inserção de elementos extras",
      "12.5 Cálculo de área e percentual das classes de solo"
    ],
    slides: [15]
  },

  // CATEGORY: SPECIALISTS (Slides 20-35)
  {
    category: 'specialists',
    title: "Google Earth Engine Descomplicado",
    objective: "Introduzir a maior plataforma de processamento em nuvem de dados geoespaciais.",
    practicalFocus: "Criação de mosaicos de imagens sem nuvem, cálculos de índices espectrais e classificação de uso do solo na nuvem.",
    submodules: [
      "01 | Introdução ao GEE: funcionalidades e vantagens",
      "02 | Importação de dados vetoriais e delimitação geométrica",
      "03 | Manipulação de Coleções de Imagens orbitais",
      "04 | Filtros de nuvem e criação de mosaicos",
      "05 | Índices espectrais calculados via script",
      "06 | Coleta de amostras na plataforma GEE",
      "07 | Algoritmos de classificação de imagens",
      "08 | Filtros de suavização pós-classificação",
      "09 | Validação de acurácia dos resultados",
      "10 | Como exportar arquivos para uso local",
      "11 | Deploy de aplicação interativa com Streamlit"
    ],
    slides: [27]
  },
  {
    category: 'specialists',
    title: "Processamento de Imagens de Drones",
    objective: "Gerar ortomosaicos e modelos de relevo tridimensionais a partir de fotos aéreas.",
    practicalFocus: "Uso do Agisoft Metashape para alinhar fotos, gerar nuvens de pontos e exportar curvas de nível e ortofotos.",
    submodules: [
      "1 | Introdução ao mapeamento com drones",
      "2 | Instalação e recursos recomendados",
      "3 | Planejamento de Voos e sobreposição de imagens",
      "4.1 | Conhecendo a interface do Agisoft Metashape",
      "4.2 | Conversão de coordenadas e alinhamento de fotos",
      "5 | Geração de Nuvem Densa de Pontos",
      "6 | Geração de MDT (Terreno) e MDS (Superfície)",
      "7 | Modelagem 3D e construção de texturas",
      "8 | Geração de curvas de nível baseadas em altimetria",
      "9 | Exportação de Ortomosaico final, cálculo de NDVI e exportação de dados"
    ],
    slides: [24]
  },
  {
    category: 'specialists',
    title: "Linguagem R para Ciência de Dados",
    objective: "Aprender a linguagem estatística R voltada a análises ambientais.",
    practicalFocus: "Criação de objetos, data frames, filtros com dplyr, estatísticas e plotagem de mapas dinâmicos.",
    submodules: [
      "1 | Introdução e Apresentação da Linguagem R",
      "2 | Download e Instalação (R e RStudio)",
      "3 | Interface e configuração do RStudio",
      "4 | Instalação e utilização de Pacotes essenciais",
      "5 | Manipulação de Objetos, Vetores e Matrizes",
      "6 | Criação de Listas, Data Frames e Arrays",
      "7 | Organização e tratamento de Dados com dplyr (Filter, Arrange)",
      "8 | Resumos de dados espaciais (Mutate, Summarise, Group By)",
      "9 | Criação de funções personalizadas no R",
      "10 | Elaboração e exportação de um mapa no R"
    ],
    slides: [21]
  },
  {
    category: 'specialists',
    title: "Python para Geoprocessamento",
    objective: "Introduzir a programação em Python aplicada a automatização em ambiente GIS.",
    practicalFocus: "Instalação do Jupyter Notebook, lógica de programação (operadores, condicionais e loops) e bibliotecas espaciais.",
    submodules: [
      "01 | Porque aprender Python para fins GIS",
      "02 | Primeiros passos com o Jupyter Notebook",
      "03 | Sintaxe e lógica básica do Python",
      "04 | Variáveis, tipos de dados e operadores lógicos",
      "05 | Manipulação de Listas, Tuplas e Dicionários",
      "06 | Estruturas condicionais e de repetição (if/else/for/while)",
      "07 | Principais Bibliotecas GIS no Python (Geopandas, Fiona, Shapely)",
      "08 | Aplicação prática automatizada"
    ],
    slides: [20]
  },
  {
    category: 'specialists',
    title: "Dashboards com Power BI e SIG",
    objective: "Criar painéis dinâmicos e relatórios interativos contendo dados espaciais georreferenciados.",
    practicalFocus: "Tratamento de dados no Power Query, importação de shapefiles no Power BI e design de layouts no Figma.",
    submodules: [
      "Módulo 1: Base Fundamental e Ideação do Business Intelligence (BI)",
      "1.2 | Pilares e Linguagens de consulta do BI",
      "1.4 | Instalação do Power BI e apresentação da interface",
      "2.1 | Modelos de Dashboards e fontes de dados",
      "2.2 | Importação, adequação e ETL de dados (Power Query)",
      "2.3 | Montagem da Área Visual e automatização de tarefas",
      "2.6 | Interações entre filtros e opções de navegação",
      "3.1 | Mapas de Formas e Coropléticos no Power BI",
      "3.3 | Importação de arquivos Shapefile no Power BI",
      "3.4 | Mapas de Pontos e mapas de Calor",
      "4.1 | Design de Dashboards: Preparação de telas com Figma",
      "5.1 | Publicação de relatórios interativos e compartilhamento"
    ],
    slides: [27, 28]
  },
  {
    category: 'specialists',
    title: "Cadastro Ambiental Rural (CAR) na Prática",
    objective: "Aprender a legislação florestal brasileira e o passo a passo para submissão do CAR no SICAR.",
    practicalFocus: "Delimitação de Áreas de Preservação Permanente (APP), Reserva Legal (ARL) e consolidadas, e inserção no portal oficial.",
    submodules: [
      "1 | Introdução e Fundamentação Inicial do Código Florestal",
      "2 | CAR e o relacionamento com os produtores rurais",
      "3 | Importância de noções de legislação e análises de imagens temporais",
      "4 | Delimitação prática de Áreas de APP e suas funções ecológicas",
      "5 | Caracterização e localização de Área de Reserva Legal (ARL)",
      "6 | Delimitação de Áreas Consolidadas",
      "7 | Prática 01: Comparação multitemporal com 2008 e vetorização",
      "8 | Prática 02: Portal SICAR - Do cadastro do imóvel ao recibo final",
      "Prática Extra: Especialista Pedro Ogibowski (Módulos Fiscais e APP de corpos hídricos)"
    ],
    slides: [30]
  },
  {
    category: 'specialists',
    title: "Radar - Processamento de Imagens SAR",
    objective: "Aprender o processamento digital de dados provenientes de sensores de radar de abertura sintética (SAR).",
    practicalFocus: "Download de dados no ASF Data Search, pré-processamento no Sentinel Application Platform (SNAP) e cálculo de índices.",
    submodules: [
      "1.1 | Apresentação e Histórico do ensino de Radar",
      "1.2 | O que o Profissional da área de meio ambiente precisa saber",
      "1.4 | Tipos de Sensores de Micro-ondas e geometria SLAR",
      "1.7 | A Lógica do Radar de Abertura Sintética (SAR) e Polarização",
      "2.1 | ASF Data Search para Download gratuito de Imagens",
      "2.2 | Pré-Processamento de Dados SAR no software SNAP",
      "2.5 | Correção de Órbita, remoção de ruído térmico em dados GRD",
      "2.9 | Deburst e processamento de dados no SNAP",
      "2.11 | Calibração de Dados, Filtros de Speckle e Correção Geométrica",
      "2.15 | Radar Vegetation Index (RVI) e alternativas em Python"
    ],
    slides: [31, 32]
  },
  {
    category: 'specialists',
    title: "Geomarketing na Prática",
    objective: "Aplicar a inteligência geográfica em negócios para delimitar áreas de influência comercial.",
    practicalFocus: "Uso de geocodificadores, mapeamento de concorrentes, geradores de fluxo e venda de serviços de geomarketing.",
    submodules: [
      "Aula 01 | Introdução ao Geomarketing e suas aplicações práticas",
      "Aula 02 | Análise espacial aplicada a mercados",
      "Aula 03 | Mapeamento de Concorrentes e geradores de fluxo de clientes",
      "Aula 05 | Geocodificação: transformando endereços em pontos de mapa",
      "Aula 07 | Fontes de dados públicas e privadas no Brasil",
      "Aula 14 | Mapeamento do Perfil de consumo da região",
      "Bônus: Como montar propostas e vender serviços de Geomarketing"
    ],
    slides: [26]
  },
  {
    category: 'specialists',
    title: "Memorial Descritivo e Plantas Topográficas (LF Tools)",
    objective: "Automatizar a geração de memórias de cálculo fundiárias e plantas profissionais.",
    practicalFocus: "Uso do plugin LF Tools no QGIS para geração de memoriais descritivos e pranchas dinâmicas pelo Atlas.",
    submodules: [
      "1.1 | Apresentação, Objetivos e instalação do Plugin LF Tools",
      "1.3 | Carregando o Modelo TopoGeo no QGIS",
      "1.4 | Gerenciamento de Geopackages e simbologia por regras",
      "2.2 | Importação do Geopackage e vetorização de limites de confrontações",
      "2.4 | Cálculo de Área e Perímetro do imóvel rural",
      "2.5 | Execução da ferramenta de Memorial Descritivo automatizada",
      "2.6 | Inserindo Memorial Sintético na Planta Topográfica",
      "2.7 | Geração em lote de Plantas e Memoriais dinâmicos pelo Atlas"
    ],
    slides: [32]
  },
  {
    category: 'specialists',
    title: "Ecologia de Paisagem",
    objective: "Análise quantitativa de métricas ambientais de fragmentação de habitats florestais.",
    practicalFocus: "Download de bases do MapBiomas e cálculo de métricas espaciais com o Fragstats e plugin Lecos no QGIS.",
    submodules: [
      "01 | Introdução teórica à Ecologia da Paisagem (Heterogeneidade e Elementos)",
      "04 | Métricas da paisagem (Efeito de borda, fragmentação, isolamento)",
      "05 | Conhecendo e baixando dados históricos do Plugin MapBiomas",
      "06 | Preparação, reclassificação e adequação de legendas raster",
      "08 | Cálculo de métricas da paisagem utilizando o software Fragstats",
      "10 | Cálculo de métricas utilizando o Plugin Lecos (QGIS)",
      "11 | Conversão de dados Raster para Vetor e cálculo de áreas fragmentadas",
      "14 | Cruzamento temporal (1985 vs 2022) e exportação de planilhas de análise"
    ],
    slides: [34, 35]
  },
  {
    category: 'specialists',
    title: "ChatGPT para Análises Ambientais e GIS",
    objective: "Utilizar modelos de inteligência artificial generativa como assistente de geoprocessamento.",
    practicalFocus: "Construção de prompts para resolução de erros de softwares GIS, tradução e análise estatística.",
    submodules: [
      "01 | Introdução à inteligência artificial generativa",
      "02 | Registro e primeiros passos na interface do ChatGPT",
      "03 | Princípios de Engenharia de Prompt para analistas",
      "04 | Síntese de textos e tradução de termos técnicos",
      "06 | Análise exploratória de dados tabulares",
      "07 | Gestão e resolução de Erros em softwares de Geoprocessamento"
    ],
    slides: [33]
  },

  // CATEGORY: LIVES (Slides 16-19)
  {
    category: 'lives',
    title: "Gravações das Lives de Geoprocessamento (+107 Aulas)",
    objective: "Biblioteca contínua de aulas semanais práticas gravadas, abordando os desafios reais do mercado de trabalho.",
    practicalFocus: "Estudos de caso reais de consultoria ambiental, análises multicritério, modelagem de processos e mapas avançados.",
    submodules: [
      "Live #001 - Mapa de Localização no ArcGIS",
      "Live #003 - Análise Multicritério aplicada à área de estudo",
      "Live #005 - Estimativa de Temperatura Superficial com Landsat 8",
      "Live #008 - Delimitação de APP de Altitude, Declividade e Topo de Morro",
      "Live #010 - Delimitação automática de APP em margem de corpo Hídrico",
      "Live #012 - Mapa Topográfico do Zero no ArcGIS",
      "Live #025 - ModelBuilder: o tutorial supremo de automações",
      "Live #037 - Como criar um Dashboard do zero (ArcGIS Dashboards)",
      "Live #041 - Como precificar serviços de Geoprocessamento",
      "Live #042 - Hidrologia: Tutorial Supremo no ArcGIS Pro",
      "Live #045 - Truques para Layout Moderno (Map Design)",
      "Live #052 - Automação com MODELBUILDER do ZERO",
      "Live #063 - Desvendando o Google Earth Engine (GEE Scripts)",
      "Live #070 - Mapa do Absoluto Zero ao Layout Final",
      "Live #089 - Automatizando tarefas no QGIS (Modelador Gráfico)",
      "Live #095 - Como montar propostas comerciais para a área ambiental",
      "Live #106 - Análise Multicritério, Sobreposição Ponderada e Álgebra de Mapas"
    ],
    slides: [16, 17, 18, 19]
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
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[9999px] opacity-100' : 'max-h-0 opacity-0'}`}>
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
