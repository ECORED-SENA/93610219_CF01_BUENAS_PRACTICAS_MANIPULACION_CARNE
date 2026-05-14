<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Composición química de la carne
    .caja-tema2.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-0 La carne está compuesta aproximadamente por 75 % de agua, 19 % de proteínas y entre 2 % y 5 % de lípidos, además de pequeñas cantidades de otros nutrientes. Estos componentes determinan su textura, color, jugosidad y vida útil, así como su comportamiento durante procesos de conservación y transformación.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/temas/img33.png', alt='').m-auto
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Agua
    p.mb-5 Como punto de partida, se conocerá la importancia del agua en la carne, luego la relación agua – proteína y finalmente las formas del agua en la carne.
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img34.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Importancia del agua en la carne").ajuste-cajaAcordion
            p.mb-3 El agua es el componente predominante de la carne y cumple un papel fundamental en su estructura y funcionalidad. Gracias a su naturaleza polar, interactúa con proteínas y sales, facilitando diversos procesos bioquímicos esenciales.
          .row(titulo="Relación agua–proteína").ajuste-cajaAcordion
            p.mb-3 Existe una relación directa entre el contenido de agua y las proteínas, con una proporción aproximada de 3,6:1. Esto significa que cualquier cambio en las proteínas influye directamente en la cantidad de agua presente en el músculo.
          .row(titulo="Formas del agua en la carne").ajuste-cajaAcordion
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Agua de constitución]: unida químicamente a las proteínas, no se pierde fácilmente.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Agua de interfase]: asociada a la superficie proteína-agua, influye en la jugosidad.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Agua libre]: se libera con calor o presión, determina pérdidas durante la cocción.
          .row(titulo="Distribución del agua en la carne").ajuste-cajaAcordion
            p.mb-3 El agua en la carne se presenta en tres formas principales: agua ligada, que forma parte de la estructura; agua retenida, asociada a la interfase; y agua libre, que puede liberarse como exudado durante el procesamiento.
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Proteínas
    p.mb-5 En este apartado se abordarán las proteínas presentes en la carne, sus funciones, tipos y la importancia que tienen en la calidad, estructura y valor nutricional del producto.
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Proteínas en la carne")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img35.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Proteínas en la carne
            p.mb-0 Las proteínas son compuestos formados por carbono, hidrógeno, oxígeno y nitrógeno, constituidos por aminoácidos. Son fundamentales para la estructura del músculo y la nutrición humana.
      .py-3.py-md-4(titulo="Funciones de las proteínas")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img36.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Funciones de las proteínas
            p.mb-0 Las proteínas cumplen funciones estructurales, enzimáticas y contráctiles, influyendo directamente en la textura, el color y la capacidad de retención de agua de la carne.
      .py-3.py-md-4(titulo="Tipos de proteínas")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img37.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Tipos de proteínas
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Miofibrilares]: representan aproximadamente el 50% de las proteínas de la carne y son responsables de la textura y la contracción muscular.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Sarcoplásmicas]: son proteínas solubles que influyen en el color de la carne y participan en procesos metabólicos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Estroma]: son proteínas insolubles, como el colágeno y la elastina, que brindan soporte estructural al tejido muscular.
      .py-3.py-md-4(titulo="Importancia de proteínas específicas")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img38.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Importancia de proteínas específicas
            p.mb-0 El colágeno está relacionado con la dureza de la carne, la mioglobina determina su color y la elastina presenta baja digestibilidad y escaso valor nutricional.
    .bg-2
      .px-5
        Separador
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Grasa (lípidos)
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            p La carne está compuesta aproximadamente por 75% de agua, 19% de proteínas y entre 2% y 5% de lípidos, además de pequeñas cantidades de otros nutrientes. Estos componentes determinan su textura, color, jugosidad y vida útil, así como su comportamiento durante procesos de conservación y transformación.
            .caja-intro.mb-3(data-aos="fade-right")
              .row.align-items-center
                .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                  figure
                    img(src='@/assets/curso/intro/img2.svg', alt='').m-auto
                .col-xl
                  p.mb-0 Los lípidos de la carne, como triglicéridos, fosfolípidos y esteroles, aportan energía, sabor, aroma y jugosidad. Su composición varía según la especie, alimentación y manejo del animal.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/img40.png', alt='').m-auto
        p.mb-5 A continuación, se presentan los tipos de ácidos grasos en la carne.
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 3.
              span Tipos de ácidos grasos en la carne
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Tipo de ácido graso
                    th.ajuste-border-tabla.texto-left Ejemplo
                    th.texto-left Característica
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Saturados
                    td.ajuste-border-tabla.texto-left Palmítico, esteárico
                    td.texto-left Más estables
                  tr
                    td.ajuste-border-tabla.texto-left Monoinsaturados
                    td.ajuste-border-tabla.texto-left Oleico
                    td.texto-left Beneficiosos
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Poliinsaturados
                    td.ajuste-border-tabla.texto-left Linoleico, linolénico
                    td.texto-left Esenciales
        p.mb-5 Mediante la siguiente tabla, se realizará análisis comparativo por especie.
        .row.justify-content-center.mb-0
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 4.
              span Cuadro comparativo por especie
            .tabla-a(data-aos="zoom-in").mb-5
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Especie
                    th.ajuste-border-tabla.texto-left Saturados (%)
                    th.ajuste-border-tabla.texto-left Monoinsaturados (%)
                    th.texto-left Poliinsaturados (%)
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Cerdo
                    td.ajuste-border-tabla.texto-left 50
                    td.ajuste-border-tabla.texto-left 39
                    td.texto-left 11
                  tr
                    td.ajuste-border-tabla.texto-left Res
                    td.ajuste-border-tabla.texto-left 46.5
                    td.ajuste-border-tabla.texto-left 50
                    td.texto-left 3.5
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Pollo
                    td.ajuste-border-tabla.texto-left 30
                    td.ajuste-border-tabla.texto-left 42
                    td.texto-left 28
        p.mb-0 El colesterol está presente en cantidades moderadas (60–80 mg/100 g) y cumple funciones estructurales en las membranas celulares.
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Hidratos de carbono
    p.mb-5 Dentro de este marco se profundizará en los carbohidratos de la carne y la transformación del glucógeno y su importancia.
    .tarjeta--container.row.justify-content-center.text-white.mb-0.m-0(data-aos="zoom-in")
      .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img41.svg', alt='' style="max-width: 100px")
          .col-xl
            h2 Carbohidratos en la carne
        p.mb-0 Los carbohidratos en la carne se encuentran en cantidades reducidas, siendo el glucógeno el principal componente. Este polisacárido está presente en el músculo y constituye una fuente de energía que, tras el sacrificio del animal, participa en procesos bioquímicos fundamentales.
      .col-xl-6.col-md-10.tarjeta.color-primario.text-white.p-5
        .row.d-flex.align-items-end.mb-4
          .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/img41.svg', alt='' style="max-width: 100px")
          .col-xl
            h2 Transformación del glucógeno y su importancia
        p.mb-0 Después del sacrificio, el glucógeno se transforma en ácido láctico mediante la glucólisis anaerobia, debido a la ausencia de oxígeno. Este proceso provoca la disminución del pH, lo que influye directamente en la conservación, la textura y la calidad final de la carne.
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Vitaminas
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img42.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La carne es una importante fuente de vitaminas del complejo B, fundamentales para el metabolismo energético y el adecuado funcionamiento del sistema nervioso, entre ellas la B1, B2, B3, B6 y B12. Algunas, como la tiamina (B1), son sensibles al calor, mientras que otras son más estables durante la cocción y conservación.
    Separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.6 Minerales
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img43.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La carne aporta minerales esenciales como hierro, fósforo, potasio y magnesio. El hierro hemo destaca por su alta biodisponibilidad, facilitando su absorción y ayudando a prevenir la anemia. En conjunto, los minerales representan menos del 2% del peso de la carne.
    Separador
    #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.7 Composición según la especie
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img44.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La composición química de la carne varía según la especie, alimentación, edad y actividad del animal. Las carnes rojas contienen más hierro y mioglobina, lo que define su color, mientras que las aves presentan menos grasa y mayor contenido de agua, siendo más ligeras nutricionalmente.
    Separador
    #t_3_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.8 Relación con la calidad de la carne
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img45.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La composición química influye en las propiedades sensoriales y tecnológicas de la carne. El agua y la grasa determinan la jugosidad, mientras las proteínas afectan la textura. Además, estos componentes inciden en la conservación y el comportamiento durante el procesamiento.
    Separador
    #t_3_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.9 Relación con BPM e inocuidad
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img46.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El conocimiento de la composición química de la carne es clave para aplicar correctamente las BPM. Su alto contenido de agua y nutrientes la hace susceptible al deterioro, por lo que requiere adecuada refrigeración, higiene y manipulación para garantizar su inocuidad.

</template>

<script>
export default {
  name: 'Tema3',
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
