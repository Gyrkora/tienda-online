import { coursesList } from "../data/data";

export const getCourses = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(coursesList);
    }, 2000);
  } else {
    reject("Los cursos no están disponibles");
  }
});

