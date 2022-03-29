import { DetailContainer } from "../styles/ItemDetail.styles"
import { ItemCount } from "./ItemCount"



export const ItemDetail = ({ item }) => {
  return (
    <DetailContainer>
        <h1> {item.courseName} </h1>
        <img src={item.photo} alt={item.courseName} />
        <h3> {item.description} </h3>
        <h4> {item.price} </h4>
        <ItemCount/>

    </DetailContainer>
  )
}
