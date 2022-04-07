import React, { useState } from "react";
import { ItemCountContainer } from "../styles/ItemCount.styles";
import ButtonDetail from "./ButtonDetail";

export const ItemCount = ({start, stock, onAdd}) => {
 

  const [count, setCount] = useState(start);

  const noLess =
    count === start ? (ButtonDetail.disabled = true) : (ButtonDetail.disabled = false);

 const noMore =
    count === stock ? (ButtonDetail.disabled = true) : (ButtonDetail.disabled = false);

  const addProduct = (num) => {
    setCount(count + num);//count va a ser el valor de onAdd()
  };

  return (
    <div>
      <ItemCountContainer>
        <button onClick={() => addProduct(-1)} disabled={noLess}>
          -
        </button>
        <h3>{count}</h3>
        <button onClick={() => addProduct(+1)} disabled={noMore}>
          +
        </button>
      </ItemCountContainer>

      <div>
        <ButtonDetail noMore={noMore} onAdd={onAdd} count={count} />
      </div>
    </div>
  );
};
