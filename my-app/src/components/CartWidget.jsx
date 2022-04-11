import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../context/CartContext";


const element = <FontAwesomeIcon icon={faCartPlus} />;

export const CartWidget = () => {

  
  const { cartList } = useCartContext();
  // console.log(cartList[0].amount  + cartList[1].amount)

  return <div><p>{element}{cartList.length}</p></div>

};
