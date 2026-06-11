<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Alteración y contaminación de la carne
    p.mb-5 La alteración y contaminación de la carne afectan su calidad e inocuidad, debido a microorganismos, manejo inadecuado y condiciones ambientales que favorecen su deterioro.
    .bg-1
      .px-5
        #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 8.1 Principales fuentes tóxicas
        .row.justify-content-center.align-items-center
          .col-xl.mb-4.mb-lg-0
            p Las principales fuentes son:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Exposición a nitrosaminas en fumadores, siendo aproximadamente el doble en comparación con personas que no fuman. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Presencia de nitrosaminas asociada a la dieta y hábitos de consumo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Formación de nitrosaminas a partir de nitritos y nitratos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Uso de aditivos como ácido ascórbico (E-330) para reducir su formación. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Empleo de tocoferoles (E-603 y derivados) como inhibidores en medios acuosos o grasos.
          .col-xl-auto.col-md-9(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/img82.png', alt="" ).m-auto
        Separador
        #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 8.2 Agentes biológicos
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/img83.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La contaminación biológica es causada por las toxinas de patógenos como hongos, bacterias, virus y parásitos; estos microorganismos pueden descomponer la carne y causar enfermedades al ser humano.
    Separador
    #t_8_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.3 Microorganismos alterantes en las carnes frescas
    .row.align-items-center.mb-3
      .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img7.svg', alt='').m-auto
      .col-xl
        p.mb-0 Los microorganismos alterantes en carnes frescas afectan su calidad, generando olores, cambios de color, viscosidad y deterioro, especialmente bajo condiciones inadecuadas de almacenamiento y manejo.
    p.mb-5 En el siguiente video se profundizará sobre la alteración microbiana en carnes frescas.
    figure(data-aos="zoom-in")
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/QNNTLmKHjLY?si=Hx84YfA5HNlVytb4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") #[b Video]. Alteración microbiana en carnes frescas.
    Separador
    #t_8_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.4 Microorganismos en las carnes empacadas al vacío o en atmósferas modificadas
    p.mb-5 Los microorganismos en carnes empacadas al vacío o en atmósferas modificadas dependen del ambiente, influyendo en su conservación, calidad e inocuidad durante el almacenamiento. A continuación, se presentarán dos aspectos fundamentales.
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Microorganismos y alteración en carne al vacío")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img84.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Microorganismos y alteración en carne al vacío
            p.mb-0 En carnes empacadas al vacío y refrigeradas predominan lactobacilos y #[i Brochothrix thermosphacta], especialmente en pH cercano a 6. En pH altos se generan olores sulfurosos y pútridos, y puede presentarse coloración verdosa por sulfohemoglobina.
      .py-3.py-md-4(titulo="Efecto CO₂ y condiciones anaeróbicas")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img85.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Efecto CO₂ y condiciones anaeróbicas
            p.mb-0 En condiciones anaeróbicas crecen microorganismos psicrófilos. El CO₂ favorece bacterias lácticas y prolonga la vida útil; si es insuficiente, aparecen olores ácidos y pútridos.
    Separador
    #t_8_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.5 Microorganismos en las carnes congeladas
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0
        .caja-intro(data-aos="fade-right")
          p.mb-0 La congelación disminuye el número de microorganismos presentes en la carne. Como las bacterias gramnegativas, los microorganismos como <i>Campyrobacter</i> y <i>Clostridium perfringens</i> son sensibles al frío, pero algunos agentes patógenos son resistentes, como el caso de la <i>Salmonella</i> y el <i>E.coli</i>. A temperaturas de congelación de -10 °C o menores, la carne se puede alterar por hongos, los cuales causan manchas negras.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img86.png', alt='').m-auto
    Separador
    #t_8_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.6 Microorganismos alterantes de carnes curadas
    .caja-tema2.mb-0(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-0 La alteración en carnes curadas puede ocurrir durante la elaboración si la actividad de agua y el pH no son suficientemente bajos. El crecimiento de mohos afecta el aspecto y el aroma, y puede controlarse con envasado al vacío o en atmósferas modificadas. Además, en jamones crudos, bacterias como #[i Clostridium botulinum] y enterobacterias pueden desarrollarse si la sal y la temperatura no se controlan adecuadamente.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img87.png', alt='').m-auto
    Separador
    #t_8_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.7 Alteración de las carnes secas
    p.mb-0 La estabilidad de las carnes secas depende de la cantidad de agua disponible en el producto. La absorción de humedad favorece el crecimiento de mohos y levaduras. Para evitarlo, se reduce el contenido de agua mediante secado y se mantiene bajo mediante envasado al vacío.

</template>

<script>
export default {
  name: 'Tema8',
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
