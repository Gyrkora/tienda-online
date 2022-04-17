import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cartList, removeCart, removeByItem, totalPrice } = useCartContext();

  return (
    <div>
      {cartList.map((item) => {
        return (
          <CartItem key={item.id} item={item} removeByItem={removeByItem} />
        );
      })}

      {cartList.length ? (
        <div>
          <button onClick={removeCart}>Vaciar Carrito</button>
          <h3> Precio Total: {totalPrice}</h3>
        </div>
      ) : (
        <div>
          <h3>No hay productos para mostrar</h3>
          <Link to="/">
            <button>Seguí comprando</button>
          </Link>
        </div>
      )}
    </div>
  );
};
