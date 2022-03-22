import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";




const element = <FontAwesomeIcon icon={faCartPlus} />;

export const CartWidget = () => {
  return <div>{element}</div>;
};
