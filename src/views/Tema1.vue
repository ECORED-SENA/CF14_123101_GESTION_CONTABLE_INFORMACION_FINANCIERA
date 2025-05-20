<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Estatuto Tributario

    p.mb-5 El Estatuto Tributario (ET) hace referencia al conjunto de normas que rige el recaudo de impuestos en Colombia, las cuales se encuentran estipuladas en el Decreto 624 de 1989.

    <!-- BLOQUE 1 -->
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Normatividad tributaria 

    .row.align-items-center
      .col-xl-auto
        figure(data-aos="fade-up").d-none.d-xl-block
          img(src="@/assets/curso/tema1/img1.svg", alt="" style="max-width: 500px").m-auto
      .col-xl
        .row.align-items-center
          .col-xl-auto
            figure(data-aos="fade-up").d-none.d-xl-block
              img(src="@/assets/curso/tema1/img2.svg", alt="" style="max-width: 80px").m-auto
          .col-xl.espacios__moviles
            p Este documento tiene como fin unificar los impuestos de carácter nacional, es importante saber su contenido para poder realizar los procesos tributarios.  (Secretaría del Senado, 2020, 15 de octubre)
        p Se debe recordar que la información tributaria se desprende de diferentes normas, entre las que se encuentran: autos, circulares, conceptos, decretos, directivas, estatutos, leyes, resoluciones, que se unifican en el documento conocido como Estatuto Tributario.
        p.mb-0 Para conocer estos documentos, ingrese a la página de la Dirección de Impuestos y Aduanas Nacionales (DIAN) en la pestaña normatividad a través del siguiente enlace: 
        a.anexo.mb-4.ajuste__link(href="https://www.dian.gov.co/normatividad/Paginas/normas.aspx" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <strong>Enlace web</strong>. Normatividad tirbutaria


    Separador.espacios__moviles
    <!-- BLOQUE 2 -->
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Calendario tributario

    .row.align-items-center.estilo__caja_1(data-aos="fade-up")
      .col-xl
        p.mb-0 La administración tributaria, ya sea de carácter nacional (DIAN) o de carácter municipal o distrital (Secretaría de Hacienda Municipal o Secretaría de Hacienda Distrital), genera un documento en donde especifica las declaraciones tributarias y en qué fecha deben ser presentadas, de acuerdo con el último número de identificación.
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema1/img3.svg", alt="" style="max-width: 500px").m-auto

    Separador
    <!-- BLOQUE 3 -->
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Evasión de impuestos y elusión: definición y tipos de evasión

    p.mb-5.espacios__moviles En el ámbito tributario, es fundamental distinguir entre evasión y elusión de impuestos, dos prácticas que impactan negativamente la recaudación fiscal. Este video explica de forma clara qué significa cada una, cómo se diferencian y cuáles son los principales tipos de evasión identificados por la DIAN.

    .video.espacios__moviles(data-aos="fade-up")
      <iframe width="560" height="315" src="https://www.youtube.com/embed/CAVj4nbua3s" title="¿qué es la evasión de impuestos y elusión? ¿cuales son los tipos de evasión?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    Separador
    <!-- BLOQUE 4 -->
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Mecanismos para evitar la elusión tributaria
    
    p.mb-5.espacios__moviles La Administración de Impuestos Nacionales de Colombia ha establecido sanciones en caso de que los contribuyentes incurran en evasión fiscal. Estas se encuentran en el Estatuto Tributario, en los artículos 657, 658-2, 669, 795. 

    .bg--img_03.espacios__moviles(data-aos="fade-up")
      AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
        .row(titulo="Art. 657. Sanción de clausura del establecimiento").ajuste-cajaAcordion
          p.mb-4 La Administración Tributaria podrá imponer la sanción de clausura o cierre del establecimiento de comercio, oficina, consultorio y, en general, del sitio donde se ejerza la actividad, profesión u oficio, mediante la imposición de sellos oficiales que contendrán la leyenda "CERRADO POR EVASIÓN" en los siguientes casos:
          ol.lista-ol--cuadro
            li.mb-4 
              .lista-ol--cuadro__vineta
                span 1
              | Por un término de tres (3) días, cuando no se expida factura o documento equivalente, estando obligado a ello, o se expida sin los requisitos establecidos en los literales b), c), d), e), f) o g) del artículo 617 del Estatuto Tributario, o se reincida en la expedición sin el cumplimiento de los requisitos señalados en los literales a), h), o i) del citado artículo.
            li.mb-4 
              .lista-ol--cuadro__vineta
                span 2
              | Por un término de tres (3) días, cuando se establezca que el contribuyente emplea sistemas electrónicos en los que se evidencie la supresión de ingresos y/o de ventas, lleve doble contabilidad, doble facturación o que una factura o documento equivalente, expedido por el contribuyente, no se encuentre registrado en la contabilidad ni en las declaraciones tributarias.
            li.mb-4 
              .lista-ol--cuadro__vineta
                span 3
              | Por un término de treinta (30) días, cuando las materias primas, activos o bienes que forman parte del inventario, o las mercancías recibidas en consignación o en depósito, sean aprehendidas por violación al régimen aduanero vigente. En este evento, la sanción se aplicará en el mismo acto administrativo de decomiso y se hará efectiva dentro de los dos (2) días siguientes a la fecha de firmeza de este. La clausura se acompañará de la imposición de sellos oficiales que contengan la leyenda "CERRADO POR EVASIÓN y CONTRABANDO". Esta sanción no será aplicable al tercero tenedor de buena fe, siempre y cuando ello se pruebe.
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Por un término de tres (3) días, cuando el agente retenedor o el responsable del régimen común del impuesto sobre las ventas o del impuesto nacional al consumo, o el responsable del impuesto nacional a la gasolina y al ACPM, o del impuesto nacional al carbono, se encuentre en omisión de la presentación de la declaración o en mora de la cancelación del saldo a pagar, superior a tres (3) meses contados a partir de las fechas de vencimiento para la presentación y pago establecidas por el Gobierno Nacional. No habrá lugar a la clausura del establecimiento para aquellos contribuyentes cuya mora se deba a la existencia de saldos a favor pendientes de compensar, siempre que se hubiere presentado la solicitud de compensación en los términos establecidos por la ley; tampoco será aplicable la sanción de clausura, siempre que el contribuyente declare y pague. Los eximentes de responsabilidad previstos en el artículo 665 de este Estatuto se tendrán en cuenta para la aplicación de esta sanción, siempre que se demuestre tal situación en la respuesta al pliego de cargos (Secretaría del Senado, 2020, 15 de octubre).
        .row(titulo="Art. 658-2. Sanción por evasión pasiva").ajuste-cajaAcordion
          p.mb-4 Las personas o entidades que realicen pagos a contribuyentes y no relacionen el correspondiente costo o gasto dentro de su contabilidad, o estos no hayan sido informados a la administración tributaria, existiendo obligación de hacerlo, o cuando esta lo hubiere requerido, serán sancionados con una multa equivalente al valor del impuesto teórico que hubiera generado tal pago, siempre y cuando el contribuyente beneficiario de los pagos haya omitido dicho ingreso en su declaración tributaria.
          p.mb-4 Sin perjuicio de la competencia general para aplicar sanciones administrativas y de las acciones penales que se deriven por tales hechos, la sanción prevista en este artículo se podrá proponer, determinar y discutir dentro del mismo proceso de imposición de sanción o de determinación oficial que se adelante contra el contribuyente que no declaró el ingreso. 
          p.mb-0 En este último caso, las dependencias competentes para adelantar la actuación frente a dicho contribuyente serán igualmente competentes para decidir frente a la persona o entidad que hizo el pago (Secretaría del Senado, 2020, 15 de octubre).  
        .row(titulo="Art. 669. Sanción por omitir ingresos o servir de instrumento de evasión").ajuste-cajaAcordion
          p.mb-4 Los responsables del impuesto sobre las ventas, pertenecientes al régimen común, que realicen operaciones ficticias, omitan ingresos o representen sociedades que sirvan como instrumento de evasión tributaria, incurrirán en una multa equivalente al valor de la operación que es motivo de esta.
          p Esta multa se impondrá por el Administrador de Impuestos Nacionales, previa comprobación del hecho y traslado de cargos al responsable por el término de un (1) mes para contestar (Secretaría del Senado, 2020, 15 de octubre).
        .row(titulo="Art. 795. Solidaridad de las entidades no contribuyentes que sirvan de elemento de evasión").ajuste-cajaAcordion
          p Cuando los no contribuyentes del impuesto sobre la renta y complementarios o los contribuyentes exentos de tal gravamen, sirvan como elementos de evasión tributaria de terceros, tanto la entidad no contribuyente o exenta, como los miembros de la junta o el consejo directivo y su representante legal, responden solidariamente con el tercero por los impuestos omitidos y por las sanciones que se deriven de la omisión (Secretaría del Senado, 2020, 15 de octubre). 

    Separador
    <!-- BLOQUE 5 -->
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Sanción: concepto, clases, liquidación

    .row.fondo_color
      .row.estilo_caja_2.align-items-center.mb-5.espacios__moviles(data-aos="fade-up")
        .col-xl-auto
          figure.d-none.d-xl-block
            img(src='@/assets/curso/tema1/img5.svg', alt='' style="max-width: 90px").m-auto
        .col-xl
          p.mb-0 Las sanciones tributarias deben ser asumidas por el contribuyente infractor, ya sea persona jurídica o natural, y deben verse reflejadas en el formulario del impuesto o en una resolución oficial de la administración de impuestos.
          
      .row.mb-5.align-items-center
        .col-xl-6
          ol.lista-ol--cuadro.ajuste__espacio
            li.mb-2(data-aos="fade-right")
              .lista-ol--cuadro__vineta
                span 1
              h4 Sanción por no declarar. Art. 643 del E.T.
            p.mb-4 Los contribuyentes, agentes retenedores o responsables obligados a declarar, que omitan la presentación de las declaraciones tributarias.
            li.mb-2(data-aos="fade-right")
              .lista-ol--cuadro__vineta
                span 2
              h4 Sanción por extemporaneidad.  Art. 641 del E.T.
            p.mb-4 Las personas o entidades obligadas a declarar, que presenten las declaraciones tributarias en forma extemporánea, deberán liquidar y pagar una sanción por cada mes o fracción de mes calendario de retardo, equivalente al cinco por ciento (5 %) del total del impuesto a cargo o retención objeto de la declaración tributaria, sin exceder del ciento por ciento (100 %) del impuesto o retención, según el caso (Secretaría del Senado, 2020, 15 de octubre).
            li(data-aos="fade-right")
              .lista-ol--cuadro__vineta
                span 3
              h4 Sanción por corrección en las declaraciones tributarias.   Art. 644 del E.T.
            p Cuando los contribuyentes, responsables o agentes retenedores, corrijan sus declaraciones tributarias, deberán liquidar y pagar una sanción.
        .col-xl-6
          figure(data-aos="fade-left").d-none.d-xl-block
            img(src='@/assets/curso/tema1/img6.svg', alt='' style="max-width: 600px").m-auto

      .row.mb-5.align-items-center
        .col-xl-6
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src='@/assets/curso/tema1/img7.svg', alt='' style="max-width: 600px").m-auto
        .col-xl-6
          ol.lista-ol--cuadro.ajuste__espacio_1.espacios__moviles_1
            li.mb-2(data-aos="fade-left")
              .lista-ol--cuadro__vineta
                span 4
              h4 Sanción por corrección aritmética. Art. 646 del E.T.
            p.mb-4 Cuando la Administración de Impuestos efectúe una liquidación de corrección aritmética sobre la declaración tributaria, y resulte un mayor valor a pagar por concepto de impuestos, anticipos o retenciones a cargo del declarante, o un menor saldo a su favor para compensar o devolver, se aplicará una sanción equivalente al treinta por ciento (30 %) del mayor valor a pagar o menor saldo a favor determinado, según el caso, sin perjuicio de los intereses moratorios a que haya lugar (Secretaría del Senado, 2020, 15 de octubre).
            li.mb-2(data-aos="fade-left")
              .lista-ol--cuadro__vineta
                span 5
              h4 Sanción por inexactitud. Art. 647 del E.T.
            p.mb-4 Constituye inexactitud sancionable en las declaraciones tributarias, siempre que se derive un menor impuesto o saldo a pagar, o un mayor saldo a favor para el contribuyente, agente retenedor o responsable (Secretaría del Senado, 2020, 15 de octubre).
            li(data-aos="fade-left")
              .lista-ol--cuadro__vineta
                span 6
              h4 Sanción por omisión de ingresos. Art. 669 del E.T.
            p Los responsables del impuesto sobre las ventas, pertenecientes al régimen común, que realicen operaciones ficticias, omitan ingresos o representen sociedades que sirvan como instrumento de evasión tributaria, incurrirán en una multa equivalente al valor de la operación que es motivo de esta (Secretaría del Senado, 2020, 15 de octubre). 

      .row.mb-5.align-items-center
        .col-xl-6
          ol.lista-ol--cuadro.ajuste__espacio.espacios__moviles_1
            li.mb-2(data-aos="fade-right")
              .lista-ol--cuadro__vineta
                span 7
              h4 Sanciones por facturación. Art. 652-1 del E.T.
            p.mb-4 Quienes, estando obligados a expedir facturas, no lo hagan, podrán ser objeto de sanción de clausura o cierre del establecimiento de comercio, oficina o consultorio, o sitio donde se ejerza la actividad, profesión u oficio, de conformidad con lo dispuesto en los artículos 657 y 658 del Estatuto Tributario (Secretaría del Senado, 2020, 15 de octubre).
            li.mb-2(data-aos="fade-right")
              .lista-ol--cuadro__vineta
                span 8
              h4 Sanciones por libros de contabilidad. Art. 655 del E.T.
            p.mb-4 Sin perjuicio del rechazo de los costos, deducciones, impuestos descontables, exenciones, descuentos tributarios y demás conceptos que carezcan de soporte en la contabilidad, o que no sean plenamente probados de conformidad con las normas vigentes, la sanción por libros de contabilidad será del medio por ciento (0.5 %) del mayor valor entre el patrimonio líquido y los ingresos netos del año anterior al de su imposición, sin exceder de 20.000 UVT (Secretaría del Senado, 2020, 15 de octubre).
        .col-xl-6
          figure(data-aos="fade-left").d-none.d-xl-block
            img(src='@/assets/curso/tema1/img8.svg', alt='' style="max-width: 600px").m-auto  

      .row.mb-5.align-items-center
        .col-xl-6.ajuste__img
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src='@/assets/curso/tema1/img9.svg', alt='' style="max-width: 600px").m-auto
        .col-xl-6
          ol.lista-ol--cuadro.ajuste__espacio_1.espacios__moviles_1
            li.mb-2.al(data-aos="fade-left")
              .lista-ol--cuadro__vineta
                span 9
              h4 Sanción por no enviar información tributaria. Art. 651 del E.T.
            p.mb-4 Las personas y entidades obligadas a suministrar información tributaria, así como aquellas a quienes se les haya solicitado informaciones o pruebas, que no la suministren dentro del plazo establecido para ello o cuyo contenido presente errores o no corresponda a lo solicitado, incurrirán en una sanción (Secretaría del Senado, 2020, 15 de octubre).
            li.mb-2(data-aos="fade-left")
              .lista-ol--cuadro__vineta
                span 10
              h4 Sanción por devolución o compensación improcedente. Art. 670 del E.T.
            p.mb-4 Las devoluciones y/o compensaciones efectuadas, de acuerdo con las declaraciones del impuesto sobre la renta y complementarios, y del impuesto sobre las ventas, presentadas por los contribuyentes o responsables, no constituyen un reconocimiento definitivo a su favor (Secretaría del Senado, 2020, 15 de octubre).
            li(data-aos="fade-left")
              .lista-ol--cuadro__vineta
                span 11
              h4 Sanción por disminución o rechazo de pérdidas fiscales. Art. 647 del E.T.
            p La disminución de las pérdidas fiscales declaradas por el contribuyente, mediante liquidaciones oficiales o por corrección de las declaraciones privadas, se considera, para efectos de todas las sanciones tributarias, como un menor saldo a favor, en una cuantía equivalente al impuesto que teóricamente generaría la pérdida rechazada oficialmente o disminuida en la corrección. Dicha cuantía constituirá la base para determinar la sanción, la cual se adicionará al valor de las demás sanciones que legalmente deban aplicarse (Secretaría del Senado, 2020, 15 de octubre).

      .row.mb-5.align-items-center
        .col-xl-6
          ol.lista-ol--cuadro.ajuste__espacio.espacios__moviles_1
            li.mb-2(data-aos="fade-right")
              .lista-ol--cuadro__vineta
                span 12
              h4 Sanción por gastos no explicados.  Art. 663 del E.T.
            p.mb-4 Cuando las compras, costos y gastos del contribuyente excedan de la suma de los ingresos declarados y los pasivos adquiridos en el año, el contribuyente podrá ser requerido por la Administración de Impuestos para que explique dicha diferencia. (Secretaría del Senado, 2020, 15 de octubre).
            li.mb-2(data-aos="fade-right")
              .lista-ol--cuadro__vineta
                span 13
              h4 Sanción por no acreditar el pago de los aportes parafiscales.  Art. 664 del E.T.
            p.mb-4 El desconocimiento de la deducción por salarios, por no acreditar el pago de los aportes al Instituto de Seguros Sociales y a las entidades a que se refiere la Ley 100 de 1993, al Servicio Nacional de Aprendizaje, al Instituto Colombiano de Bienestar Familiar y a las Cajas de Compensación Familiar, de quienes estén obligados a realizar tales aportes, se efectuará por parte de la Administración de Impuestos, si no se acredita que el pago fue efectuado previamente a la presentación de la correspondiente declaración del impuesto sobre la renta y complementarios (Secretaría del Senado, 2020, 15 de octubre).
            li.mb-2(data-aos="fade-right")
              .lista-ol--cuadro__vineta
                span 14
              h4 Sanción por violar las normas que rigen la profesión. Art. 659 del E.T.
            p Los contadores públicos, auditores o revisores fiscales que lleven o aconsejen llevar contabilidades, elaboren estados financieros o expidan certificaciones que no reflejen la realidad económica de acuerdo con los principios de contabilidad generalmente aceptados, que no coincidan con los asientos registrados en los libros, o emitan dictámenes u opiniones sin sujeción a las normas de auditoría generalmente aceptadas, que sirvan de base para la elaboración de declaraciones tributarias, o para soportar actuaciones ante la Administración Tributaria, incurrirán en los términos de la Ley 43 de 1990, en las sanciones de multa, suspensión o cancelación de su inscripción profesional de acuerdo con la gravedad de la falta (Secretaría del Senado, 2020, 15 de octubre). 
        .col-xl-6
          figure(data-aos="fade-left").d-none.d-xl-block
            img(src='@/assets/curso/tema1/img10.svg', alt='' style="max-width: 600px").m-auto  

      .row.mb-5.align-items-center
        .col-xl-6.ajuste__img
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src='@/assets/curso/tema1/img11.svg', alt='' style="max-width: 600px").m-auto
        .col-xl-6
          ol.lista-ol--cuadro.ajuste__espacio_1.espacios__moviles_1
            li.mb-2.al(data-aos="fade-left")
              .lista-ol--cuadro__vineta
                span 15
              h4 Sanciones tributarias a gerentes y representantes legales. Art. 658-1 del E.T.
            p.mb-4 Cuando en la contabilidad o en las declaraciones tributarias de los contribuyentes se encuentren irregularidades sancionables, relativas a omisión de ingresos gravados, doble contabilidad e inclusión de costos o deducciones inexistentes y pérdidas improcedentes, que sean ordenados y/o aprobados por los representantes que deben cumplir deberes formales de que trata el artículo 572 de este Estatuto, serán sancionados con una multa equivalente al veinte por ciento (20 %) de la sanción impuesta al contribuyente, sin exceder de 4.100 UVT, la cual no podrá ser sufragada por su representada (Secretaría del Senado, 2020, 15 de octubre). 
            li.mb-2(data-aos="fade-left")
              .lista-ol--cuadro__vineta
                span 16
              h4 Sanción mínima.  Art. 639 del E.T.
            p El valor mínimo de cualquier sanción, incluidas las sanciones reducidas, liquidadas por la persona o entidad sometida a ella, o a la Administración de Impuestos, será equivalente a la suma de 10 UVT (Secretaría del Senado, 2020, 15 de octubre). Cada sanción tiene un procedimiento, sin embargo, el regular de las sanciones, para realizar la liquidación, es tomar el valor del impuesto y multiplicarlo por la tarifa.

      ol.lista-ol--cuadro.ajuste__espacio_1.espacios__moviles
        li.mb-2.al(data-aos="fade-right")
          .lista-ol--cuadro__vineta
            span 17
          h4 Sanción por extemporaneidad (S x E)
        p.mb-5 Teniendo en cuenta que para esta sanción se debe tomar la información por cada mes o fracción de mes de atraso por un 5 % y si fue con emplazamiento, la misma sanción se duplica, es decir, 10 %.

      .row.mb-5.align-items-center
        .col-xl-1
        .col-xl-10
          .row.align-items-center.estilo_caja_3(data-aos="fade-up")
            .col-xl
              h4 Ejemplo:
              p Si se debía presentar la declaración el 14 de junio del 2020 y se presentó el 15 de julio del 2020, se encuentra que el tiempo para presentar la sanción será de 2 meses, el primer mes comprendido entre el 15 de junio al 14 de julio del 2020, como mes completo y el segundo mes el 15 de julio de 2020 como fracción de mes, si el impuesto fue de $1.000.000, se liquidará de la siguiente forma:
              p.mb-0.estilo_caja_4 <strong>S x E = $1.000.000 x 5 % x 2 = $100.000</strong>
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema1/img12.svg', alt='' style="max-width: 400px").m-auto

      p.mb-3 Pero se debe recordar que la sanción siempre debe estar por encima de la sanción mínima, es decir, de 10 UVT, que para el año 2020 sería de $356.000.
      p.mb-5 Si no hay impuesto a cargo, la sanción por cada mes o fracción de mes será igual al medio por ciento (0.5 %) de los ingresos brutos percibidos, sin exceder la cifra menor resultante de aplicar el cinco por ciento (5 %) a dichos ingresos, o del doble del saldo a favor si lo hubiere, o de la suma de 2.500 UVT cuando no existiere saldo a favor. Si no hay ingresos en el período, la sanción por cada mes o fracción de mes es del uno por ciento (1 %) del patrimonio líquido del año inmediatamente anterior, sin superar la cifra menor resultante de aplicar el diez por ciento (10 %) al mismo, o del doble del saldo a favor si lo hubiere, o de la suma de 2.500 UVT cuando no existiere saldo a favor.

      ol.lista-ol--cuadro.ajuste__espacio_1
        li.mb-2.al(data-aos="fade-right")
          .lista-ol--cuadro__vineta
            span 18
          h4 Sanción por corrección

      p.mb-5 Teniendo en cuenta que esta sanción se aplica sobre los valores que se están corrigiendo en las declaraciones tributarias, no se acumula por periodos, se realiza sobre un único periodo, con un valor del 10 %; si hay un emplazamiento, la sanción se duplicará, por lo tanto, la sanción sería del 20 %.

      .row.align-items-center.estilo_caja_5(data-aos="fade-right")
        .col-xl
          h4 Ejemplo:
          p Si se debía presentar la declaración el 14 de junio del 2020 y se presentó el 15 de julio del 2020, inicialmente se canceló un valor de $1.000.000 y después de realizar la revisión de la declaración, se evidencia que el valor a pagar en realidad era de $5.000.000, se procede a calcular la sanción:
          .row.estilo_caja_6
            .col-xl
              <ul class="fa-ul">
                <li class="mb-3"><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Valor inicialmente declarado: $1.000.000</li>
                <li class="mb-3"><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Valor final declarado: 	$5.000.000</li>
                <li><span class="fa-li"><i class="fas fa-chevron-right"></i></span>Valor de la corrección: 	$4.000.000</li>
              </ul>
        .col-xl-auto
          figure.d-none.d-xl-block
            img(src='@/assets/curso/tema1/img13.svg', alt='' style="max-width: 300px").m-auto
        .col-xl
          h4.mb-4 Liquidación de la sanción
          p.mb-4.estilo_caja_4 <strong>S x C = $4.000.000 x 10 % = $400.000</strong>
          p.mb-0 Se debe tener presente que, si en la corrección se presenta un menor valor a pagar o un mayor saldo a su favor, no aplica sanción si así lo determina la Dirección de Impuestos y Aduanas Nacionales (Herrera & Hernández, 2016).
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
