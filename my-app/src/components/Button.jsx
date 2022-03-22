
import { ButtonStyled } from '../styles/Button.styles';


export const Button = ({noMore}) => {


const text = 'Agregar'
 
  return (

    <div>
        <ButtonStyled disabled={noMore} >{text}</ButtonStyled>
    </div>
  
    
  )
}
