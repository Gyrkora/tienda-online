import { ItemDetailContainer } from "../components/ItemDetailContainer";
import { ItemList } from "../components/ItemList";

export const ItemListContainer = () => {
  return (
    <div>
      <h1>Estos son los productos</h1>
      <ItemList />
      
      <ItemDetailContainer id={1}/>

    </div>
  );
};
