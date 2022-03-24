/* Acá se creará la estructura del map y se importará ItemCount */


import React from 'react'
import { ItemSContainer } from '../styles/ItemListContainer.style'

import { ItemCount } from './ItemCount'

export const Item = ({ courseName, price, photo, id }) => {
  return (

    <ItemSContainer>
        <div>

        <img src={photo} alt={courseName} />
        <h3>{courseName}</h3>
        <h4>{price}</h4>

        <ItemCount/>
        </div>

    </ItemSContainer>
      
  )
}
