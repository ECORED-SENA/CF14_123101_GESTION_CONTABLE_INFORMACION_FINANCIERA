<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.fondo_img
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.ajuste___1(data-aos="fade-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/intro/img2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 En desarrollo del contenido, a continuación se presenta de forma práctica la elaboración y presentación de las declaraciones tributarias correspondientes a impuestos nacionales y municipales, así como, las generalidades acerca de los medios magnéticos nacionales, teniendo en cuenta la definición, aplicación y obligación que tienen las personas naturales y jurídicas para presentar esta obligación, puesto que es el recurso principal que tiene la entidad estatal para validar los movimientos de cada persona y manejar una efectiva política fiscal.

</template>

<script>
export default {
  name: 'Introduccion',
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
