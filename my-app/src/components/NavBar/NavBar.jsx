import {
  NavbarContainer,
  RightContainer,
  LeftContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarRLink,
} from "../../styles/NavBar.style";
import { useState } from "react";

export const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div>
      <NavbarContainer showNavbar={showNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <NavbarLink to="/">Inicio</NavbarLink>
              <NavbarLink to="/Cursos">Cursos</NavbarLink>
              <NavbarLink to="/Audiolibros">Audiolibros</NavbarLink>
              <NavbarLink to="/Libros">Libros</NavbarLink>
              <NavbarLink to="/Arte">Arte</NavbarLink>
              <OpenLinksButton
                onClick={() => {
                  setShowNavbar((current) => !current);/*  el estado se vuelve verdadero */
                }}
              >
                {showNavbar ? <>&#10005;</> : <>&#8801;</>} 
              </OpenLinksButton>
            </NavbarLinkContainer>
          </LeftContainer>
          <RightContainer>
            <Logo>TOW</Logo>
          </RightContainer>
        </NavbarInnerContainer>

        {showNavbar && (
          <NavbarExtendedContainer>
            <NavbarRLink to="/">Inicio</NavbarRLink>
            <NavbarRLink to="/Cursos">Cursos</NavbarRLink>
            <NavbarRLink to="/Audiolibros">Audiolibros</NavbarRLink>
            <NavbarRLink to="/Libros">Libros</NavbarRLink>
            <NavbarRLink to="/Arte">Arte</NavbarRLink>
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
    </div>
  );
};

// function Button( { className, buttonLabel }) {
//   return (
//     <button className={className}>{buttonLabel}</button>
//   )
// }
