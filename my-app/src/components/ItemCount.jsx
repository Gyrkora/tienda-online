import React, { useState } from "react";
import { ItemCountContainer } from "../styles/ItemCount.styles";
import { Button } from "./Button";

export const ItemCount = () => {
  const start = 0;

  const [count, setCount] = useState(start);

  const addProduct = (num) => {
    setCount(count + num);
  };

  return (
    <div>
      <ItemCountContainer>
        <button
          onClick={() => addProduct(-1)}
          disabled={
            count === start
              ? (Button.disabled = true)
              : (Button.disabled = false)
          }
        >
          -
        </button>
        <h3>{count}</h3>
        <button onClick={() => addProduct(+1)}>+</button>
      </ItemCountContainer>

      <div>
        <Button />
      </div>
    </div>
  );
};
