/* Acá se llamará a la API y se renderizarán los "items" a través del map */

import { useState, useEffect } from "react";
import { ItemSContainer } from "../styles/ItemListContainer.style";
import { Item } from "./Item";
import { getCourses } from "../helpers/getData";
import { resolvePath, useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
// import { fires }

export const ItemList = () => {
  const [categoryCourses, setCategoryCourses] = useState([]);

  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();

  // useEffect(() => {
  //   const querydb = getFirestore();
  //   const queryCollection = collection(querydb, "cursos");
  //   getDocs(queryCollection) // promise
  //     .then((resp) =>
  //       setCategoryCourses(
  //         resp.docs.map((course) => ({ id: course.id, ...course.data() }))
  //       )
  //     )
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "cursos");
    const queryFilter = query(
      queryCollection,
      where("category", "==", categoriaId) //se puede agrupar muchos
      // limit(1),
      // orderBy("courseName", "asc")
    );

    getDocs(queryFilter) // promise
      .then((resp) =>
        setCategoryCourses(
          resp.docs.map((course) => ({ id: course.id, ...course.data() }))
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  // useEffect(() => {
  //   getCourses
  //     .then((resp) =>
  //       setCategoryCourses(
  //         resp.filter((curso) => curso.category === categoriaId)
  //       )
  //     )
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, [categoriaId]);

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
            />
          </div>
        ))
      )}
    </ItemSContainer>
  );
};
