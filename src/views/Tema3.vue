<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Plataforma Secretaría de Hacienda
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.ajuste___2.mb-5(data-aos="fade-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La Secretaría de Hacienda tiene la misión de gestionar los recursos y distribuirlos entre los sectores de la Administración Distrital, por lo tanto, para esta entidad y por su carácter es de suma importancia el uso de plataforma digital, la cual, le posibilita propiciar espacios de organización, agendamiento de citas y a su vez el cumplimiento de gestiones y procesos para los ciudadanos.

    <!-- BLOQUE 1 -->
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Concepto

    .row.mb-5.align-items-center.estilo_caja_9(data-aos="fade-down")
      .col-xl
        p.mb-3 La plataforma que utiliza la Secretaría de Hacienda de Bogotá (SHD) tiene habilitado en su página web el aplicativo denominado Oficina Virtual, que es la herramienta utilizada para la elaboración y presentación de los impuestos municipales, a través de los sistemas informáticos. Para la comprensión de este proceso es necesario tener presente el siguiente concepto: plataforma digital.
        .bloque-texto-b.color-primario.mb-4.p-3.ajuste___cita
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-0 Es un lugar de Internet, portal o cibersitio que sirve para almacenar diferentes tipos de información, tanto personal como a nivel de negocios.
            i.fas.fa-quote-right
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/tema3/img2.svg', alt='' style="max-width: 400px").m-auto
    
    p.mb-0.espacios__moviles Estas plataformas funcionan con determinados tipos de sistemas operativos y ejecutan programas o aplicaciones con diferentes contenidos, como pueden ser juegos, imágenes, texto, cálculos, simulaciones y vídeo, entre otros, que se pueden considerar agrupados en una colección de herramientas y servicios que una organización utiliza para desarrollar una estrategia digital.
      
    Separador
    <!-- BLOQUE 2 -->
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Servicios en línea
    
    .row.fondo-slider.mb-5
      .ajuste-slider(data-aos="fade-up")
        SlyderA(tipo="b")
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6.mb-4.col-xs-12
              p.mb-0 Los diferentes servicios en línea que presta la Secretaría de Hacienda Distrital (SHD), teniendo presente que, para acceder a los mismos, los contribuyentes deben estar inscritos en el RIT, que es el Registro de Identificación Tributaria, registrar la creación de un usuario y clave, ingresando a cualquier servicio y seleccionando la opción de obtener contraseña.
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-2
                h5 Figura 8.
                span Trámites y servicios destacados en portal tributario de Bogotá
              figure
                img(src='@/assets/curso/tema3/img3.svg', alt='Sección del portal tributario de Bogotá con accesos directos a trámites y servicios frecuentes. Incluye recordatorio de próximos vencimientos del ICA y Predial 2025, y botones.' style="max-width: 600px").m-auto

          .row.h-100.justify-content-center.align-items-center
            .col-lg-6.mb-4.col-xs-12
              p.mb-0 Esta ventana de la plataforma digital de la SHD permite crear los usuarios con la información básica de los contribuyentes y allí, con su documento de identidad, generar una contraseña para poder acceder a los servicios que ofrece el aplicativo de la secretaría.
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-2
                h5 Figura 9.
                span Portal de pagos en línea de Bogotá
              figure
                img(src='@/assets/curso/tema3/img4.svg', alt='Página web con opciones de pago en línea para impuestos y servicios en Bogotá.' style="max-width: 600px").m-auto

    h4.mb-5 Los servicios en línea que están disponibles en la SHD son:

    TabsB.color-acento-contenido(data-aos="fade-up")

      .py-4.py-md-5(titulo="Predial" :icono="require('@/assets/curso/tema3/img24.svg')")
        .row.align-items-center
          .col-xl-6.ajuste__movil_3
            h4 Predial:
            p.mb-0 En esta opción, la SHD genera el impuesto predial según si el contribuyente tiene la obligación, como lo establece el hecho generador que corresponde a la posesión de un bien inmueble en el municipio de Bogotá.
          .col-lg-6.mb-4.mb-md-0
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema3/img5.png', alt="" style="max-width: 450px").m-auto

      .py-4.py-md-5(titulo="ICA, RETEICA" :icono="require('@/assets/curso/tema3/img25.svg')")
        .row.align-items-center
          .col-xl-6.ajuste__movil_3
            h4 ICA, RETEICA:
            p.mb-0 En este botón se pueden validar los trámites correspondientes al diligenciamiento, presentación y pago de la Declaración del Impuesto de Industria y Comercio, Avisos y Tableros, así como también la Declaración de Retención de Industria y Comercio.
          .col-lg-6.mb-4.mb-md-0
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema3/img6.png', alt="" style="max-width: 450px").m-auto
      
      .py-4.py-md-5(titulo="Medios magnéticos" :icono="require('@/assets/curso/tema3/img26.svg')")
        .row.align-items-center
          .col-xl-6.ajuste__movil_3
            h4 Medios magnéticos:
            p.mb-0 En esta opción, el contribuyente que por ley tenga la obligación de presentar los informes de exógena distrital, debe cargar dicha información en archivo plano por CSV (delimitado por comas).
          .col-lg-6.mb-4.mb-md-0
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema3/img7.png', alt="" style="max-width: 450px").m-auto

      .py-4.py-md-5(titulo="RIT" :icono="require('@/assets/curso/tema3/img27.svg')")
        .row.align-items-center
          .col-xl-6.ajuste__movil_3
            h4 RIT:
            p.mb-0 Por este <a href="https://www.haciendabogota.gov.co/es/tramites/certificacion-rit" target="_blank" class="anexo___1">enlace</a> se pueden validar los trámites de RIT, como actualización de datos básicos, inscripción, cambio o eliminación de las actividades correspondientes a los ingresos que obtiene el contribuyente asociado al CIIU.
          .col-lg-6.mb-4.mb-md-0
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema3/img8.png', alt="" style="max-width: 450px").m-auto

      .py-4.py-md-5(titulo="Vehículos" :icono="require('@/assets/curso/tema3/img28.svg')")
        .row.align-items-center
          .col-xl-6.ajuste__movil_3
            h4 Vehículos:
            p.mb-0 En esta opción, la SHD genera el impuesto de vehículo según si el contribuyente tiene la obligación, como lo establece el hecho generador que corresponde a la posesión de un vehículo inscrito en el municipio de Bogotá.
          .col-lg-6.mb-4.mb-md-0
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema3/img9.png', alt="" style="max-width: 450px").m-auto

    Separador.espacios__moviles
    <!-- BLOQUE 3 -->
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Formularios

    .row.mb-5.align-items-center.estilo_caja_10(data-aos="fade-down")
      .col-xl
        p.mb-4 Por medio de la Resolución 4056 del 1 de diciembre de 2017, el Ministerio de Hacienda y Crédito Público estableció un formato Único para presentar la declaración y pago del Impuesto de Industria y Comercio, Avisos y Tableros, con el propósito de que todos los municipios manejen el mismo formato, teniendo presente los diferentes periodos de declaración que manejan los municipios, ya que, el estatuto tributario por cada municipio es autónomo, por ello se encuentra que la mayoría de municipios manejan una periodicidad ANUAL, mientras en Bogotá se maneja una periodicidad ANUAL O BIMESTRAL, dependiendo de si a diciembre 31 el impuesto a cargo superó 391 UVT, es bimestral, de lo contrario se maneja anual.
        a.anexo.mb-4.ajuste__link(:href="obtenerLink('/downloads/Anexo1.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo</strong>. Formulario Único Nacional de Declaración y Pago del Impuesto de Industria y Comercio
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/tema3/img10.svg', alt='' style="max-width: 360px").m-auto
    
    .row.fondo_color_5
      .px-5
        .row.mb-5
          .col-xl-1
          .col-xl-10
            .row.align-items-center.estilo_caja_11(data-aos="fade-up")
              .col-xl-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/tema3/img12.svg', alt='' style="max-width: 67px").m-auto
              .col-xl
                p.mb-0 El formulario de Impuesto de Industria y Comercio, Avisos y Tableros está compuesto por:
            .row.estilo_caja_12
              ol.lista-ol--cuadro
                li.mb-4 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Una primera parte con la información del contribuyente: nombres y apellidos o razón social; dirección de identificación, municipio o distrito, teléfono, correo, departamento, número de establecimientos.
              .row.d-flex.justify-content-center.mb-4(data-aos="fade-up")
                .col-xl-1
                .col-xl-10
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 10.
                    span Formulario de declaración del impuesto de industria y comercio
                  figure
                    img(src='@/assets/curso/tema3/img13.svg', alt='Fragmento del Formulario Único Nacional para la declaración y pago del impuesto de industria y comercio.' style="max-width: 600px")
              ol.lista-ol--cuadro
                li.mb-4 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Una segunda parte, identificando la base gravable, donde se puede validar el total de ingresos operacionales y no operacionales de la entidad, allí se restan los ingresos fuera del municipio y las devoluciones, rebajas, descuentos; también los ingresos por exportaciones, venta de activos fijos, actividades excluidas o no sujetas e ingresos por actividades exentas en el municipio, según acuerdos de cada municipio.
              .row.d-flex.justify-content-center.mb-4(data-aos="fade-up")
                .col-xl-1
                .col-xl-10
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 11.
                    span Sección de base gravable del formulario de industria y comercio
                  figure
                    img(src='@/assets/curso/tema3/img14.svg', alt='Fragmento del formulario de industria y comercio correspondiente a la sección B. Base Gravable.' style="max-width: 600px")
              ol.lista-ol--cuadro
                li.mb-4 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Una tercera parte con la discriminación de las actividades que realiza el contribuyente, directamente relacionado con el CIIU, la tarifa que corresponda (se debe tener en cuenta que la tarifa cambia según el estatuto tributario de cada municipio y la tarifa se aplica por mil), y el impuesto, resultado de tomar el ingreso gravado y multiplicarlo por la tarifa. Además, la información reportada debe estar diligenciada aproximada al mil más cercano.
              .row.d-flex.justify-content-center.mb-4(data-aos="fade-up")
                .col-xl-1
                .col-xl-10
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 12.
                    span Sección de actividades gravadas del formulario de industria y comercio
                  figure
                    img(src='@/assets/curso/tema3/img15.svg', alt='Fragmento del formulario de industria y comercio correspondiente a la sección C. Discriminación de actividades.' style="max-width: 600px")
              ol.lista-ol--cuadro
                li.mb-4 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Una cuarta parte con la liquidación privada, calculando el impuesto de Industria y Comercio correspondiente; adicionalmente, si la empresa maneja avisos y tableros, se calcula también este impuesto tomando el de Industria y Comercio, multiplicando por el 15 % y aproximando el valor al mil más cercano. Además, se adicionan unidades comerciales, si es una entidad del sector financiero y sobretasa bomberil y de seguridad, según la aplicación en cada municipio y la normatividad de cada uno. Posteriormente, se le restan los valores de exención o exoneración, las retenciones de Ica que le practicaron o se autopracticó, según la entidad; también se resta el anticipo de liquidación del año anterior, si aplica, y se suma el anticipo del año siguiente, si aplica.
                  br
                  br
                  | Además, se suman sanciones si el contribuyente incurrió en alguna falta que dé lugar a la sanción, teniendo presente que la sanción mínima en Bogotá corresponde a 7 UVT.
                  br
                  br
                  | Por último, se presenta un descuento por pronto pago, si el municipio lo establece; también los intereses de mora, si la declaración se presenta extemporánea, el contribuyente puede hacer un aporte voluntario.  
              .row.d-flex.justify-content-center.mb-4(data-aos="fade-up")
                .col-xl-1
                .col-xl-10
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 13.
                    span Secciones de liquidación privada y pago del formulario de industria y comercio
                  figure
                    img(src='@/assets/curso/tema3/img16.svg', alt='Fragmento del formulario de industria y comercio correspondiente a las secciones D. Liquidación privada y E.' style="max-width: 600px")
              ol.lista-ol--cuadro
                li.mb-4 
                  .lista-ol--cuadro__vineta
                    span 5
                  | Una quinta parte con las firmas de las personas obligadas, siendo este el contribuyente y el contador o revisor fiscal, según la obligación, seguido del número de identificación y tarjeta profesional para contador o revisor fiscal.
              .row.d-flex.justify-content-center.mb-4(data-aos="fade-up")
                .col-xl-1
                .col-xl-10
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 14.
                    span Sección de firmas del formulario de industria y comercio
                  figure
                    img(src='@/assets/curso/tema3/img17.svg', alt='Parte final del formulario de industria y comercio correspondiente a la sección F. Firmas. ' style="max-width: 600px")
              p Es de aclarar que la Secretaría de Hacienda Distrital SHD, no acepta declaraciones litográficas y la elaboración, firma y presentación de la declaración de ICA debe realizarse virtualmente, por medio de la oficina virtual del aplicativo de la SHD.

        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema3/img29.svg" style="max-width: 70px").m-auto
          .col
            h3 Formulario Retención de ICA en Bogotá:

    p.mb-4.espacios__moviles Se identifica con el código 131, donde se declaran las retenciones que practicó el contribuyente, siempre y cuando sea agente retenedor de ICA.

    .row.mb-4
      .col-lg-1
      .col-lg-10
        a.anexo.mb-4.ajuste__link(:href="obtenerLink('/downloads/Anexo2.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo</strong>. Instructivo Declaración y Pago ICA y ReteICA con firma electrónica a través de la Oficina Virtual
        .row.align-items-center.estilo_caja_11(data-aos="fade-up")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema3/img12.svg', alt='' style="max-width: 67px").m-auto
          .col-xl
            p.mb-0 El recibo oficial de pago de retenciones del impuesto de industria y comercio, avisos y tableros está compuesto por:
        .row.estilo_caja_13
          ol.lista-ol--cuadro
            li.mb-4 
              .lista-ol--cuadro__vineta
                span 1
              | En este formulario se identifica la información del contribuyente: nombres y apellidos o razón social; dirección de identificación, municipio o distrito, teléfono.
          .row.d-flex.justify-content-center.mb-4(data-aos="fade-up")
            .col-xl-1
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2
                h5 Figura 15.
                span Recibo oficial de pago del impuesto de industria y comercio en Bogotá
              figure
                img(src='@/assets/curso/tema3/img18.svg', alt='Imagen de un recibo oficial de pago emitido por la Alcaldía Mayor de Bogotá para retenciones del impuesto de industria y comercio, avisos y tableros. ' style="max-width: 600px")
          ol.lista-ol--cuadro
            li.mb-4 
              .lista-ol--cuadro__vineta
                span 2
              | Una segunda parte con la liquidación del impuesto, identificando la base de retención aproximada a miles, otro renglón con el valor del impuesto aproximado a miles, se le resta el valor de impuesto si hay alguna devolución, se suma un valor de sanción en el caso que aplique, teniendo presente que la sanción mínima en Bogotá por la declaración de retención de ICA corresponde a 10 UVT.
          .row.d-flex.justify-content-center.mb-4(data-aos="fade-up")
            .col-xl-1
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2
                h5 Figura 16.
                span Sección de liquidación y pago del recibo de retenciones de industria y comercio
              figure
                img(src='@/assets/curso/tema3/img19.svg', alt='Parte inferior del recibo de pago de retenciones del impuesto de industria y comercio en Bogotá. ' style="max-width: 600px")
          ol.lista-ol--cuadro
            li.mb-4 
              .lista-ol--cuadro__vineta
                span 3
              | Una tercera parte con la discriminación de las actividades que realiza el contribuyente, directamente. Una última y tercera parte con las firmas de las personas obligadas, siendo este el contribuyente y el contador o revisor fiscal, según la obligación del contribuyente, seguido del número de identificación y tarjeta profesional para contador o revisor fiscal.
          .row.d-flex.justify-content-center.mb-4(data-aos="fade-up")
            .col-xl-1
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2
                h5 Figura 17.
                span Sección de firmas del recibo de retenciones de industria y comercio
              figure
                img(src='@/assets/curso/tema3/img20.svg', alt='Parte final del recibo oficial de retenciones del impuesto de industria y comercio que incluye la sección E.' style="max-width: 600px")
          
        p.mb-4.mt-5 Es de aclarar que la Secretaría de Hacienda Distrital SHD, no acepta declaraciones litográficas y la elaboración, firma y presentación de la declaración de retención de ICA debe realizarse virtualmente, por medio de la oficina virtual del aplicativo de la SHD.
    
    .row.align-items-center
      .col-lg-2
      .col-lg-8
        .row.align-items-center.estilo_caja_14(data-aos="fade-up")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema3/img21.svg', alt='' style="max-width: 600px").m-auto
          .col-xl
            p.mb-0 Para ampliar el conocimiento sobre este tema, se puede revisar la Resolución 4056 del 1 de diciembre de 2017 (Legis, 2020, 30 de octubre). 

    Separador
    <!-- BLOQUE 4 -->
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Liquidación impuestos territoriales

    p.mb-4.espacios__moviles La liquidación de impuestos territoriales es una obligación que tienen las compañías si realizan actividades que les generen ingresos en algún municipio, según lo indica el hecho generador de dichos impuestos. En Colombia, las declaraciones principales de carácter territorial corresponden a Declaración de Industria, Comercio, Avisos y Tableros, y Declaración de Retención de Industria, Comercio, Avisos y Tableros.

    TabsC.color-acento-contenido(data-aos="fade-right")

      .py-3.py-md-4.ajuste-text-bloque4(titulo="Declaración de Industria y Comercio, Avisos y Tableros")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema3/img22.png', alt='').img400.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Declaración de Industria y Comercio, Avisos y Tableros
            p Las personas naturales o jurídicas del impuesto de industria y comercio que realicen cualquier actividad industrial, comercial o de servicios en la jurisdicción del Distrito Capital de Bogotá, directa o indirectamente, de forma permanente u ocasional, con o sin establecimiento de comercio, que le genere un incremento de ingreso y aumento de su patrimonio. Dicha declaración tiene una periodicidad en Bogotá D.C., dependiendo si el año anterior generó un impuesto a declarar por un valor igual o superior a 391 UVT; se presenta anual, y si es inferior a 391 UVT, es de forma bimestral; adicionalmente, la información debe presentarse aproximada a miles. La sanción mínima para este impuesto es de 7 UVT.
            p.mb-4 Con el fin de complementar la información del Impuesto de Industria y Comercio, Avisos y Tableros, se invita a explorar en el siguiente enlace:
            a.anexo.mb-4.ajuste__link(href="https://www.haciendabogota.gov.co/es/impuestos/impuesto-de-industria-y-comercio-ica" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <strong>Enlace web</strong>. Agendamiento digiturno

      .py-3.py-md-4.ajuste-text-bloque4(titulo="Declaración de retención de Industria, Comercio, Avisos y Tableros")
        .row.justify-content-center.align-items-center
          .col-lg-5.order-2.order-lg-1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema3/img23.png', alt='').img400.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4
            h4.txt--purpura.mb-4 Declaración de retención de Industria, Comercio, Avisos y Tableros
            p.mb-0 Esta declaración debe ser presentada por toda persona jurídica o natural que sea agente retenedor del impuesto de Industria y Comercio por las actividades comerciales, industriales y de servicios prestados en el municipio de Bogotá D.C. La periodicidad de la declaración de retención de industria y comercio es de forma bimestral, Adicionalmente, la información debe presentarse aproximada a miles. La sanción mínima para este impuesto es de 10 UVT, el formulario utilizado es el número 131.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
