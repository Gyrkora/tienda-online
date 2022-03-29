import { useState, useEffect } from "react";

import { coursesList } from "../data/data";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [courses, setCourses] = useState([]);

  const getCourses = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(coursesList);
    }, 2000);
    reject("El curso no está disponible");
  });

  const getCourseId = (id) =>
    courses.find((course) => course.id === id);

  useEffect(() => {
    getCourses
      .then((resp) => setCourses(getCourseId(resp.id)), [])
      .catch((err) => console.log(err));
});

console.log(courses)

  return (


  <div>
      { courses ? <ItemDetail item={courses} /> : <h1>'aun no hay productos que mostrar' </h1>  }

  </div>
  )
  
};
