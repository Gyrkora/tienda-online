import { ButtonStyled, ButtonSwitchedContainer } from "../styles/Button.styles";
import { useState } from "react";
import { Link } from "react-router-dom";

const ButtonSwitched = () => {
  return (
    <ButtonSwitchedContainer>
      <Link to="/cart">
        <ButtonStyled onClick={() => console.log("ir a cart")}>
          Terminar compra
        </ButtonStyled>
      </Link>

      <Link to="/">
        <ButtonStyled onclick={() => console.log("ir a home")}>
          Seguir comprando
        </ButtonStyled>
      </Link>
    </ButtonSwitchedContainer>
  );
};




const ButtonDetail = ({ noMore }) => {
  const [ButtonType, setButtonType] = useState(true);

  const handleInter = () => {
    setButtonType(false);
  };

  return (
    <div>
      {ButtonType ? 
        <ButtonStyled onClick={handleInter} disabled={noMore}>Agregar al Carrito</ButtonStyled>
       : (
        <ButtonSwitched disabled={noMore} />
      )}
    </div>
  );

       }


export default ButtonDetail 

// {ButtonType ? 
//   <ButtonStyled onClick={handleInter} disabled={noMore}>Agregar al Carrito</ButtonStyled>
//  : (
//   <ButtonSwitched disabled={noMore} />
// )}