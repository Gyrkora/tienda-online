/* Acá se creará la estructura del map y se importará ItemCount */

import { Link } from "react-router-dom";
import { ButtonStyled } from "../styles/Button.styles";
import { ItemCount } from "./ItemCount";
// import {noMore} from './ItemCount'



export const Item = ({ courseName, price, photo, id }) => {
  return (
    <div>
      <img src={photo} alt={courseName} />
      <Link to={`/detalle/${id}`}>
        <h3>{courseName}</h3>
      </Link>
      <h4>{price}</h4>

      <ItemCount />
      <ButtonStyled >Agregar</ButtonStyled>
    </div>
  );
};
