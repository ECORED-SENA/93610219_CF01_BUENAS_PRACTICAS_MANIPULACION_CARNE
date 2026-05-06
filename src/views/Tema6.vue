<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Alteración de la carne
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .row.align-items-center.mb-3
          .col-xl
            p.mb-0 La alteración de la carne son cambios indeseables que afectan su calidad e inocuidad, evidenciados por malos olores, cambios de color, textura viscosa o presencia de gases. Estas son generalidades sobre las causas de la alternación de la carne.
          .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/intro/img2.svg', alt='').m-auto
        .caja-intro(data-aos="fade-right")
          p #[b Causas de la ateración de la carne]
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img70.svg', alt='').m-auto
            .col-xl
              p.mb-0 La carne es altamente perecedera por su riqueza en nutrientes, lo que favorece el crecimiento de microorganismos y su fácil contaminación. Su alteración puede originarse por factores endógenos, exógenos, físicos, químicos y biológicos, así como por una manipulación inadecuada.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img71.png', alt='').m-auto
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.1 Agentes que alteran la carne
    p.mb-5 La alteración de la carne es causada por agentes exógenos, endógenos, físicos, químicos y biológicos que, de forma independiente o combinada, afectan su calidad e inocuidad. Los principales agentes son:
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Agentes exógenos
                p.mb-0 Los agentes exógenos alteran la carne al desarrollarse en su superficie, modificando sus características según condiciones como temperatura y humedad. Provocan mucosidad, cambios de color por oxidación y alteraciones en la grasa debido a la acción microbiana.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img72.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Agentes endógenos
                p.mb-0 Los agentes endógenos se originan dentro de la carne por acción microbiana, alterando su estructura y composición, y generando malos olores, sabores y putrefacción. La contaminación puede presentarse a lo largo de toda la cadena productiva, desde la cría hasta la venta.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img73.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Agentes físicos
                p.mb-0 La luz solar o artificial modifica el aspecto externo de la carne como el color y puede desnaturalizar nutrientes. Las radiaciones alteran la composición química. La temperatura inadecuada favorece la descomposición.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img74.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Agentes químicos
                p.mb-0 La carne puede contaminarse desde la producción primaria por peligros químicos como medicamentos, hormonas, promotores de crecimiento, dioxinas, plaguicidas, metales pesados y nitrosaminas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img75.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Microorganismos alterantes según tipo de carne
    p.mb-5 Los microorganismos alterantes varían según el tipo de carne y las condiciones de almacenamiento y manejo, afectando su calidad, inocuidad, vida útil y características sensoriales. A continuación, se analizará su impacto en los diferentes tipos de carne.
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img76.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Carnes frescas").ajuste-cajaAcordion
            p.mb-3 Las carnes de res, cerdo y cordero se alteran de forma similar, siendo susceptibles a contaminación durante el sacrificio. Los principales microorganismos provienen de la piel, intestinos y ambiente. En refrigeración predominan bacterias psicrófilas, generando olores, viscosidad y deterioro. La carne molida presenta mayor riesgo de contaminación.
          .row(titulo="Carnes empacadas al vacío o atmósferas modificadas").ajuste-cajaAcordion
            p.mb-3 En estas condiciones predominan lactobacilos y Brochothrix thermosphacta, generando olores ácidos, sulfurosos o pútridos. Puede presentarse coloración verde por formación de sulfohemoglobina. Además, ambientes con dióxido de carbono favorecen bacterias lácticas y prolongan la vida útil de la carne.
          .row(titulo="Carnes congeladas").ajuste-cajaAcordion
            p.mb-3 La congelación reduce la actividad de los microorganismos, pero no los elimina completamente, ya que algunos patógenos como Salmonella y E. coli pueden resistir. Además, a temperaturas cercanas a -10 °C pueden desarrollarse hongos que provocan manchas en la carne.
          .row(titulo="Carnes curadas").ajuste-cajaAcordion
            p.mb-3 La alteración de la carne puede presentarse si no se controlan adecuadamente factores como la sal, el pH y la temperatura, lo que favorece la aparición de microorganismos como Clostridium botulinum. Además, el crecimiento de mohos genera mal aspecto y olores desagradables.
          .row(titulo="Carnes secas").ajuste-cajaAcordion
            p.mb-3 La alteración en estos productos depende de la actividad de agua, ya que la presencia de humedad favorece el desarrollo de mohos y levaduras. Para controlarlo, se aplican procesos de secado que reducen la aw (≈ 0,7–0,8) y el envasado al vacío.

</template>

<script>
export default {
  name: 'Tema6',
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
