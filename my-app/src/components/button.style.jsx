import styled from 'styled-components';
import Button from './Button';


export const ButtonStyle = styled(Button)`
    width: 200px;
    height: 50px;
    background-color: lightblue;
    transition: background-color .3s ease-out;
    
    &:hover {
        background-color: tomato;
    }
`;






// export const Button = styled.button`
//     width: 200px;
//     height: 50px;
//     background-color: ${(props) => props.backgroundColor};
//     transition: background-color .5s ease-out;
    

//     &:hover {
//         background-color: red;
//     }
// `;
