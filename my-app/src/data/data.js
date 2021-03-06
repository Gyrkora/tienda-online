/* Acá estará toda la información sobre los productos */
import clasesDeEspanol from "../assets/clasesDeEspanol.PNG";
import redTOW from "../assets/redTOW.PNG";
import tertus from "../assets/tertus.PNG";
import elArbolYLaPlanta from '../assets/elArbolylaPlantaAL.png'
import elRegreso from '../assets/elRegresoAL.PNG'
import menique from '../assets/meniqueAL.jpg'

const coursesList = [
  {
    id: '1',
    courseName: "Clases de Español",
    photo: clasesDeEspanol,
    description: 'Clases de español personalizadas a su nivel, intereses y cultura',
    price: "30 USD x 1hr",
    priceInDollars: 30,
    category: 'Cursos',
    stock: 50
  },
  {
    id: '2',
    courseName: "RedTOW",
    photo: redTOW,
    description: 'Aprende a escribir en español con este curso de redacción basado en la cultura latinoamericana',
    price: "60 USD x month",
    priceInDollars: 60,
    category: 'Cursos',
    stock: 30

  },
  {
    id: '3',
    courseName: "Clubes de Conversación",
    photo: tertus,
    description: 'Conoce gente mientras practicas tu español',
    price: "15 USD x session",
    priceInDollars: 15,
    category: 'Cursos',
    stock: 20,

  },
  {
    id: '4',
    courseName: "El Árbol y la Planta",
    photo: elArbolYLaPlanta,
    description: 'Descubre por qué es importante dejar crecer al árbol como es.',
    price: "15 USD",
    priceInDollars: 15,
    category: 'Audiolibros',
    stock: 100

  },
  {
    id: '5',
    courseName: "El Regreso",
    photo: elRegreso,
    description: 'Sofia se reencuentra con sus tierras luego de un viaje al otro continente.',
    price: "10 USD",
    priceInDollars: 10,
    category: 'Audiolibros',
    stock: 100

  },
  {
    id: '6',
    courseName: "Meñique",
    photo: menique,
    description: 'El más pequeño de todos los hermanos va a darle una sorpresa al mundo',
    price: "30 USD",
    priceInDollars: 30,
    category: 'Audiolibros',
    stock: 100
  }
];

export { coursesList };
