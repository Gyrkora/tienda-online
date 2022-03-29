/* Acá estará toda la información sobre los productos */
import clasesDeEspanol from "../assets/clasesDeEspanol.PNG";
import redTOW from "../assets/redTOW.PNG";
import tertus from "../assets/tertus.PNG";

const coursesList = [
  {
    id: 1,
    courseName: "Clases de Español",
    photo: clasesDeEspanol,
    description: 'Clases de español personalizadas a su nivel, intereses y cultural',
    price: "30 USD x 1hr",
  },
  {
    id: 2,
    courseName: "RedTOW",
    photo: redTOW,
    description: 'Aprende a escribir en español con este curso de redacción basado en la cultura latinoamericana',
    price: "60 USD x month",
  },
  {
    id: 3,
    courseName: "Clubes de Conversación",
    photo: tertus,
    description: 'Conoce gente mientras practicas tu español',
    price: "15 USD x session",
  },
];

export { coursesList };
