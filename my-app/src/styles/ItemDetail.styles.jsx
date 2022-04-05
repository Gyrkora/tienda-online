
import styled from "styled-components";

export const DetailContainer = styled.div`
    
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const DetailContainerInner = styled.div`
    
   @media (min-width: 768px ) { 
    display: grid;
    grid-template-columns: 40% 60%;
    column-gap: 4rem;
    justify-content: center;
    align-items: start;
    margin-top: 2rem;

    img {
        height: 28rem;
        width: 30rem;
    }
   
 }


`

export const DetailContainerRight = styled.div`



`

export const DetailContainerLeft = styled.div`
    


`
