<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Plataforma Dirección de Impuestos y Aduanas Nacionales DIAN, liquidación de formularios

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales (DIAN) tiene como propósito coadyuvar a garantizar la seguridad fiscal del Estado colombiano, haciendo uso de sus facultades para proteger el orden público económico nacional, lo anterior, a través de la administración y control de las obligaciones tributarias bajo el cumplimiento que estos lo indican; para este proceso se hace uso de la plataforma digital dispuesta para ello.

    <!-- BLOQUE 1 -->
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Concepto

    p.mb-5.espacios__moviles Es necesario conocer las diferentes plataformas que se utilizan para la presentación de las declaraciones tributarias de carácter nacional. Teniendo en cuenta que esta es la era de las Tecnologías de la Información y Comunicación (TIC), se validará la utilización de estas herramientas, que permiten en tiempo real la elaboración y presentación de impuestos a través de los sistemas informáticos. Para la comprensión de este proceso es necesario tener presente el siguiente concepto: 

    .row.align-items-center
      .col-xl
        h3.titulo-tercero Plataforma digital, según el portal Rankia.co
        .bloque-texto-b.color-primario.mb-4(data-aos="fade-right")
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-0 Son todos aquellos sitios de internet que almacenan información de una empresa, y a través de la cual los usuarios pueden acceder a cuentas personales y detalles sobre la empresa. Las plataformas digitales son ejecutadas por programas o aplicaciones cuyo contenido es ejecutable en determinados sistemas operativos, ya sean contenidos visuales, de texto, audios, videos, simulaciones, etc. 
            i.fas.fa-quote-right
        p.mb-0 La DIAN tiene una página web donde se puede encontrar aplicaciones y contenidos que permiten a los usuarios, a través de una interfaz intuitiva, una interacción amigable y fácil de entender con respecto a los servicios que presta. En dicha página web se puede acceder a simuladores que permiten liquidar impuestos, realizar solicitudes como autorizaciones de facturación, modificación de RUT, entre otros.
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src='@/assets/curso/tema2/img2.svg', alt='' style="max-width: 500px").m-auto

    Separador
    <!-- BLOQUE 2 -->
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Servicios en línea
    
    .row.fondo_color_2
      .px-5
        p.mb-4.espacios__moviles Apreciados aprendices, en esta ocasión se explorará la página web de la Dirección de Impuestos y Aduanas Nacionales DIAN. La página fue diseñada con el fin de ofrecer diferentes servicios en línea, que permita a los usuarios realizar diferentes trámites sin necesidad de dirigirse a las instalaciones físicas de la entidad; para esto se ingresa a través del siguiente enlace: 
        a.anexo.mb-5.ajuste__link.ajuste__link_1(href="https://www.dian.gov.co/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <strong>Enlace web</strong>. Dirección de Impuestos y Aduanas Nacionales DIAN
        
        p.mb-4.espacios__moviles Para apropiar el conocimiento de este proceso es necesario la comprensión del siguiente término:

        .row.align-items-center.mb-5.estilo_caja_7(data-aos="fade-up")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema2/img4.svg', alt='' style="max-width: 140px").m-auto
          .col-xl
            p.mb-0 <strong>Servicios en línea</strong>: corresponde a aquellos productos que pueden prestar las diferentes compañías, tanto públicas como privadas, a través de internet, como trámites, certificaciones, autorizaciones o licencias, entre otros; accediendo a datos e información de los usuarios, los cuales se realizan de forma inmediata por medio de las aplicaciones informáticas, que en tiempo real permiten el acceso y respuesta al servicio que presta la entidad, minimizando tiempos de ejecución. En Colombia, estos servicios se prestan bajo la estrategia de gobierno en línea desde 2008 (MinTIC, 2020).

        .row.fondo-slider.mb-5
          .ajuste-slider(data-aos="fade-up")
            SlyderA(tipo="b")
              .row.h-100.justify-content-center.align-items-center
                .col-lg-6.mb-4.col-xs-12
                  p.mb-0 En los servicios en línea de la Dirección de Impuestos y Aduanas Nacionales se encuentran los siguientes servicios tributarios y cambiarios en los que las personas naturales o jurídicas que estén inscritas en el RUT pueden crear un usuario, con el cual se tiene acceso a los siguientes servicios: presentación de las diferentes declaraciones nacionales, actualización del RUT, habilitación de la resolución de facturación y cargue de información exógena, entre otros.
                .col-lg-6
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 1.
                    span Página de servicios en línea de la DIAN
                  figure
                    img(src='@/assets/curso/tema2/img6.svg', alt='Captura de pantalla del portal web de la DIAN con un menú de servicios organizados en recuadros.' style="max-width: 600px").m-auto

              .row.h-100.justify-content-center.align-items-center
                .col-lg-6.mb-4.col-xs-12
                  p Estimados aprendices, en esta ventana se puede visualizar el ingreso a la plataforma de la DIAN. Si ya se tiene usuario, se ingresa con los datos de la persona natural o jurídica y seguidamente se digita contraseña creada. 
                  p.mb-0 Se debe recordar que si se ingresa como persona jurídica, se debe tener el NIT y la identificación del tercero asociado a la entidad, que necesariamente debe ser el representante legal de la misma o quienes tengan la obligación de firmar las declaraciones. Si es una persona natural, se ingresa haciendo clic en “a nombre propio”. Pero si no se tiene creado usuario, se debe crearlo a través de la opción de “Habilitar Cuenta”.
                .col-lg-6
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 2.
                    span Página de inicio de sesión DIAN - Servicios en Línea MUISCA
                  figure
                    img(src='@/assets/curso/tema2/img7.svg', alt='Formulario de inicio de sesión para usuarios registrados en los servicios en línea MUISCA de la DIAN, con campos para tipo de usuario, número de documento, tipo de documento, contraseña y botón para ingresar.' style="max-width: 600px").m-auto
      
        .row.mb-5.align-items-center.estilo_caja_8(data-aos="fade-up")
          p.mb-4 En el menú de la plataforma digital de la DIAN se encuentran las diferentes opciones de servicios que presta en línea.
          .col-xl-auto
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 3.
              span Accesos rápidos y servicios destacados de la DIAN
            figure
              img(src='@/assets/curso/tema2/img8.svg', alt='Panel con tres secciones: destacados del mes, alertas urgentes y accesos rápidos a trámites como RUT e impuestos.' style="max-width: 350px")
          .col-xl.espacios__moviles_2
            .row.separador___1.align-items-center
              .col-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/tema2/img9.svg', alt='' style="max-width: 86px").m-auto
              .col
                p.mb-0 <strong>Diligenciar/Presentar</strong>: por medio de esta opción los usuarios de la plataforma pueden acceder a los formularios de los diferentes impuestos nacionales, diligenciarlos y presentarlos.
            .row.separador___1.align-items-center.mt-3
              .col-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/tema2/img10.svg', alt='' style="max-width: 86px").m-auto
              .col
                p.mb-0 <strong>Numeración de facturación</strong>: por medio de esta opción los usuarios pueden solicitar la autorización o habilitación de la numeración de facturación según obligaciones.
            .row.align-items-center.mt-3
              .col-auto
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/tema2/img11.svg', alt='' style="max-width: 86px").m-auto
              .col
                p.mb-0 <strong>Registro Único Tributario (RUT): </strong>: en esta opción se pueden actualizar (datos básicos, actividades), consultar el RUT e imprimir copia de este.

        .row.fondo-slider
          .ajuste-slider(data-aos="fade-up")
            SlyderA(tipo="b")
              .row.h-100.justify-content-center.align-items-center
                .col-lg-6.mb-4.col-xs-12
                  p Estos servicios se prestan sin necesidad de ir a la oficina física de la Dirección de Impuestos y Aduanas Nacionales. (DIAN, 2020).
                  p.mb-0 A continuación se encuentra otro servicio en línea que tiene la DIAN: el agendamiento de citas. Allí, por medio de la selección en el calendario, se puede elegir el día y la hora en la cual se asistirá a las oficinas físicas de la DIAN, para realizar trámites que no se pueden hacer virtualmente. 
                .col-lg-6
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 4.
                    span Panel de servicios de la DIAN en línea
                  figure
                    img(src='@/assets/curso/tema2/img12.svg', alt='Panel de opciones con accesos a servicios de la DIAN, se resalta el bloque de agendamiento de citas, que permite programar, modificar, consultar o cancelar citas.' style="max-width: 600px").m-auto

              .row.h-100.justify-content-center.align-items-center
                .col-lg-6.mb-4.col-xs-12
                  p Se puede acceder a través del siguiente enlace:
                  a.anexo.mb-4.ajuste__link(href="https://agendamientodigiturno.dian.gov.co/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p <strong>Enlace web</strong>. Agendamiento digiturno
                  p.mb-0 También, en este espacio se encuentra el enlace directo para inscribirse al Registro Único Tributario (RUT), donde el usuario ingresa a la opción requerida y sigue los pasos que se indican a medida que avanza en la plataforma. 
                .col-lg-6
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 5.
                    span Página de inicio para agendamiento de citas en la DIAN
                  figure
                    img(src='@/assets/curso/tema2/img13.svg', alt='Pantalla de bienvenida al sistema de agenda de citas de la DIAN, con instrucciones para solicitar citas relacionadas con inscripción o actualización del RUT' style="max-width: 600px").m-auto

    Separador
    <!-- BLOQUE 3 -->
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Instrucciones
    
    .fondo_color_3
      .px-5
        .row.fondo-slider
          .ajuste-slider(data-aos="fade-up")
            SlyderA(tipo="b")
              .row.h-100.justify-content-center.align-items-center
                .col-lg-6.mb-4.col-xs-12
                  p.mb-0 A través del portal de la DIAN se observará los instructivos establecidos por la entidad, para el diligenciamiento de los formularios que están disponibles para la presentación de los impuestos, tanto tributarios como aduaneros. Se debe tener presente que un instructivo hace referencia a una guía que permite tener el paso a paso para la correcta elaboración o diligenciamiento de trámites que sean requeridos por cada entidad, en el caso de Dirección de Impuestos y Aduanas Nacionales, como ya se mencionó los formularios de impuestos.
                .col-lg-6
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 6.
                    span Portal web de servicios DIAN
                  figure
                    img(src='@/assets/curso/tema2/img15.svg', alt='Página principal del portal de servicios de la DIAN con secciones organizadas en recuadros. El recuadro "Transaccional" resalta la opción para usuarios no registrados de diligenciar formularios.' style="max-width: 600px").m-auto

              .row.h-100.justify-content-center.align-items-center
                .col-lg-6.mb-4.col-xs-12
                  p.mb-0 Al seguir cualquier enlace, se muestra el instructivo y se puede visualizar el formulario correspondiente junto con las explicaciones de cada uno de los renglones, según el requerimiento establecido en cada formato.
                .col-lg-6
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 7.
                    span Página de formularios e instructivos de la DIAN
                  figure
                    img(src='@/assets/curso/tema2/img16.svg', alt='Página del sitio web de la DIAN de Formularios e instructivos.' style="max-width: 600px").m-auto

        Separador
        <!-- BLOQUE 4 -->
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Aplicativos e impuestos

        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img17.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Para cada impuesto en que se tenga obligación de declarar, la DIAN ha generado aplicativos para el cargue de la información, lo que facilita el proceso de declaración, de esta forma se realizan búsquedas, diligenciamiento y entrega de la información más fácil.
        
    Separador
    <!-- BLOQUE 5 -->
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Liquidación impuestos nacionales
    
    .row.fondo_color_4
      .px-5
        p.mb-5.espacios__moviles La liquidación de impuestos nacionales es una obligación que tienen las compañías, según el cumplimiento de estas con el hecho generador de cada uno de los impuestos. En Colombia, las declaraciones principales que un ente económico debe presentar corresponden a: 
        .row.mb-5
          .col-xl.espacios__moviles
            TabsA.color-acento-botones.mb-4(data-aos="fade-up")
              .tarjeta.color-acento-botones--borde.p-4(titulo="Retención en la Fuente")
                h4 Declaración de Retención en la Fuente:
                p.mb-0 Las personas naturales o jurídicas que sean agentes retenedores de renta están en la obligación de presentar la declaración de retención en la fuente, siempre y cuando hubieran practicado retenciones, según lo establece la norma vigente. Se debe aclarar, que si no se realizaron las retenciones, la entidad no tiene la obligación de presentar declaración en ceros, como se establece en el ART 606 del Estatuto Tributario parágrafo 2. La periodicidad de presentación de dicha declaración es mensual y se debe presentar en el formulario 350, según lo establecido por la Dirección de Impuestos y Aduanas Nacionales.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Impuesto sobre las Ventas")
                h4 Declaración de Impuesto sobre las Ventas - IVA:
                p.mb-0 Esta declaración debe ser presentada por toda persona jurídica o natural que sea responsables del impuesto a las ventas, incluidos los exportadores, y si no realiza operaciones sometidas al impuesto, no se debe presentar dicha declaración; esto lo establece el ART 601 del estatuto tributario. El periodo gravable del impuesto a las ventas, según el Artículo 600 del E.T, corresponde de forma bimestral, si a 31 de diciembre del año inmediatamente anterior, son iguales o superiores a 92.000 UVT, y es cuatrimestral si es inferior a 92.000 UVT. Es de aclarar, que si la entidad está empezando sus operaciones, el periodo es bimestral; adicional, el formulario dispuesto por la Dirección de Impuestos y Aduanas Nacionales es el Número 300.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Impuesto al Consumo")
                h4 Declaración de Impuesto Nacional al Consumo:
                p.m-0 Esta declaración debe ser presentada por toda persona jurídica o natural que sea responsable del impuesto nacional al Consumo, según lo establece el Artículo 512-1 Del estatuto tributario. El periodo gravable del impuesto nacional al consumo, según el Artículo 512-1 del E.T parágrafo 1, corresponde de forma bimestral; para este impuesto no procede un impuesto descontable; adicionalmente, el formulario dispuesto por la Dirección de Impuestos y Aduanas Nacionales es el Número 310.  También se debe tener en cuenta que están excluidos del Impuesto Nacional al Consumo el departamento del Amazonas y el Archipiélago de San Andrés, Providencia y Santa Catalina, con excepción a lo dispuesto en el ART 512-7 del Estatuto Tributario.
              .tarjeta.color-acento-botones--borde.p-4(titulo="Complementarios")
                h4 Declaración de renta y complementarios o de ingresos y patrimonio para personas jurídicas y asimiladas y personas naturales y asimiladas no residentes y sucesiones ilíquidas de causantes no residentes:
                p.m-0 Esta declaración debe ser presentada por toda persona jurídica, por todos los ingresos susceptibles de incrementar el patrimonio o persona natural o sucesiones ilíquidas no residentes que cumplan los requisitos estipulados en el ART 592 E.T y 1.6.1.13.2.7 del decreto 1625 de 2016, teniendo en cuenta la base de renta líquida gravable que establece tomar los ingresos netos y a estos restarles los costos realizados, imputables cuando sea el caso, posteriormente se le restan las deducciones (gastos) realizadas , con lo cual se obtiene la renta líquida, la cual es la base para la aplicación de la tarifa del impuesto. El periodo gravable del impuesto de Renta y complementarios es anual y el formulario establecido por la Dirección de Impuestos y Aduanas Nacionales es el Número 110.
            
        p.mb-5.espacios__moviles El formulario 350 para Declaración de Retención en la fuente está compuesto por tres (3) partes principales. En esta presentación habrá un enfoque la primera parte, que corresponde a la Información del declarante, donde se encontrarán los siguientes numerales:

        .video.mb-5(data-aos="fade-up")
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Nu0so84PvI8" title="Formulario 350 Retencion en la fuente" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        p.mb-5 El formulario 300 para Declaración del Impuesto sobre las Ventas, está compuesto por tres (3) partes principales; en esta presentación habrá un énfasis en la primera parte, que corresponde a Información del Declarante, donde se encuentran los siguientes numerales:

        .video.mb-5(data-aos="fade-up")
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rNQHO71sACo" title="Formulario 300 Declaracion de IVA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        p.mb-5 El formulario 310 para Declaración Impuesto Nacional al Consumo está dividido en tres (3) partes principales. En esta presentación habrá un énfasis en la primera parte, que corresponde a información del declarante, donde se encuentran los siguientes numerales:

        .video(data-aos="fade-right")
          <iframe width="560" height="315" src="https://www.youtube.com/embed/NLDzyouNUWE" title="Formulario 310 Declaración de impuesto nacional al consumo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</template>

<script>
export default {
  name: 'Tema2',
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
