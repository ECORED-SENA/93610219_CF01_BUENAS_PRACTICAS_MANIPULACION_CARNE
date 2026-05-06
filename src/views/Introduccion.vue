<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-intro.mb-3(data-aos="fade-right")
          p.mb-0 La carne constituye uno de los alimentos de mayor importancia en la dieta humana, debido a su alto valor nutricional y a su aporte significativo de proteínas, vitaminas y minerales esenciales. Su producción, transformación y comercialización hacen parte de una cadena productiva que impacta directamente la seguridad alimentaria, la salud pública y la economía.
        .row.align-items-center
          .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/intro/img2.svg', alt='').m-auto
          .col-xl
            p.mb-0 En este contexto, el presente componente formativo aborda las generalidades de la carne, desde el origen de la materia prima hasta los factores que influyen en su calidad e inocuidad. Se analizan aspectos fundamentales como la producción animal, la transformación del músculo a carne, su composición química y sus características sensoriales, así como los agentes físicos, químicos y biológicos que pueden alterarla.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img1.png', alt='').m-auto
    .caja-intro-1.mb-0(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/intro/img3.png', alt='').m-auto
        .col-xl
          p.mb-0 Asimismo, se enfatiza en la importancia de aplicar las Buenas Prácticas de Manipulación (BPM) y la normatividad vigente, con el fin de garantizar alimentos seguros, de calidad y aptos para el consumo humano. De esta manera, el aprendiz desarrollará competencias que le permitirán identificar riesgos, prevenir la contaminación y contribuir al manejo adecuado de productos cárnicos dentro del sector productivo.

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
