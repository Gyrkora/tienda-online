import styled from "styled-components";

export const ItemSContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
  column-gap: 10rem;
  row-gap: 2rem;

  /* @media (min-width: 768px ) { 
    grid-template-columns: repeat(2, 1fr);
   
 }

@media (min-width: 936px ) { 
    grid-template-columns: repeat(3, 1fr); 
 }  */

  h2 {
    text-align: center;
  }

  h3 {
    color: tomato;
    margin: 10px 0;
  }

  h4 {
    font-weight: 600;
  }

  img {
    height: 15rem;
    width: 17rem;
    border-radius: 1rem;
}


`;
