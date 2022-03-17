import clases from '../assets/clasesDeEspanol.PNG'
import redTOW from '../assets/redTOW.PNG'
import tertus from '../assets/tertus.PNG'
import { Button } from '../components/Button'
import { ItemSContainer } from '../styles/ItemListContainer.style'


export const ItemListContainer = () => {
  return (

    <>
    
      <Button/>
    <ItemSContainer>
      <img src={clases} alt="" />
      <img src={redTOW} alt="" />
      <img src={tertus} alt="" /> 
    </ItemSContainer>
    </>

  )
}
