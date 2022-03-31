// import { useParams } from "react-router-dom";
import { ItemList } from "../components/ItemList";

export const ItemListContainer = () => {


  // let {categoriaId} = useParams()
  // console.log( typeof categoriaId);

  return (
    <div>
      <h1>Estos son los cursos</h1>
      <ItemList  />
      
      

    </div>
  );
};
