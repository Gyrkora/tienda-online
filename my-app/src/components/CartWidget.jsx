import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../context/CartContext";


const element = <FontAwesomeIcon icon={faCartPlus} />;

export const CartWidget = () => {

  const { cartList } = useCartContext();

  return <div><p>{element}{cartList.length}</p></div>;
};
