import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

export const NavbarContainer = styled.nav`
	width: 100%;
	height: ${(props) => (props.showNavbar ? '23rem' : '80px')};
	background-color: #bd1212;
	display: flex;
	flex-direction: column;
	transition: all 0.7s ease-in-out;

	@media (min-width: 700px) {
		height: 80px;
	}
`

export const LeftContainer = styled.div`
	flex: 70%;
	display: flex;
	align-items: center;
	padding-left: 5%;
`
export const RightContainer = styled.div`
	flex: 30%;
	display: flex;
	justify-content: flex-end;
	padding-right: 50px;
`

export const NavbarInnerContainer = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
`

export const NavbarLinkContainer = styled.div`
	display: flex;
`

export const NavbarLink = styled(NavLink)`
	color: white;
	font-size: x-large;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	margin: 10px;

	@media (max-width: 700px) {
		display: none;
	}
`

export const NavbarRLink = styled(Link)`
	color: white;
	font-size: x-large;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	margin: 10px;
`

export const Logo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	font-size: 2.5rem;
	font-weight: bold;
	color: #70151b;
`

export const OpenLinksButton = styled.button`
	width: 70px;
	height: 50px;
	background: none;
	border: none;
	color: white;
	font-size: 45px;
	cursor: pointer;

	@media (min-width: 700px) {
		display: none;
	}
`

export const NavbarExtendedContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 700px) {
		display: none;
	}
`
