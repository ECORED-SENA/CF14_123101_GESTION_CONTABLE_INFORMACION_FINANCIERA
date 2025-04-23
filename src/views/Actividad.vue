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
        'Declaraciones tributarias en Colombia: normativa, plataformas y procedimientos',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo: Identificar los conceptos clave relacionados con la elaboración, presentación y sanciones asociadas a las declaraciones tributarias nacionales y territoriales. ',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el decreto que rige el Estatuto Tributario en Colombia?',
          imagen: require('@/assets/actividad/imagen1.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decreto 825 de 1990.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Decreto 624 de 1989.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Decreto 2331 de 2002.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Decreto 2201 de 2016.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Cuál es el formulario establecido para declarar el IVA?',
          imagen: require('@/assets/actividad/imagen1.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Formulario 110.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Formulario 300.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Formulario 131.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Formulario 350.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes no es una sanción estipulada en el Estatuto Tributario?',
          imagen: require('@/assets/actividad/imagen1.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sanción por inexactitud.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sanción por no declarar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sanción por corrección del RUT.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sanción por extemporaneidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué entidad se encarga del recaudo de impuestos a nivel nacional en Colombia?',
          imagen: require('@/assets/actividad/imagen1.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Secretaría de Hacienda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ministerio de Hacienda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'DIAN.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'DANE.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la periodicidad del impuesto sobre las ventas para responsables con ingresos iguales o superiores a 92.000 UVT?',
          imagen: require('@/assets/actividad/imagen2.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuatrimestral.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Anual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Bimestral.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Semestral.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué formulario se usa para declarar la Retención en la Fuente?',
          imagen: require('@/assets/actividad/imagen2.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Formulario 350.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Formulario 110.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Formulario 310.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Formulario 300.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué representa la sanción estipulada en el Artículo 643 del Estatuto Tributario?',
          imagen: require('@/assets/actividad/imagen2.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sanción por corrección.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sanción por evasión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sanción por no declarar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Sanción por facturación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué servicio NO se presta en la plataforma digital de la DIAN?',
          imagen: require('@/assets/actividad/imagen2.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Autorización de facturación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Actualización del RUT.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solicitud de crédito fiscal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cargue de información exógena.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué significa el término “elusión tributaria”?',
          imagen: require('@/assets/actividad/imagen3.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar pagar impuestos falsificando documentos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar el pago de impuestos utilizando vacíos legales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Declarar tarde los impuestos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Declarar con errores aritméticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la tarifa de sanción por extemporaneidad por mes o fracción de mes?',
          imagen: require('@/assets/actividad/imagen3.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '10% del impuesto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '5% del impuesto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '3% del impuesto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '20% del impuesto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El formulario 310 se utiliza para declarar el Impuesto Nacional al Consumo.',
          imagen: require('@/assets/actividad/imagen3.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Las declaraciones tributarias pueden ser presentadas en formato físico o litográfico en la DIAN.',
          imagen: require('@/assets/actividad/imagen3.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'El formulario 131 es utilizado para declarar el ICA en Bogotá.',
          imagen: require('@/assets/actividad/imagen4.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Una persona natural también debe registrarse en el RUT para presentar sus declaraciones tributarias.',
          imagen: require('@/assets/actividad/imagen4.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'La sanción mínima en Bogotá por omisiones tributarias corresponde a 10 UVT.',
          imagen: require('@/assets/actividad/imagen4.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
