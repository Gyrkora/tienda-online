/* Acá se creará la estructura del map y se importará ItemCount */

import { ItemCount } from "./ItemCount";

export const Item = ({ courseName, price, photo, id }) => {
  return (
    <div>
      <img src={photo} alt={courseName} />
      <h3>{courseName}</h3>
      <h4>{price}</h4>

      <ItemCount />
    </div>
  );
};
