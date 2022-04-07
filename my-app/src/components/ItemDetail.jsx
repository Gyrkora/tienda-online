import {
  DetailContainer,
  DetailContainerInner,
  DetailContainerLeft,
  DetailContainerRight,
} from "../styles/ItemDetail.styles";
import { ItemCount } from "./ItemCount";
import { onAdd } from "../helpers/functions";

export const ItemDetail = ({ item }) => {

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
          <ItemCount stock={item.stock} start={1} onAdd={onAdd}/>
          
        </DetailContainerRight>
      </DetailContainerInner>
    </DetailContainer>
  );
};


