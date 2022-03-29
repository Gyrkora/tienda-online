import { DetailContainer } from "../styles/ItemDetail.styles";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ item }) => {
  return (
    <DetailContainer>
      <img src={item.photo} alt={item.courseName} />
      <h1> {item.courseName} </h1>
      <h3> {item.description} </h3>
      <h3> Price </h3>
      <h4> {item.price} </h4>
      <ItemCount />
    </DetailContainer>
  );
};
