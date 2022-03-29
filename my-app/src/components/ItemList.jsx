/* Acá se llamará a la API y se renderizarán los "items" a través del map */

import { useState, useEffect } from "react";
import { ItemSContainer } from "../styles/ItemListContainer.style";
import { Item } from "./Item";
import { getCourses } from "../helpers/getData";

export const ItemList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCourses
      .then((resp) => setCourses(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false), []);
  });

  return (
    <ItemSContainer>
      {loading ? (
        <h2>cargando</h2>
      ) : (
        courses.map((course) => (
          <div key={course.id}>
            <Item
              courseName={course.courseName}
              photo={course.photo}
              price={course.price}
            />
          </div>
        ))
      )}
    </ItemSContainer>
  );
};
