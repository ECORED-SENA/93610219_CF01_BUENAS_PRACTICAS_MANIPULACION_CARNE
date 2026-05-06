<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Residuos en carne
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img77.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los residuos en la carne son sustancias químicas provenientes de medicamentos, hormonas o contaminantes, que pueden afectar la inocuidad, calidad y seguridad alimentaria del consumidor. 
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1 Residuos productos farmacológicos
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0
        .caja-intro(data-aos="fade-right")
          p.mb-0 Son sustancias presentes en la carne provenientes de animales tratados con fármacos terapéuticos, preventivos o promotores del crecimiento, que pueden encontrarse en tejidos, leche, orina y heces. Su uso adecuado reduce el riesgo, mientras que dosis inadecuadas lo incrementan. Los antibióticos pueden generar reacciones alérgicas y resistencia bacteriana, al alterar la flora microbiana y favorecer la transferencia genética de resistencia a bacterias humanas.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img78.png', alt='').m-auto
    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.2 Anabolizantes o promotores del crecimiento
    p.mb-5 Son sustancias que favorecen la síntesis proteica y aumentan el crecimiento entre 5% y 20%. Las principales son:
    .row.justify-content-center.mb-0
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img79.jpg', alt="" ).m-auto
            h4.text-center Anabolizantes naturales
            p.mb-0.text-center Estradiol, progesterona y testosterona.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img80.jpg', alt="" ).m-auto
            h4.text-center Anabolizantes sintéticos
            p.mb-0.text-center Trembolona, zeranol y estilbenos.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img81.jpg', alt="" ).m-auto
            h4.text-center Riesgos
            p.mb-0.text-center Efectos hormonales, cancerígenos y acumulativos a largo plazo.
    Separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.3 Nitrosaminas
    p.mb-5 Las nitrosaminas son compuestos químicos que pueden formarse en productos cárnicos, especialmente curados, y representan un riesgo para la salud por su potencial cancerígeno. Los riesgos y beneficios son:
    .tarjeta--container.row.justify-content-center.text-white.mb-0.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img41.svg', alt='' style="max-width: 100px")
          .col-xl
            h2 Riesgos
        p.mb-0 La metahemoglobinemia es un riesgo por exposición a nitritos que reduce el transporte de oxígeno en la sangre, afectando especialmente a niños y manipuladores de alimentos.
      .col-xl-6.col-md-10.tarjeta.color-primario.text-white.p-5
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img41.svg', alt='' style="max-width: 100px")
          .col-xl
            h2 Beneficios
        p.mb-0 Los nitritos inhiben #[i Clostridium botulinum] y estabilizan el color de la carne mediante la formación de nitrosomioglobina. Sin embargo, su uso inadecuado puede causar intoxicaciones, por lo que debe aplicarse bajo control y regulación estricta.

</template>

<script>
export default {
  name: 'Tema7',
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
