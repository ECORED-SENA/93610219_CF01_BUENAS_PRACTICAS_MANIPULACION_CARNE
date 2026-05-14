<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Desarrollo de las características sensoriales durante la cocción de la carne	
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img47.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este capítulo se abordarán las características sensoriales de la carne, analizando factores como aroma, sabor, jugosidad y textura, y su desarrollo durante la cocción y manejo del producto.
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Características sensoriales  
    p.mb-5 Las características sensoriales de la carne corresponden a los atributos percibidos por el consumidor durante su consumo, siendo determinantes en la aceptación o rechazo del producto. Entre las más importantes se destacan:
    .bg-3
      .px-5
        .bg-slider.mb-5
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Jugosidad
                    p.mb-0 Está relacionada con el contenido de agua y grasa intramuscular de la carne. Durante la cocción, parte del agua se pierde, pero una adecuada técnica de preparación y un buen nivel de marmoleo permiten retener los jugos, mejorando la sensación de humedad y palatabilidad en el consumo.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img48.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Aroma
                    p.mb-0 Se desarrolla principalmente durante la cocción mediante reacciones químicas que generan compuestos volátiles. Estos compuestos son responsables del olor característico de la carne y juegan un papel fundamental en la percepción sensorial del consumidor.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img49.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Sabor
                    p.mb-0 Se forma de manera conjunta con el aroma durante la cocción, como resultado de la interacción entre aminoácidos, azúcares y lípidos. Este atributo define en gran medida la aceptación del producto y su experiencia gustativa.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img50.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Textura
                    p.mb-0 Depende de la estructura del músculo, la cantidad de tejido conectivo y el proceso de maduración. Factores como la edad del animal y el manejo post-mortem influyen directamente en la ternura o dureza de la carne.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img51.png', alt='' style="max-width: 500px").m-auto
        .row.justify-content-center.mb-0
          .col-xl-10
            .caja-tema1-2.mb-5(data-aos="flip-up")
              .row.align-items-center
                .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/temas/img22.svg', alt='' style="width: 85px").m-auto
                .col-xl.col-md-10
                  p.mb-0 El siguiente cuadro presenta las principales características sensoriales de la carne, sus factores determinantes y su impacto en la calidad, influyendo en la percepción del consumidor.
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 5.
              span Características sensoriales y factores asociados
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Característica
                    th.ajuste-border-tabla.texto-left Factores determinantes
                    th.texto-left Impacto en la calidad
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Jugosidad
                    td.ajuste-border-tabla.texto-left Agua, grasa, cocción
                    td.texto-left Sensación de humedad
                  tr
                    td.ajuste-border-tabla.texto-left Aroma y sabor
                    td.ajuste-border-tabla.texto-left Reacciones químicas, grasa
                    td.texto-left Aceptación del consumidor
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Textura
                    td.ajuste-border-tabla.texto-left Colágeno, maduración, edad
                    td.texto-left Ternura o dureza
        Separador
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Factores que modifican el aroma de la carne
    p.mb-5 El aroma de la carne está influenciado por diversos factores que actúan desde la producción hasta la cocción. Entre ellos se destacan los siguientes factores y principales mecanismos de formación del aroma:
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Factores")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img52.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Factores
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Composición química]: influye en la formación del aroma. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Condiciones de producción]: manejo del animal y proceso cárnico. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b BPM]: aseguran la calidad del aroma. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Cocción]: activa las reacciones que generan aroma.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Reacción de Maillard]: produce aromas tostados.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Caramelización]: aporta notas dulces.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Degradación de aminoácidos]: genera compuestos aromáticos.  
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Oxidación de lípidos]: origina aromas grasos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b pH]: regula las reacciones químicas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Temperatura]: define la intensidad del aroma.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Tiempo de cocción]: influye en su formación.
      .py-3.py-md-4(titulo="Principales mecanismos de formación del aroma")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img53.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Principales mecanismos de formación del aroma
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Reacción de Maillard]: genera aromas tostados y cárnicos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Degradación de aminoácidos]: produce compuestos azufrados. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Oxidación de lípidos]: origina aromas grasos característicos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Caramelización]: aporta notas dulces.
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Factores en el desarrollo del aroma de la carne
    p.mb-5 El aroma de la carne es el resultado de una compleja interacción de procesos bioquímicos y tecnológicos que se ven influenciados por factores intrínsecos (propios del animal) y factores extrínsecos (externos o de manejo y procesamiento). Los factores intrínsecos son:
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Factores intrínsecos")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img54.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Factores intrínsecos
            p Son aquellos inherentes al animal y a las características propias del tejido muscular:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Especie:] define el perfil aromático según su composición. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Edad:] animales adultos generan sabores más intensos; los jóvenes, más suaves. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Genética:] influye en el marmoleo, afectando la formación de compuestos aromáticos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Alimentación:] modifica el aroma; si el pastoreo es intenso, el concentrado es suave. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Composición química:] proteínas y lípidos influyen en la generación del aroma. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b pH de la carne:] regula las reacciones químicas. El pH normal favorece el aroma.
      .py-3.py-md-4(titulo="Factores extrínsecos")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img55.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Factores extrínsecos
            p Son aquellos relacionados con el manejo, procesamiento y condiciones externas a las que se somete la carne:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Manejo pre y post sacrificio]: el estrés afecta el pH y el desarrollo del aroma. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Maduración]: mejora la terneza, intensifica el sabor y favorece la formación de aroma. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Almacenamiento]: las condiciones influyen en la estabilidad del aroma; un mal manejo genera olores indeseables. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Procesamiento térmico (cocción)]: principal responsable del aroma mediante reacciones químicas. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Condimentos y aditivos]: pueden modificar o potenciar el aroma. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Tipo de corte y tamaño]: afectan la exposición al calor y la intensidad del aroma.
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Importancia del pH en la calidad del aroma
    p.mb-5 El pH de la carne es un factor clave en la calidad del aroma, ya que regula la actividad enzimática y las reacciones químicas durante la cocción. Un pH adecuado favorece el desarrollo de compuestos aromáticos, mientras que alteraciones pueden afectar negativamente el aroma y la calidad sensorial del producto.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img56.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Función del pH en la carne").ajuste-cajaAcordion
            p.mb-3 El pH es uno de los factores más críticos en la calidad de la carne, ya que regula la actividad enzimática, la capacidad de retención de agua y el desarrollo de compuestos volátiles. Un pH adecuado favorece la estabilidad, la jugosidad y la formación de aromas característicos durante la conservación y cocción.
          .row(titulo="Defectos de la carne asociados al pH").ajuste-cajaAcordion
            p.mb-3 Las alteraciones en el pH de la carne pueden generar defectos que afectan su calidad sensorial. Entre ellos se encuentran la carne PSE, caracterizada por ser pálida, suave y exudativa, y la carne DFD, que es oscura, firme y seca, presentando además un menor desarrollo del aroma y menor aceptación.
          .row(titulo="Factores que intervienen en el desarrollo del aroma de la carne").ajuste-cajaAcordion
            p.mb-3 El desarrollo del aroma de la carne es el resultado de una secuencia de factores interrelacionados que inician en el animal y su alimentación, continúan con el manejo y las condiciones del pH y la composición, y culminan durante la cocción, donde las reacciones químicas generan el aroma final característico del producto.
    p.mb-0 El aroma de la carne resulta de la interacción entre factores biológicos y tecnológicos. Su adecuada gestión permite optimizar la calidad sensorial y garantizar productos con mejores características organolépticas y mayor aceptación del consumidor.

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
