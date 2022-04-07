
import styled from "styled-components";

export const DetailContainer = styled.div`
    
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: auto 1rem;

`

export const DetailContainerInner = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    img {
        /* max-width: 32rem; */
        /* height: 30rem; */
        max-width: 99%;
        max-height: 90%;

        width: 50vmin;
        height: 50vmin;

        border: 3px solid black;
    }

    
   @media (min-width: 1006px ) { 
    display: grid;
    grid-template-columns: 45% 55%;
    column-gap: 1rem;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    /* margin: 2rem; */

    img{ 
    

        width: 50vmin;
        height: 50vmin;
    }
    
   
 }


`

export const DetailContainerRight = styled.div`

margin-left: 1rem;

`

export const DetailContainerLeft = styled.div`
    
/* max-height: 80%; */
/* margin-left: 1rem 0 1rem 1rem; */
margin-left: 1rem;
padding: 1rem;
`

// img {
        
//     /* max-width: 80rem; */
//     /* max-height: 78rem; */
//     /* height: 100%; */
//     /* width: 100%; */

//     width: 28rem;
//     /* height: 26rem; */
    
//     /* width: 100%; */

//     /* max-width: 95%;
//     max-height: 40%;
//     width: 40rem;
//     height: 38rem; */
//     height: 40vmin;

// }