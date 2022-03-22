import clases from "../assets/clasesDeEspanol.PNG";
import redTOW from "../assets/redTOW.PNG";
import tertus from "../assets/tertus.PNG";
// import { Button } from "../components/Button";
import { ItemCount } from "../components/ItemCount";
import { ItemSContainer } from "../styles/ItemListContainer.style";

export const ItemListContainer = () => {
  return (
    <>
      <ItemSContainer>
        <div>
          <img src={clases} alt="" />
          <ItemCount/>
        </div>
        <div>
          <img src={redTOW} alt="" />
          <ItemCount/>
        </div>

        <div>
          <img src={tertus} alt="" />
          <ItemCount/>
        </div>
      </ItemSContainer>
    </>
  );
};
