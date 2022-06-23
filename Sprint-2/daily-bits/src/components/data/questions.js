
const preguntas = [
    {
      text: "¿Qué etiqueta es semánticamente correcta para el contenido principal?",
      options: [
        { id: 0, text: "main", isCorrect: true },
        { id: 1, text: "section", isCorrect: false },
        { id: 2, text: "header", isCorrect: false },
      ],
    },
    {
      text: "¿Qué etiqueta HTML nos sirve para incluir archivos de JavaScript?",
      options: [
        { id: 0, text: "<br>", isCorrect: false },
        { id: 1, text: "<script>", isCorrect: true },
        { id: 2, text: "<styles>", isCorrect: false },
      ],
    },
    {
      text: "¿Qué significa DRY?",
      options: [
        { id: 0, text: "Don't repeat yellow", isCorrect: false },
        { id: 1, text: "Don't repeat yourself", isCorrect: true },
        { id: 2, text: "Don't recicle year", isCorrect: false },
      ],
    },
    {
      text: "¿Qué tecnologías pertenecen al MEVN Stack?",
      options: [
        { id: 0,  text: "Angular", isCorrect: false },
        { id: 1,  text: "Vue.js", isCorrect: true },
        { id: 2,  text: "Windows", isCorrect: false },
        { id: 3,  text: "Kotlin", isCorrect: false },
      ],
    },
    
  ];

  export default preguntas;