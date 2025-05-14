export default {
  global: {
    Name: 'Declaraciones tributarias',
    Description:
      'Se desarrolla de forma práctica la elaboración y presentación de las declaraciones tributarias correspondientes a impuestos nacionales y municipales. Además, se identifican las herramientas tecnológicas que utiliza el Estado para el recaudo de los impuestos, teniendo en cuenta que dicho recaudo es la fuente principal de ingresos para cubrir el gasto público y la inversión en un país. Adicionalmente, se analiza la normatividad aplicable y las características de cada declaración con el fin de conocer la periodicidad, los formularios establecidos y la obligación de cada una.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Estatuto Tributario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Normatividad tributaria',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Calendario tributario',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Evasión de impuestos y elusión: definición y tipos de evasión',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Mecanismos para evitar la elusión tributaria',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Sanción: concepto, clases, liquidación',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Plataforma Dirección de Impuestos y Aduanas Nacionales DIAN, liquidación de formularios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Servicios en línea',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Instrucciones',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Aplicativos e impuestos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Liquidación impuestos nacionales',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Plataforma Secretaría de Hacienda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Servicios en línea',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Formularios',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Liquidación impuestos territoriales',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Información exógena',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: 'DIAN',
      referencia: 'DIAN, (2020). Calendario tributario.',
      tipo: 'Documento',
      link:
        'https://www.dian.gov.co/Calendarios/Calendario_Tributario_2020.pdf',
    },
    {
      tema: 'DIAN',
      referencia: 'DIAN, (2020), Resolución 000070 /2019',
      tipo: 'Documento',
      link:
        'https://www.dian.gov.co/normatividad/Normatividad/Resoluci%c3%b3n%20000070%20de%2005-11-2019.pdf ',
    },
    {
      tema: 'DIAN',
      referencia: 'DIAN, (2020). Resolución 000027 /2020',
      tipo: 'Documento',
      link:
        'https://www.dian.gov.co/normatividad/Normatividad/Resoluci%c3%b3n%20000027%20de%2025-03-2020.pdf ',
    },
    {
      tema: 'DIAN',
      referencia: 'DIAN, (2020). Prevalidadores de información exógena',
      tipo: 'Sitio web',
      link:
        'https://www.dian.gov.co/impuestos/sociedades/ExogenaTributaria/Prevalidadores/Paginas/default.aspx ',
    },
    {
      tema:
        'Ministerio de Hacienda y Crédito Público, Resolución 4056 del 1 de diciembre de 2017.',
      referencia:
        'Ministerio de Hacienda y Crédito Público, (2017). Resolución 4056 del 1 de diciembre de 2017.',
      tipo: 'Documento',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=73328',
    },
    {
      tema:
        'Secretaría de Hacienda Distrital, Resolución DDI-094892 del 23 de diciembre de 2014.',
      referencia:
        'Secretaría de Hacienda Distrital, (2014), Resolución DDI-094892 del 23 de diciembre de 2014.',
      tipo: 'Documento',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=60361',
    },
    {
      tema: 'Formulario 350',
      referencia: 'DIAN, (2020). Formulario 350',
      tipo: 'Documento',
      link:
        'https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Formularios/2020/Formulario_350_2020.pdf',
    },
    {
      tema: 'Formulario 300',
      referencia: 'DIAN, (2020). Formulario 300',
      tipo: 'Documento',
      link:
        'https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Formularios/2020/Formulario_300_2020.pdf',
    },
    {
      tema: 'Formulario 310',
      referencia: 'DIAN, (2019). Formulario 310',
      tipo: 'Documento',
      link:
        'https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Formularios/2019/Formulario_310_2019.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Evasión tributaria',
      significado:
        'es cuando se omite un ingreso o se le da más valor del real a un ítem deducible para reducir el pago de una obligación, este es fácilmente evidenciable por la administración.',
    },
    {
      termino: 'Elusión tributaria',
      significado:
        'es no crear la obligación tributaria, valiéndose de vacíos legales para volverse casi indetectable. Al no generar la obligación tributaria, la administración no tiene conocimiento del incumplimiento.',
    },
    {
      termino: 'Información exógena',
      significado:
        'es la información que deben presentar las personas naturales y jurídicas ante la entidad de administración de impuestos DIAN, en donde reportan a los terceros con los cuales tuvieron algún tipo de relación comercial.',
    },
    {
      termino: 'Impuestos',
      significado:
        'son los tributos que las personas naturales y jurídicas deben pagar al estado para costear las necesidades colectivas.',
    },
    {
      termino: 'Sanción',
      significado:
        'es el castigo dado a una persona natural o jurídica por el incumplimiento de alguna norma.',
    },
    {
      termino: 'Unidad de Valor Tributario',
      significado:
        'la Unidad de Valor Tributario (UVT) es una unidad referencial que representa un valor en pesos y es actualizada anualmente por la DIAN según la inflación del año.',
    },
    {
      termino: 'Contribuyente',
      significado:
        'es toda persona natural o jurídica con obligaciones y derechos frente a un ente público que se traduce en tributos, y está obligada a realizar el pago de estos, para poder financiar al Estado, según lo establece la ley.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bedoya O. H., & Rua W. (2016). El concepto de evasión y elusión en términos de la Corte Constitucional, el Concejo de Estado y la Administración de Impuestos y Aduanas Nacionales. Contaduría Universidad De Antioquia, (69), 69-97.',
      link: 'https://revistas.udea.edu.co/index.php/cont/article/view/328431',
    },
    {
      referencia: 'DIAN. (2020). Resolución 000027.  ',
      link:
        'https://www.dian.gov.co/normatividad/Normatividad/Resoluci%c3%b3n%20000027%20de%2025-03-2020.pdf',
    },
    {
      referencia: 'DIAN. (2020a, 20 de octubre). ',
      link: 'https://muisca.dian.gov.co/',
    },
    {
      referencia:
        'DIAN. (2020b, 30 de octubre). Formulario 350. www.dian.gov.co. ',
      link:
        'https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Formularios/2020/Formulario_350_2020.pdf',
    },
    {
      referencia:
        'DIAN. (2020c, 30 de octubre). Formulario 300.  www.dian.gov.co ',
      link:
        'https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Formularios/2020/Formulario_300_2020.pdf',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (2004). Modelo Único de Ingresos, Servicio y Control Automatizado (MUISCA), Bogotá. Especial Información Exógena tributaria a la DIAN por el año gravable 2011. ',
      link:
        'https://actualicese.com/especial-informacion-exogena-tributaria-a-la-dian-por-el-ano-gravable-2011-primera-parte/',
    },
    {
      referencia:
        'Herrera, L. Y., & Hernández, C. P. (2016). Determinación de las principales sanciones relacionadas con las declaraciones tributarias. Repositorio UCC. ',
      link: 'http://hdl.handle.net/20.500.12494/1713',
    },
    {
      referencia:
        'Patiño, R. A., Parra Jiménez, O. D., & León Mesa, F. Y. (2016). Información exógena y su impacto sobre la evasión en Colombia (2001 - 2009). Revista Activos, 8(15). ',
      link: 'https://doi.org/10.15332/s0124-5805.2010.0015.03',
    },
    {
      referencia:
        'Es.linkfang.org. 2021. Plataforma digital. Plataforma digital - es.LinkFang.org. ',
      link: 'https://es.linkfang.org/wiki/Plataforma_digital',
    },
    {
      referencia:
        'Martínez, O. H. B., & Rua, W. (2016). El concepto de evasión y elusión en términos de la Corte Constitucional, el Concejo de Estado y la Administración de Impuestos y Aduanas Nacionales. Revista de contaduría Universidad de Antioquia, (69), 69-97.',
      link: '',
    },
    {
      referencia:
        'MinTIC. (2020, 7 de septiembre). Gobierno en Línea. Mintic.gov.co. ',
      link:
        'https://www.mintic.gov.co/portal/inicio/5306:Gobierno-en-L-nea-GEL',
    },
    {
      referencia:
        'Rankia (2019). ¿Qué son las plataformas digitales y para qué sirven? Rankia.co. ',
      link:
        'https://www.rankia.co/blog/analisis-colcap/4317884-que-son-plataformas-digitales-para-sirven',
    },
    {
      referencia:
        'Secretaría del Senado. (2020, 15 de octubre) Estatuto Tributario. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html',
    },
    {
      referencia:
        'Secretaría Distrital de Hacienda. (2020, 30 de octubre). Oficina virtual. www.shd.gov.co. ',
      link: 'https://www.haciendabogota.gov.co/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Yolima Gómez Contreras',
          cargo: 'Experto temático',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Gabriel Leonardo Cárdenas Caicedo',
          cargo: 'Experto temático',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Maryuri Agudelo Franco',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica. - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Geraldine Viviana Fernandez Jaramillo',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ángela María Maldonado Jaime',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'John Jairo Arciniegas González',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Víctor Raúl Cárdenas Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy Maria Ruiz Torres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
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
