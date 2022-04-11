import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export const Cart = () => {
  const { cartList, removeCart, removeByItem } = useCartContext();

  return (
    <div>
      {cartList.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <h1> {item.courseName} </h1>
              <img src={item.photo} alt={item.courseName} />
              <h2> Cantidad: {item.amount} </h2>
              <button onClick={() => removeByItem(item.id)}>&#10005;</button>
              
            </div>
          </div>
        );
      })}

      {cartList.length ? (
        <button onClick={removeCart}>Vaciar Carrito</button>
      ) : (
        <div>
          <h3>No hay productos para mostrar</h3>
          <Link to='/'>
          <button>Seguí comprando</button>
          
          </Link>
        </div>
      )}
    </div>
  );

};
