import React, { useState } from "react";
import { ItemCountContainer } from "../styles/ItemCount.styles";
import ButtonDetail from "./ButtonDetail";

export const ItemCount = (start, stock, addProduct) => {
  start = 1;
  stock = 10;

  const [count, setCount] = useState(start);

  const noLess =
    count === start ? (ButtonDetail.disabled = true) : (ButtonDetail.disabled = false);

 const noMore =
    count === stock ? (ButtonDetail.disabled = true) : (ButtonDetail.disabled = false);

  addProduct = (num) => {
    setCount(count + num);
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

      {/* <div>
        <ButtonDetail noMore={noMore} />
      </div> */}
    </div>
  );
};
