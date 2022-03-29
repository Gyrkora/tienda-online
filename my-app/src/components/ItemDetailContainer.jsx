import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { getCourses } from "../helpers/getData";

export const ItemDetailContainer = ({ id }) => {
  const [courses, setCourses] = useState([]);

  
  useEffect(() => {
    getCourses
    .then((resp) => setCourses(getCourseId(id, resp), [id]))
    .catch((err) => console.log(err));
    console.log(courses);
    
  });
  
  const getCourseId = (id, array) => array.find((course) => course.id === id);

  return (
    <div>
      {courses ? (
        <ItemDetail item={courses} />
      ) : (
        <h1>'aun no hay productos que mostrar' </h1>
      )}
    </div>
  );
};
