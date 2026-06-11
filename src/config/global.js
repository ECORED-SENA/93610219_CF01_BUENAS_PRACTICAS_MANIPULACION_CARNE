export default {
  global: {
    Name: 'Generalidades de la carne',
    Description:
      'La producción y el consumo de carne son actividades fundamentales para la alimentación y la economía. Este componente formativo permite reconocer las características químicas y sensoriales de la carne, así como los agentes que afectan su calidad. Además, promueve la aplicación de normatividad y buenas prácticas, garantizando alimentos inocuos, seguros y aptos para el consumo humano.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Objeto de la producción: ganado bovino, porcino, ovino-caprino y aves',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de objeto de la producción',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia de identificar la materia prima',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Clasificación de la producción animal',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Producción por especie',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Mapa mental de la producción animal',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Relación con las buenas prácticas de manipulación (BPM)',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Enfoque de inocuidad',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Cuadro comparativo de especies',
            hash: 't_1_8',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Transformación del músculo a carne',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Cambios principales en la transformación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Etapas del proceso post-mortem (visión didáctica)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Factores que influyen en la transformación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Impacto en la calidad de la carne',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Aplicación de buenas prácticas de manipulación (BPM)',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Relación con el resultado de aprendizaje',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Composición química de la carne',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Agua',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Proteínas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Grasa (lípidos)',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Hidratos de carbono',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Vitaminas',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Minerales',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Composición según la especie',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo: 'Relación con la calidad de la carne',
            hash: 't_3_8',
          },
          {
            numero: '3.9',
            titulo: 'Relación con BPM e inocuidad',
            hash: 't_3_9',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Desarrollo de las características sensoriales durante la cocción de la carne	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Características sensoriales  ',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Factores que modifican el aroma de la carne',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Factores en el desarrollo del aroma de la carne',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Importancia del pH en la calidad del aroma',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Propiedades organolépticas de la carne',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Textura de la carne y su relación con la manipulación (BPM)',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Componentes estructurales de la textura',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Dureza y terneza',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Manejo post mortem y conservación',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Relación de la textura con las buenas prácticas de manipulación (BPM)',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Impacto de la manipulación inadecuada',
            hash: 't_5_6',
          },
          {
            numero: '5.7',
            titulo: 'Principios de BPM aplicados a la textura',
            hash: 't_5_7',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Alteración de la carne',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Agentes que alteran la carne',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Microorganismos alterantes según tipo de carne',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Residuos en carne',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Residuos productos farmacológicos',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Anabolizantes o promotores del crecimiento',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Nitrosaminas',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Alteración y contaminación de la carne',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Principales fuentes tóxicas',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Agentes biológicos',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Microorganismos alterantes en las carnes frescas',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo:
              'Microorganismos en las carnes empacadas al vacío o en atmósferas modificadas',
            hash: 't_8_4',
          },
          {
            numero: '8.5',
            titulo: 'Microorganismos en las carnes congeladas',
            hash: 't_8_5',
          },
          {
            numero: '8.6',
            titulo: 'Microorganismos alterantes de carnes curadas',
            hash: 't_8_6',
          },
          {
            numero: '8.7',
            titulo: 'Alteración de las carnes secas',
            hash: 't_8_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/93610219_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Actividad de agua (aw)',
      significado:
        'Cantidad de agua disponible en un alimento que permite el crecimiento de microorganismos y afecta su conservación.',
    },
    {
      termino: 'Agentes biológicos',
      significado:
        'Organismos como bacterias, virus, hongos o parásitos que pueden contaminar y deteriorar la carne.',
    },
    {
      termino: 'Agentes químicos',
      significado:
        'Sustancias como medicamentos, plaguicidas o aditivos que pueden contaminar la carne y afectar la salud.',
    },
    {
      termino: 'Agentes físicos',
      significado:
        'Factores como temperatura, luz o radiación que alteran las características de la carne.',
    },
    {
      termino: 'Anabolizantes',
      significado:
        'Sustancias que estimulan el crecimiento muscular en animales y pueden generar riesgos para la salud.',
    },
    {
      termino: 'Cadena de frío',
      significado:
        'Sistema de control de temperatura que se mantiene desde la producción hasta el consumo para preservar la calidad.',
    },
    {
      termino: 'Carne',
      significado:
        'Tejido muscular de animales aptos para consumo humano que adquiere características específicas tras el sacrificio.',
    },
    {
      termino: 'Contaminación',
      significado:
        'Presencia de agentes físicos, químicos o biológicos que afectan la inocuidad de los alimentos.',
    },
    {
      termino: 'Contaminación biológica',
      significado:
        'Presencia de microorganismos patógenos que pueden causar enfermedades o deterioro del alimento.',
    },
    {
      termino: 'Glucólisis anaeróbica',
      significado:
        'Proceso bioquímico en el cual el glucógeno se transforma en ácido láctico en ausencia de oxígeno.',
    },
    {
      termino: 'Inocuidad alimentaria',
      significado:
        'Condición que garantiza que un alimento no causará daño al consumidor bajo su uso adecuado.',
    },
    {
      termino: 'Microorganismos psicrófilos',
      significado:
        'Microorganismos que crecen a bajas temperaturas y deterioran la carne durante la refrigeración.',
    },
    {
      termino: 'Nitrosaminas',
      significado:
        'Compuestos químicos potencialmente cancerígenos formados por la reacción entre aminas y nitritos.',
    },
    {
      termino: 'Nitrosomioglobina',
      significado:
        'Pigmento responsable del color rosado en carnes curadas generado por la interacción con nitritos.',
    },
    {
      termino: 'Rigor mortis',
      significado:
        'Estado de rigidez muscular posterior a la muerte por agotamiento de energía en el músculo.',
    },
  ],
  referencias: [
    {
      referencia:
        'FAO/OMS Codex Alimentarius Commission. (2023). Código de prácticas de higiene para la carne (CAC/RCP 58-2005, actualizado).',
      link: 'https://www.fao.org/4/j1870s/j1870s00.htm',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2007). Decreto 1500 de 2007: Por el cual se establece el reglamento técnico para el sistema oficial de inspección, vigilancia y control de la carne y productos cárnicos comestibles.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=38923',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2020). Resolución 067449 de 2020: Por la cual se establecen los requisitos para la certificación en buenas prácticas ganaderas (BPG) en la producción de bovinos de carne y leche.',
      link: 'https://www.ica.gov.co',
    },
    {
      referencia:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA). (2024). Carne y productos cárnicos: inspección, vigilancia y control.',
      link: 'https://www.invima.gov.co/productos-vigilados/alimentos/carne',
    },
    {
      referencia:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA). (2024). Guía de transporte y trazabilidad de carne y productos cárnicos.',
      link:
        'https://www.invima.gov.co/biblioteca/guia-transporte-destino-carne-productos-carnicos-resolucion-2019055962-99551',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2023). Food safety and animal health.',
      link: 'https://www.fao.org/animal-health/areas-of-work/food-safety/en/',
    },
    {
      referencia:
        'Organización Mundial de la Salud (OMS). (2023). Food safety guidelines.',
      link: 'https://www.emro.who.int/health-topics/food-safety/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06.<br>Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Germán Adolfo Rodríguez Pulido',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Risaralda',
        },
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angúlo Ramírez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Fabio Armando Ortiz Reyes',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
