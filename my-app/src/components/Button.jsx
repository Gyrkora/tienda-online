
import { useState } from 'react'
import { ButtonStyled } from '../styles/Button.styles';


export const Button = () => {

const [isShown, setIsShown] = useState(false)
const text =  isShown ? 'Hola! Bienvenidx' : 'Presione el botón';
 
  return (

    <div>
        <ButtonStyled  onClick={ () => setIsShown(!isShown)}>{text}</ButtonStyled>
    </div>
  
    
  )
}
