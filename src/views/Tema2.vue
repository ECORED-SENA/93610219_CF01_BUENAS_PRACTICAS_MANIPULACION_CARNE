<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Transformación del músculo a carne
    .caja-tema2.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-0 La carne resulta de cambios físicos, químicos y bioquímicos del músculo tras el sacrificio, conocidos como transformación post-mortem, que determinan su calidad. Al cesar el suministro de oxígeno, se activa un metabolismo anaeróbico que obtiene energía del glucógeno mediante la glucólisis.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img23.png', alt='').m-auto
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Cambios principales en la transformación
    p.mb-5 Tras el sacrificio, ocurre glucólisis anaeróbica, descenso del pH, rigor mortis y maduración, procesos que afectan textura, color, sabor y calidad final de la carne.
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Glucólisis anaeróbica")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img24.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Glucólisis anaeróbica
            p.mb-0 El glucógeno se transforma en ácido láctico, generando energía limitada (ATP) y provocando la acidificación del músculo.
      .py-3.py-md-4(titulo="Descenso del pH")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img25.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Descenso del pH
            p El pH pasa de ~7.0 a valores entre 5.5 y 5.8. Este cambio es clave porque: 
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Inhibe parcialmente el crecimiento microbiano. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Define el color y la estabilidad de la carne.
      .py-3.py-md-4(titulo="Rigor mortis")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img26.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Rigor mortis
            p Se produce cuando se agota el ATP, generando la unión permanente entre actina y miosina. 
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | El músculo se vuelve rígido. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Disminuye la capacidad de retención de agua.
      .py-3.py-md-4(titulo="Maduración o ablandamiento")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img27.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Maduración o ablandamiento
            p Enzimas naturales (como calpaínas y catepsinas) degradan las fibras musculares. 
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mejora la terneza.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Se desarrollan compuestos de sabor y aroma.
    .bg-1
      .px-5
        Separador
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Etapas del proceso post-mortem (visión didáctica)
        .row.justify-content-center.align-items-center
          .col-xl.mb-4.mb-lg-0
            p Las etapas del proceso son:
            ol.lista-ol--cuadro.mb-0
              li
                .lista-ol--cuadro__vineta
                  span 1
                | 
                p.mb-0 #[b Fase inicial (pre-rigor)]: El músculo aún es flexible, con pH alto. 
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | 
                p.mb-0 #[b Rigor mortis]: Se presenta rigidez máxima por falta de energía. 
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | 
                p.mb-0 #[b Maduración]: La carne se ablanda progresivamente y mejora su calidad sensorial. 
          .col-xl-auto.col-md-9(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/img28.png', alt="" ).m-auto
        Separador
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Factores que influyen en la transformación
        .row.justify-content-center.align-items-center
          .col-xl.mb-4.mb-lg-0
            .caja-intro.ajuste-caja-intro(data-aos="flip-up")
              p Estos son los factores que influyeron en la transformación:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Estrés del animal antes del sacrificio.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Reserva de glucógeno muscular.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Temperatura de almacenamiento.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Manejo en la planta de beneficio.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Velocidad de enfriamiento (cadena de frío).
              p.mb-0 Un mal manejo puede alterar el proceso normal.
          .col-xl-auto.col-md-9(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/img29.png', alt="" ).m-auto
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Impacto en la calidad de la carne
    p.mb-5 Los cambios post-mortem determinan características clave y alteraciones comunes, tales como:
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img30.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Características sensoriales").ajuste-cajaAcordion
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Color:] rojo brillante, pálido u oscuro.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Textura:] firme o blanda.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Jugosidad:] capacidad de retener agua.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Sabor y aroma:] desarrollo durante la maduración.
          .row(titulo="Características químicas").ajuste-cajaAcordion
            p.mb-3 Se relacionan con el pH, el contenido de agua y la estabilidad del producto, factores clave para su conservación y seguridad.
          .row(titulo="Alteraciones comunes").ajuste-cajaAcordion
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Carne PSE (Pálida, Suave y Exudativa)]: Caída rápida del pH con alta temperatura → carne pálida y con pérdida de agua. 
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Carne DFD (Oscura, Firme y Seca)]: Bajo glucógeno → pH alto → carne oscura y menos conservable.
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Aplicación de buenas prácticas de manipulación (BPM)
    .row.justify-content-center.align-items-center
      .col-xl.mb-4.mb-lg-0
        .caja-intro.ajuste-caja-intro(data-aos="flip-up")
          p Comprender este proceso permite al manipulador:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Mantener la cadena de frío (de 0 °C a 4 °C) desde el sacrificio. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Evitar la proliferación de microorganismos. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Identificar carne en mal estado o de baja calidad. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Aplicar prácticas higiénicas adecuadas en cada etapa. 
      .col-xl-auto.col-md-9(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img31.png', alt="" ).m-auto
    Separador
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.6 Relación con el resultado de aprendizaje
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img32.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La transformación del músculo a carne explica directamente las características químicas (pH, proteínas, agua) y sensoriales (color, textura, sabor), permitiendo al estudiante reconocer cuándo una carne es apta para el consumo y cumple con criterios de calidad e inocuidad.

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
