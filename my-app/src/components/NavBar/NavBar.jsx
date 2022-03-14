import 
{ NavbarContainer, 
  RightContainer, 
  LeftContainer,
NavbarInnerContainer,
NavbarExtendedContainer,  
NavbarLinkContainer} from '../../styles/NavBar.style'

export const NavBar = () => {
  return (
    <div>
      <NavbarContainer>
        <NavbarInnerContainer>
        <LeftContainer>

          <NavbarLinkContainer>
            

          </NavbarLinkContainer>

        </LeftContainer>
        <RightContainer></RightContainer>
        </NavbarInnerContainer>
        <NavbarExtendedContainer></NavbarExtendedContainer>
      </NavbarContainer>
    </div>
  );
};

 
// function Button( { className, buttonLabel }) {
//   return (
//     <button className={className}>{buttonLabel}</button>
//   )
// }
