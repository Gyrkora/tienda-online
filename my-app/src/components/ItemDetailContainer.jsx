import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { getCourses } from "../helpers/getData";

export const ItemDetailContainer = ({ id }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    getCourses
    .then((resp) => setCourses(getCourseId(id, resp), [id]))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false))
  });
  
  const getCourseId = (id, array) => array.find((course) => course.id === id);



  return (
    <div>
     
     { loading ? <h2>Cargando...</h2> 
     
     :

        <ItemDetail item={courses}/>}
   
    </div>
  );
};

/*    
  {courses ? (
// ) : (
      //   <h1>'aun no hay productos que mostrar' </h1>
      // )} */
