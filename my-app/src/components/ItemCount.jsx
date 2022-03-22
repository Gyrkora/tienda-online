import React, { useState } from "react";
import { ItemCountContainer } from "../styles/ItemCount.styles";
import { Button } from "./Button";

export const ItemCount = ( start, stock, addProduct ) => {

  start = 1;
  stock = 10;

  const [count, setCount] = useState(start);

  const noLess =
    count === start ? (Button.disabled = true) : (Button.disabled = false);

  const noMore =
    count === stock ? (Button.disabled = true) : (Button.disabled = false);


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

      <div>
        <Button noMore={noMore} />
      </div>
    </div>
  );
};
