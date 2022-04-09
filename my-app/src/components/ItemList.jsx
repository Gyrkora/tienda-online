/* Acá se llamará a la API y se renderizarán los "items" a través del map */

import { useState, useEffect } from "react";
import { ItemSContainer } from "../styles/ItemListContainer.style";
import { Item } from "./Item";
import { getCourses } from "../helpers/getData";
import { useParams } from "react-router-dom";

export const ItemList = () => {
  const [categoryCourses, setCategoryCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();


  useEffect(() => {
    getCourses
      .then((resp) =>setCategoryCourses(resp.filter( (curso) => curso.category === categoriaId)) )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoriaId]);


  return (
    <ItemSContainer>
      {loading ? (
        <h2>cargando</h2>
      ) : (
        categoryCourses.map((course) => (
          <div key={course.id}>
            <Item
              courseName={course.courseName}
              photo={course.photo}
              price={course.price}
              id={course.id}
              stock={course.stock}
            />
          </div>
        ))
      )}
    </ItemSContainer>
  );
};
