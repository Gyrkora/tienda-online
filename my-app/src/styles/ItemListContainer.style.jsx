import styled from 'styled-components'

export const ItemSContainer = styled.div`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 1rem;
padding-bottom: 5rem;

@media (min-width: 768px ) { 
    flex-direction: row;
 }

/* @media (min-width: 936px ) { 
    grid-template-columns: repeat(3, 1fr); 
    grid-gap : 1rem;
 }  */
`


/* --------------- Comentarios necesarios --------------- */

/* Cómo poner grid areas con styled components */