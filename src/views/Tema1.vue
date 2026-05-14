<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Objeto de la producción: ganado bovino, porcino, ovino-caprino y aves
    p.mb-5 El objeto de la producción cárnica comprende especies como bovinos, porcinos, ovinos-caprinos y aves, destinadas al consumo humano bajo condiciones controladas que garantizan calidad e inocuidad.
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Concepto de objeto de la producción
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El objeto de la producción en la industria cárnica se define como la materia prima de origen animal destinada al consumo humano, proveniente de especies domésticas criadas bajo condiciones controladas que garantizan su calidad e inocuidad. 
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Importancia de identificar la materia prima
    p.mb-5 En primer lugar, se abordará la importancia de identificar la materia prima.
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Importancia del origen
                p.mb-0 Permite garantizar que proviene de sistemas productivos adecuados, con condiciones sanitarias controladas y libres de enfermedades.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img3.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Trazabilidad
                p.mb-0 Conocer la procedencia del ganado facilita el seguimiento del producto desde la finca hasta el consumidor, asegurando control en cada etapa de la cadena productiva.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img4.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Impacto
                p.mb-0 Una correcta identificación y manejo del ganado contribuye a la prevención de riesgos sanitarios y a la protección de la salud de los consumidores.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img5.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Garantía de inocuidad
                p.mb-0 Asegurar el origen y las condiciones de producción permite ofrecer alimentos inocuos, seguros y aptos para el consumo humano.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img6.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Clasificación de la producción animal
    .row.align-items-center.mb-3
      .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img7.svg', alt='').m-auto
      .col-xl
        p.mb-0 Cada tipo de ganado produce un tipo de carne con características específicas que influyen en su valor nutricional, manejo y condiciones de inocuidad dentro de las Buenas Prácticas de Manipulación (BPM).
    p.mb-5 A continuación, se presenta de manera general la clasificación de la producción animal destinada al consumo humano, según la especie.
    .bg-carrusel
      .px-5
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/temas/img9.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img10.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Bovinos (carne roja)
                p.mb-0.text-center Carne de res, color rojo por alto contenido de mioglobina.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img10.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Porcinos (carne rosada)
                p.mb-0.text-center Carne de cerdo, color rosado con equilibrio entre grasa y proteína.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img10.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Ovinos – Caprinos (carne roja - especializada)
                p.mb-0.text-center Carne de ovejas y cabras, de color rojo y sabor intenso.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/temas/img10.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Aves (carne blanca)
                p.mb-0.text-center Carne de aves, color claro, baja en grasa y fácil digestión.
        p.mb-0 Cada tipo de ganado presenta características propias que influyen en la calidad de la carne, su manejo y los riesgos sanitarios asociados.
        Separador
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Producción por especie
    p.mb-5 La producción por especie analiza las características, manejo y condiciones de cada tipo de ganado, permitiendo comprender sus diferencias y su impacto en la calidad de la carne. Acto seguido, se procederá a analizar los tipos de producción.
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Producción bovina (ganado bovino)
                p.mb-0 El ganado bovino incluye animales rumiantes como vacas, toros y novillos, destinados a la producción de carne roja. Son herbívoros con sistema digestivo especializado. Su producción comprende cría, levante, engorde y sacrificio. La carne se caracteriza por su color, proteínas y hierro, y su calidad depende del manejo, alimentación y control sanitario.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img11.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Producción porcina
                p.mb-0 La producción porcina se basa en la cría de cerdos destinados a la obtención de carne. Se caracterizan por su eficiencia alimenticia y adaptabilidad. El proceso incluye reproducción, levante y engorde en sistemas intensivos. Su carne es rosada, con equilibrio entre proteína y grasa, y alto valor económico por sus subproductos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img12.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Producción ovina y caprina
                p.mb-0 La producción ovina y caprina incluye ovejas y cabras, rumiantes adaptados a condiciones difíciles. Se desarrolla en sistemas extensivos basados en pastoreo. Su carne es de sabor intenso y consumo tradicional. Aunque es menor frente a bovinos y porcinos, es clave en sistemas sostenibles y economías rurales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img13.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Producción avícola
                p.mb-0 La producción avícola se basa en la cría de aves para carne y huevos, destacándose por su eficiencia, rápido crecimiento y bajos costos. Incluye incubación, levante y engorde en sistemas controlados o tradicionales. La carne es blanca, de fácil digestión y baja en grasa, siendo una importante fuente de proteína a nivel mundial.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img14.png', alt='' style="max-width: 500px").m-auto
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Mapa mental de la producción animal
    .bg-1
      .px-5
        p.mb-5 La producción de carne se organiza a partir de diferentes especies animales, cada una con características propias en cuanto al tipo de carne, sistema de alimentación y manejo productivo. En la siguiente tabla, se conocerá como se relacionan cada una de estas.
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 1.
              span Relación entre especies animales. Tipos de carne y sistema de producción
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Especie
                    th.ajuste-border-tabla.texto-left Tipo de carne
                    th.ajuste-border-tabla.texto-left Sistema de producción
                    th.texto-left Característica principal
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Bovinos
                    td.ajuste-border-tabla.texto-left Roja
                    td.ajuste-border-tabla.texto-left Pastoreo
                    td.texto-left Rumiantes
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Porcinos
                    td.ajuste-border-tabla.texto-left Rosada
                    td.ajuste-border-tabla.texto-left Alimentación controlada
                    td.texto-left Producción intensiva
                  tr
                    td.ajuste-border-tabla.texto-left Ovinos-caprinos
                    td.ajuste-border-tabla.texto-left Roja
                    td.ajuste-border-tabla.texto-left Pastoreo extensivo
                    td.texto-left Adaptación a diferentes ambientes
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Aves
                    td.ajuste-border-tabla.texto-left Blanca
                    td.ajuste-border-tabla.texto-left Producción intensiva
                    td.texto-left Crecimiento rápido
        p.mb-0.text-center Estas diferencias influyen en la calidad del producto y en las prácticas de manipulación necesarias para garantizar su inocuidad.
        Separador
        #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.6 Relación con las buenas prácticas de manipulación (BPM)
        p.mb-5 ¿Sabía que la producción de la carne influye en la seguridad alimentaria? En este podcast se explica cómo las buenas prácticas de manipulación (BPM) garantizan alimentos inocuos y protegen la salud pública.
    .row.align-items-center.m-0.mb-0
      .col-xl
        .row.align-items-center.justify-content-center.caja-tema1(data-aos="zoom-in")
          .col-auto.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/img16.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="De la producción a la inocuidad: claves en la manipulación de la carne"
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/temas/img17.png" ).m-auto
    Separador
    #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.7 Enfoque de inocuidad
    p.mb-5 En este apartado se abordará el enfoque de inocuidad, destacando la importancia de garantizar alimentos seguros mediante prácticas adecuadas de manejo, higiene y control sanitario.
    .row.justify-content-center.mb-0
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img18.jpg', alt="" ).m-auto
            h4.text-center Perecibilidad de la carne
            p.mb-0.text-center Alimento perecedero que requiere manejo adecuado para evitar contaminación.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img19.jpg', alt="" ).m-auto
            h4.text-center Condiciones sanitarias desde el origen:
            p.mb-0.text-center Debe cumplir controles sanitarios desde su producción.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img20.jpg', alt="" ).m-auto
            h4.text-center Rol del manipulador
            p.mb-0.text-center Verifica procedencia y características del producto.
      .col-xl-3.col-md-9(data-aos="fade-left")
        .caja-tema1-1.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img21.jpg', alt="" ).m-auto
            h4.text-center Aplicación de buenas prácticas
            p.mb-0.text-center Aplica higiene, conservación y almacenamiento adecuados.
    .bg-1
      .px-5
        Separador
        #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.8 Cuadro comparativo de especies
        p.mb-5 El cuadro comparativo de especies permite analizar las diferencias entre tipos de ganado, considerando características productivas, tipo de carne, sistemas de producción y condiciones de manejo.
        .row.justify-content-center.mb-0
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 2.
              span Cuadro comparativo de especies pecuarias y sus características productivas
            .tabla-a(data-aos="zoom-in").mb-5
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Especie
                    th.ajuste-border-tabla.texto-left Tipo de carne
                    th.ajuste-border-tabla.texto-left Sistema de producción
                    th.ajuste-border-tabla.texto-left Característica clave
                    th.texto-left Riesgo principal
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Bovino
                    td.ajuste-border-tabla.texto-left Roja
                    td.ajuste-border-tabla.texto-left Extensivo / semi-intensivo
                    td.ajuste-border-tabla.texto-left Alto hierro
                    td.texto-left Contaminación en sacrificio
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Porcino
                    td.ajuste-border-tabla.texto-left Rosada
                    td.ajuste-border-tabla.texto-left Intensivo
                    td.ajuste-border-tabla.texto-left Alta grasa
                    td.texto-left Parásitos
                  tr
                    td.ajuste-border-tabla.texto-left Ovino-caprino
                    td.ajuste-border-tabla.texto-left Roja
                    td.ajuste-border-tabla.texto-left Extensivo
                    td.ajuste-border-tabla.texto-left Adaptación climática
                    td.texto-left Manejo sanitario
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Aves
                    td.ajuste-border-tabla.texto-left Blanca
                    td.ajuste-border-tabla.texto-left Intensivo
                    td.ajuste-border-tabla.texto-left Rápido crecimiento
                    td.texto-left Contaminación microbiológica
            .caja-tema1-2.mb-0(data-aos="flip-up")
              .row.align-items-center
                .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/temas/img22.svg', alt='' style="width: 85px").m-auto
                .col-xl.col-md-10
                  p.mb-0 El objeto de la producción cárnica incluye diversas especies cuyas características influyen en la calidad e inocuidad. Su comprensión permite aplicar adecuadamente las BPM y garantizar alimentos seguros.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
