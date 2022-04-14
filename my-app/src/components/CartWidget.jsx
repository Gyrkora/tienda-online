import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../context/CartContext";
import { CartWidgetDisabled, CartWidgetAbled } from "../styles/CartWidget.styles";


const element = <FontAwesomeIcon icon={faCartPlus} />;

export const CartWidget = () => {
  
  const { cartList, totalItems } = useCartContext();

  return  (
  <div>
    {cartList.length === 0 && <CartWidgetDisabled><p>{element}</p></CartWidgetDisabled>}
    {cartList.length !== 0 && <CartWidgetAbled><p>{element}{totalItems}</p></CartWidgetAbled>}
  </div>)
};
