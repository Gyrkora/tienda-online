import {
	NavbarContainer,
	RightContainer,
	LeftContainer,
	NavbarInnerContainer,
	NavbarExtendedContainer,
	NavbarLinkContainer,
	NavbarLink,
	OpenLinksButton,
	NavbarRLink,
	Logo,
} from '../styles/NavBar.style'
import { useState } from 'react'
import { CartWidget } from './CartWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {
	const [showNavbar, setShowNavbar] = useState(false)

	return (
		<div>
			<NavbarContainer showNavbar={showNavbar}>
				<NavbarInnerContainer>
					<LeftContainer>
						<NavbarLinkContainer>
							<NavbarLink to="/">Inicio</NavbarLink>
							<NavbarLink to="/categoria/Cursos">Cursos</NavbarLink>
							<NavbarLink to="/categoria/Audiolibros">Audiolibros</NavbarLink>
							{/* <NavbarLink to="/categoria/Libros">Libros</NavbarLink> */}
							{/* <NavbarLink to="/categoria/Arte">Arte</NavbarLink> */}
							<OpenLinksButton
								onClick={() => {
									setShowNavbar(
										(current) => !current
									) /* el estado se vuelve verdadero */
								}}
							>
								{showNavbar ? <>&#10005;</> : <>&#8801;</>}
							</OpenLinksButton>
						</NavbarLinkContainer>
					</LeftContainer>
					<RightContainer>
						<Logo>
							<Link to="./cart">
								<CartWidget />
							</Link>
						</Logo>
					</RightContainer>
				</NavbarInnerContainer>

				{showNavbar && (
					<NavbarExtendedContainer>
						<NavbarRLink to="/">Inicio</NavbarRLink>
						<NavbarRLink to="/categoria/Cursos">Cursos</NavbarRLink>
						<NavbarRLink to="/categoria/Audiolibros">Audiolibros</NavbarRLink>
						{/* <NavbarRLink to="/Libros">Libros</NavbarRLink> */}
						{/* <NavbarRLink to="/Arte">Arte</NavbarRLink> */}
					</NavbarExtendedContainer>
				)}
			</NavbarContainer>
		</div>
	)
}
