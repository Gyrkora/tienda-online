import clases from '../assets/clasesDeEspanol.PNG'
import redTOW from '../assets/redTOW.PNG'
import tertus from '../assets/tertus.PNG'
import { ItemSContainer } from '../styles/ItemListContainer.style'

export const ItemListContainer = () => {
  return (

    <ItemSContainer>
      <img src={clases} alt="" />
      <img src={redTOW} alt="" />
      <img src={tertus} alt="" /> 
    </ItemSContainer>

  )
}
