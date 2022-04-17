import {
  DetailContainer,
  DetailContainerInner,
  DetailContainerLeft,
  DetailContainerRight,
} from "../styles/ItemDetail.styles";
import { ItemCount } from "./ItemCount";
import { useCartContext } from "../context/CartContext";
// import { getStorage, ref } from "firebase/storage";

// // Create a root reference
// const storage = getStorage();

// // Create a reference to 'mountains.jpg'
// const menique = ref(storage, 'meniqueAL.jpg');

export const ItemDetail = ({ item }) => {
  const { addToCart } = useCartContext();

  const onAdd = (count) => {
    console.log(count);
    addToCart({ ...item, amount: count }, count);
  };

  return (
    <DetailContainer>
      <DetailContainerInner>
        <DetailContainerLeft>
          <img src={item.photo} alt={item.courseName} />
        </DetailContainerLeft>

        <DetailContainerRight>
          <h1> {item.courseName} </h1>
          <h3> {item.description} </h3>
          <h3> Precio </h3>
          <h4> {item.price} </h4>

          <ItemCount stock={item.stock} start={1} onAdd={onAdd} />
        </DetailContainerRight>
      </DetailContainerInner>
    </DetailContainer>
  );
};
