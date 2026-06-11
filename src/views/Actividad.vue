<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Evaluación de conocimientos sobre calidad e inocuidad en la carne.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los conceptos fundamentales relacionados con la producción, transformación, composición, características sensoriales y factores de alteración de la carne, promoviendo la aplicación de las Buenas Prácticas de Manipulación para garantizar su inocuidad y calidad.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es el objeto de la producción en la industria cárnica?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Materia prima animal destinada al consumo humano final.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Proceso industrial de transformación de alimentos crudos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sistema de distribución comercial de alimentos cárnicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Método de conservación de alimentos mediante frío continuo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 2,
          texto: '¿Qué permite identificar correctamente la materia prima?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el costo económico de la producción pecuaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mejorar únicamente el sabor del producto final obtenido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Garantizar trazabilidad y condiciones sanitarias adecuadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incrementar la velocidad del sacrificio de los animales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 3,
          texto: '¿Cuál es un tipo de producción animal según el documento?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producción energética basada en residuos orgánicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Producción industrial de vegetales para consumo humano.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Producción de alimentos sintéticos en laboratorio animal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Producción bovina destinada a carne roja principalmente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 4,
          texto: '¿Qué tipo de carne producen los porcinos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Carne rosada con equilibrio entre grasa y proteína.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Carne blanca con bajo contenido total de proteína.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Carne roja con alto contenido de hierro estructural.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Carne seca con alto contenido de minerales totales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 5,
          texto: '¿Qué caracteriza a la producción avícola?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Lento crecimiento y baja eficiencia en alimentación animal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Producción exclusiva en ambientes naturales sin control.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Rápido crecimiento y alta conversión alimenticia eficiente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Uso exclusivo de sistemas extensivos en zonas rurales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 6,
          texto: '¿Qué ocurre en la glucólisis anaeróbica?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El oxígeno se acumula en los tejidos del animal muerto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las proteínas se convierten en lípidos estructurales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El agua se evapora completamente del tejido muscular.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El glucógeno se transforma en ácido láctico muscular.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 7,
          texto: '¿Qué sucede con el pH de la carne post-mortem?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Disminuye de siete a valores cercanos a cinco punto cinco.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumenta de cinco a valores cercanos a siete punto ocho.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se mantiene constante sin cambios durante el proceso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Desaparece completamente en el tejido muscular animal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 8,
          texto: '¿Qué es el rigor mortis?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Proceso de enfriamiento rápido o acelerado del tejido muscular.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Etapa de crecimiento microbiano en carne almacenada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Fase de aumento o incremento del contenido de agua en la carne.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estado de rigidez muscular por agotamiento de energía.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 9,
          texto: '¿Qué ocurre durante la maduración de la carne?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se elimina de manera contundente el contenido de agua libre.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se incrementa la rigidez, densidad y disminuye la calidad total.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Enzimas degradan fibras y mejoran textura y sabor final.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Se detiene o paraliza toda actividad bioquímica del tejido animal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 10,
          texto: '¿Cuál es un factor que influye en la transformación?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color del empaque utilizado en la comercialización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estrés del animal antes del sacrificio y manejo previo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tamaño del cuchillo usado en el corte de la carne.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tipo de transporte urbano utilizado en la distribución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 11,
          texto: '¿Cuál es el componente principal de la carne?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Proteínas que constituyen el noventa por ciento total necesario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Grasas que representan la mitad del peso total cárnico ideal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Agua que constituye aproximadamente el setenta y cinco.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Minerales que dominan la composición estructural total.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 12,
          texto: '¿Qué función cumplen las proteínas en la carne?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo aportan energía sin función estructural definida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo determinan el contenido de grasa corporal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Influyen en textura, color y retención de agua muscular.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducen muy bien la presencia de agua en carne.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 13,
          texto: '¿Qué aportan los lípidos en la carne?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sabor, aroma y jugosidad al producto final consumido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Exclusivamente color rojo intenso en la carne fresca.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disminución del contenido energético del alimento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminación total de los microorganismos en la carne.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 14,
          texto: '¿Cuál es la función del glucógeno en la carne?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Convertirse directamente en proteínas estructurales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Transformarse en ácido láctico tras el sacrificio animal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar el contenido de grasa en el tejido muscular.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir totalmente el contenido de agua presente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 15,
          texto: '¿Qué determina la jugosidad de la carne?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cantidad total de minerales presentes en el tejido muscular.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Nivel de contaminación microbiológica existente en el alimento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Tipo de envase utilizado durante el almacenamiento procedente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Contenido de agua y grasa intramuscular principalmente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 16,
          texto: '¿Qué es la reacción de Maillard?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proceso de congelación rápida del tejido muscular.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Interacción entre proteínas y azúcares al aplicar calor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Método de eliminación de bacterias mediante frío.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Técnica de almacenamiento en atmósferas ajustadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 17,
          texto: '¿Qué afecta la textura de la carne?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Color del producto durante la fase de cocción final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Colágeno, edad del animal y proceso de maduración.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tipo de etiqueta utilizada en la comercialización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cantidad de luz presente en el almacenamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 18,
          texto: '¿Qué es la alteración de la carne?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proceso natural de mejora del sabor durante cocción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Método de conservación mediante congelación rápida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambios indeseables que afectan calidad e inocuidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Técnica de procesamiento industrial de los alimentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 19,
          texto: '¿Qué son los agentes exógenos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustancias químicas producidas dentro del animal vivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Microorganismos que actúan externamente en el alimento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Factores genéticos propios y exclusivos de cada especie.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Procesos industriales aplicados durante la cocción alimenticia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 20,
          texto: '¿Cuál es un riesgo de los residuos farmacológicos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Generar resistencia bacteriana y reacciones alérgicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mejorar la calidad sensorial de la carne procesada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disminuir totalmente la presencia de microorganismos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar la vida útil sin efectos negativos en salud.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
