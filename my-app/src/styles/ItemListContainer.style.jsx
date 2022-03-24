import styled from 'styled-components'

export const ItemSContainer = styled.div`

display: grid;
grid-template-columns: 1fr;
justify-content: center;
align-items: center;
/* grid-column-gap: 1rem; */
/* grid-row-gap: 1rem; */
padding-bottom: 5rem;

@media (min-width: 768px ) { 
    grid-template-columns: repeat(2, 1fr);
    
 }

@media (min-width: 936px ) { 
    grid-template-columns: repeat(3, 1fr); 
    grid-gap : 1rem;
 } 
`


/* --------------- Comentarios necesarios --------------- */

/* Cómo poner grid areas con styled components */