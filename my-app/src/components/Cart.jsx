import { useCartContext } from "../context/CartContext";

export const Cart = () => {
  const { cartList, removeCart } = useCartContext();

  

  return (
    <div>
      {cartList.map((item) => (
        <div key={item.id}>
          <div>
            <h1> {item.courseName} </h1>
            <img src={item.photo} alt={item.courseName} />
            <h2> Cantidad: {item.amount} </h2>
          </div>
        </div>
      ))}

      <button onClick={removeCart}>Vaciar Carrito</button>
    </div>
  );
};
