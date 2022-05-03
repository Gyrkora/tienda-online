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

							<OpenLinksButton
								onClick={() => {
									setShowNavbar((current) => !current)
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
					</NavbarExtendedContainer>
				)}
			</NavbarContainer>
		</div>
	)
}
