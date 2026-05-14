<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Propiedades organolépticas de la carne
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img57.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las propiedades organolépticas de la carne incluyen aroma, sabor, textura y jugosidad, determinando su calidad y aceptación por el consumidor durante su consumo.
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Textura de la carne y su relación con la manipulación (BPM)
    .caja-tema2.mb-0(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-0 La textura de la carne es una característica sensorial clave que influye en su aceptación, ya que determina la resistencia al corte y a la masticación. Depende de la estructura muscular, el tejido conectivo y los cambios post mortem. Incluye atributos como terneza, jugosidad y firmeza, influenciados por factores del animal y por su manejo, conservación y procesamiento (BPM).
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img58.png', alt='').m-auto
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Componentes estructurales de la textura
    p.mb-5 La textura de la carne está determinada por:
    .row.justify-content-center.mb-0
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-tema1-1.h-100.ajustar-color-1
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img59.jpg', alt="" ).m-auto
            h4.text-center Fibras musculares
            p.mb-0.text-center Fibras más finas generan carnes más tiernas.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100.ajustar-color-1
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img60.jpg', alt="" ).m-auto
            h4.text-center Tejido conectivo (colágeno y elastina)
            p.mb-0.text-center El colágeno aporta dureza, pero se suaviza al gelatinizarse con el calor, mientras que la elastina no se degrada fácilmente y aumenta la dureza de la carne.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .caja-tema1-1.h-100.ajustar-color-1
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img61.jpg', alt="" ).m-auto
            h4.text-center Estado del rigor mortis
            p.mb-0.text-center La rigidez inicial postsacrificio influye en la textura final. 
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Dureza y terneza
    .bg-1
      .px-5
        .row.align-items-center.mb-3
          .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/img7.svg', alt='').m-auto
          .col-xl
            p.mb-0 La dureza primaria de la carne está relacionada con el contenido de colágeno y elastina, mientras que la terneza se desarrolla durante la maduración gracias a la acción de enzimas naturales que degradan las fibras musculares, mejorando así su calidad sensorial.
        p.mb-5 A continuación, se conocerán los factores que afectan la textura.
        .row.justify-content-center.mb-0
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 6.
              span Factores que afectan la textura
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Factor
                    th.texto-left Efecto
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Edad del animal
                    td.texto-left Mayor edad = mayor dureza
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Colágeno
                    td.texto-left Más colágeno = carne más dura
                  tr
                    td.ajuste-border-tabla.texto-left Actividad física
                    td.texto-left Mayor ejercicio = mayor resistencia muscular
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Alimentación
                    td.texto-left Influye en el marmoleo
                  tr
                    td.ajuste-border-tabla.texto-left Maduración
                    td.texto-left Incrementa la terneza
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Manejo del frío
                    td.texto-left Puede endurecer si es inadecuado
    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4 Manejo post mortem y conservación
    .row.justify-content-center.align-items-center
      .col-xl.mb-4.mb-lg-0
        .caja-intro(data-aos="flip-up")
          p El manejo después del sacrificio es determinante en la textura:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Refrigeración controlada]: Evita el acortamiento por frío. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Congelación]: Si es inadecuada, daña la estructura muscular. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Maduración]: Recomendada entre 5 y 10 días, de 0 °C a 4 °C, mejora la terneza. 
      .col-xl-auto.col-md-9(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img62.png', alt="" ).m-auto
    Separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.5 Relación de la textura con las buenas prácticas de manipulación (BPM)
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img63.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las buenas prácticas de manipulación influyen en la textura de la carne, ya que garantizan adecuada conservación, procesamiento e higiene, preservando terneza, jugosidad y calidad del producto.
    .caja-tema5.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/img64.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Control de calidad de productos cárnicos 
          p.mb-0 Como complemento a este tema, se recomienda revisar el video “Control de calidad de productos cárnicos”, en el que se abordan procesos, características sensoriales y factores que influyen en la inocuidad y calidad final de la carne, incluyendo las buenas prácticas de manipulación. 
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="('https://www.youtube.com/watch?v=PGCERL12K2E ')" target="_blank" type="website")
            span Abrir video
            i.fas.fa-link
    p.mb-0 Las BPM son fundamentales para garantizar la inocuidad de la carne. Un manejo inadecuado puede alterar significativamente las características físicas y sensoriales de la carne.
    Separador
    #t_5_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.6 Impacto de la manipulación inadecuada
    .bg-1
      .px-5
        p.mb-5 La manipulación inadecuada de la carne afecta su calidad, inocuidad y textura, favoreciendo la contaminación, el deterioro acelerado y la pérdida de propiedades sensoriales. A continuación, se presenta su impacto. 
        .row.justify-content-center.mb-0
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema5-1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img65.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Ruptura de la cadena de frío
                p.mb-0.text-center Favorece proliferación microbiana y deterioro de la estructura muscular.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema5-1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/temas/img66.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Manipulación excesiva
                p.mb-0.text-center Provoca pérdida de jugosidad y cambios en la firmeza.
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .caja-tema5-1.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/temas/img67.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Almacenamiento inadecuado
                p.mb-0.text-center Genera deshidratación y endurecimiento superficial.
        Separador
        #t_5_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.7 Principios de BPM aplicados a la textura
        .row.justify-content-center.align-items-center
          .col-xl.mb-4.mb-lg-0
            .caja-intro(data-aos="flip-up").mb-3
              p Para preservar la calidad de la carne, se deben aplicar las siguientes prácticas:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Mantener la carne entre 0 °C y 4 °C. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Evitar la contaminación cruzada. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Aplicar condiciones adecuadas de transporte y almacenamiento. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Utilizar técnicas correctas de cocción. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Minimizar la manipulación innecesaria. 
            .row.align-items-center
              .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/img68.svg', alt='').m-auto
              .col-xl
                p.mb-0 La textura de la carne resulta de la interacción entre factores biológicos y de manejo, y su conservación adecuada depende del cumplimiento de las BPM, garantizando calidad e inocuidad.
          .col-xl-auto.col-md-9(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/img69.png', alt="" ).m-auto

</template>

<script>
export default {
  name: 'Tema5',
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
