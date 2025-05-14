<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Información exógena
    
    .row.mb-5.align-items-center
      .col-xl-auto
        figure.d-none.d-xl-block(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img1.svg', alt='' style="max-width: 300px").m-auto
      .col-xl
        p.mb-0.estilo_caja_15(data-aos="fade-left") Este tipo de información permite a la administración comparar la información suministrada por otros contribuyentes y agentes externos, facilitando la verificación de la confiabilidad y, de ser necesario, determinar inconsistencias que impliquen incumplimientos de las normas fiscales. (DIAN, 2004).
        .row.align-items-center
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="fade-up")
              img(src='@/assets/curso/tema4/img2.svg', alt='' style="max-width: 95px").m-auto
          .col-xl
            p La información exógena es la información que deben presentar las personas naturales y jurídicas ante la entidad de administración de impuestos DIAN, en donde reportan a los terceros con los cuales tuvieron algún tipo de relación comercial (Jacinto, et al. 2010).
        p Esta es una herramienta de fiscalización de la DIAN y los entes de control, por tal motivo, es fundamental su cumplimiento.
        p.mb-0 Es importante analizar la Resolución 000070 del 28 de octubre del 2019, que fue modificada con la Resolución 000027 del 25 de marzo del 2020; además, tener en cuenta la normatividad legal vigente para llevar a cabo el proceso de forma satisfactoria, en cumplimiento de los requerimientos legales.
    
    .row.mb-5.espacios__moviles
      .col-xl-1
      .col-xl-10
        .row.align-items-center.estilo_caja_16(data-aos="fade-up")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema4/img3.svg', alt='' style="max-width: 76px").m-auto
          .col-xl
            p.mb-0 Según la Resolución 000070 del 2019 en el título X, artículo 46, indica la cantidad, tipos de formatos y versiones a diligenciar, entre los cuales se encuentra:

    .row.mb-4.align-items-center
      .col-xl-7.estilo_caja_17(data-aos="fade-right")
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 1
            | <strong>1001</strong>: pagos y abonos en cuenta y retenciones.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 2
            | <strong>1003</strong>: retenciones en la fuente que le practicaron.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 3
            | <strong>1004</strong>: descuentos tributarios solicitados.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 4
            | <strong>1005</strong>: impuesto de IVA descontable.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 5
            | <strong>1006</strong>: impuesto de IVA regenerado.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 6
            | <strong>1007</strong>: ingresos recibidos.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 7
            | <strong>1008</strong>: saldos de cuentas por cobrar.
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 8
            | <strong>1009</strong>: saldo de cuentas por pagar.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 9
            | <strong>1011</strong>: información de declaraciones tributarias.
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 10
            | <strong>1012</strong>: información de declaraciones tributarias, acciones, inversiones en bonos, cuentas de ahorro y corrientes.
      .col-xl-5
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src='@/assets/curso/tema4/img4.svg', alt='' style="max-width: 500px").m-auto
    
    .row.mb-4.align-items-center
      .col-xl-5
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src='@/assets/curso/tema4/img5.svg', alt='' style="max-width: 500px").m-auto
      .col-xl-7.estilo_caja_17(data-aos="fade-left")
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 11
            | <strong>2275</strong>: ingresos No constitutivos de renta ni ganancia ocasional.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 12
            | <strong>2276</strong>: información certificado de ingresos y retenciones para personas naturales empleadas.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 13
            | <strong>2280</strong>: mujeres víctimas de la violencia.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 14
            | <strong>1647</strong>: ingresos recibidos para terceros.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 15
            | <strong>1010</strong>: información de socios, accionistas, cooperados.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 16
            | <strong>2279</strong>: código Único Institucional (CUIN) Entidades Públicas.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 17
            | <strong>2278</strong>: información de la compra de bonos electrónicos.
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 18
            | <strong>1056</strong>: pagos o abonos en cuenta por secretarios.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 19
            | <strong>5247</strong>: pagos y abonos en cuenta y retenciones practicadas.
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 20
            | <strong>5248</strong>: ingresos recibidos y devoluciones, rebajas y descuentos.

    .row.mb-4.align-items-center
      .col-xl-7.estilo_caja_17.ajuste___4(data-aos="fade-right")
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 21
            | <strong>5249</strong>: el valor del IVA descontable y el valor de IVA resultante por devoluciones en ventas anuladas, rescindidas o resueltas.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 22
            | <strong>5250</strong>: el valor del IVA generado, el valor del impuesto al consumo y el valor del IVA recuperado en devoluciones en compras anuladas, rescindidas o resueltas.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 23
            | <strong>5252</strong>: el valor del saldo de los pasivos a 31 de diciembre.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 24
            | <strong>5251</strong>: el valor del saldo de los deudores por concepto de créditos activos a 31 de diciembre.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 25
            | <strong>1019</strong>: movimiento en cuenta corriente y/o de ahorro.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 26
            | <strong>1020</strong>: información de inversiones en CDT.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 27
            | <strong>1021</strong>: información de fondos de inversión colectiva.
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 28
            | <strong>1023</strong>: consumos con tarjetas de crédito.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 29
            | <strong>1024</strong>: ventas con tarjetas de crédito.
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 30
            | <strong>1026</strong>: información de préstamos otorgados.
      .col-xl-5
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src='@/assets/curso/tema4/img6.svg', alt='' style="max-width: 500px").m-auto
    
    .row.mb-4.align-items-center
      .col-xl-5
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src='@/assets/curso/tema4/img7.svg', alt='' style="max-width: 500px").m-auto
      .col-xl-7.estilo_caja_17(data-aos="fade-left")
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 31
            | <strong>1034</strong>: información de estados financieros consolidados grupos económicos.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 32
            | <strong>1035</strong>: identificación subordinadas nacionales.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 33
            | <strong>1036</strong>: identificación subordinadas del exterior.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 34
            | <strong>1476</strong>: información de impuesto predial.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 35
            | <strong>1480</strong>: información de impuesto de vehículos.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 36
            | <strong>1481</strong>: impuesto de industria y comercio, avisos y tableros.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 37
            | <strong>1159</strong>: entidades públicas o privadas que celebren convenios de cooperación y asistencia técnica.
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 38
            | <strong>2273</strong>: sociedad administradora del depósito centralizado de valores DECEVAL.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 39
            | <strong>2277</strong>: aportes obligatorios de fondos de pensiones.
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 40
            | <strong>1022</strong>: aportes voluntarios de fondos de pensiones.  

    .row.mb-5.align-items-center
      .col-xl-7.estilo_caja_17.ajuste___3(data-aos="fade-right")
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 41
            | <strong>2274</strong>: información de fondos de cesantías
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 42
            | <strong>1041</strong>: información a suministrar por las bolsas de valores.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 43
            | <strong>1042</strong>: información a suministrar por los comisionistas de bolsa.
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span 44
            | <strong>1043</strong>: fideicomisos administrados (patrimonios autónomos).
      .col-xl-5
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src='@/assets/curso/tema4/img8.svg', alt='' style="max-width: 500px").m-auto
    
    .row.align-items-center.estilo_caja_18.espacios__moviles(data-aos="fade-right")
      .col-xl
        p.mb-4 Teniendo en cuenta que la Resolución 000027 del 25 de marzo del 2020 indica las modificaciones del cronograma establecido en la Resolución 000070 del 28 de octubre de 2019, en su artículo 45, generando un nuevo cronograma en la presentación de la información, dividiendo a los responsables en dos (2) grupos, Grandes contribuyentes y Personas jurídicas y Naturales (DIAN, 2020).
        p.mb-4 Para entregar esta información, es preferible usar los documentos aportados por la DIAN en su página, conocidos como prevalidadores, facilitando el proceso de diligenciamiento y de entrega de la información. Este es el enlace: 
        a.anexo.mb-4.ajuste__link(href="https://www.dian.gov.co/impuestos/sociedades/ExogenaTributaria/Prevalidadores/Paginas/default.aspx" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <strong>Enlace web</strong>. Agendamiento digiturno
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src='@/assets/curso/tema4/img9.svg', alt='' style="max-width: 400px").m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
