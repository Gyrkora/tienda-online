export const CartItem = ({ item, removeByItem }) => {
  return (
    <div>
      <div>
        <h1> {item.courseName} </h1>
        <img src={item.photo} alt={item.courseName} />
        <h2> Cantidad: {item.amount} </h2>
        <h4> Precio: {item.amount * item.priceInDollars + " USD"}</h4>
        <button onClick={() => removeByItem(item.id)}>&#10005;</button>
      </div>
    </div>
  );
};
