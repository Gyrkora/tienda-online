import styled from 'styled-components'

export const HeaderContainer = styled.div`
	margin: 0 auto;
	border: 1px solid gray;
	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;
	background-color: white;
	position: relative;

	@media (min-width: 825px) {
		display: grid;
		grid-template-columns: 50% 50%;
	}

	@media (min-width: 1009px) {
		display: none;
	}
`

export const LetreroContainer = styled.div`
	@media (max-width: 825) {
		h1 {
			display: none;
		}
	}

	@media (min-width: 825px) {
		position: absolute;

		left: 60%;
		bottom: 21%;
	}
`

export const TextHeader = styled.div`
	//el letrero cuadrado
	max-width: 80%;
	width: 30rem;
	height: 8rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2rem auto;
	position: relative;
	border-radius: 1.2rem;

	h1 {
		font-size: 2.5rem;
		margin: 1rem 0;
	}

	@media (min-width: 825px) {
		width: 20rem;
		height: 15rem;
		border: 3px solid #c2b9b4d7;

		h1 {
			font-size: 2.5rem;
			margin: 2rem 0 1rem 0;
		}
	}
`

export const BirdContainer = styled.div`
	//el pajariTOW

	@media (max-width: 825px) {
		display: none;
	}

	position: absolute;
	bottom: 97%;
	left: 70%;

	img {
		height: 3rem;
	}
`
export const LetrasContainer = styled.div`
	margin: 0 auto;
`

export const TroncoLetrero = styled.div`
	//tronco
	position: absolute;
	height: 8.9rem;
	max-height: 100%;
	width: 2.5rem;

	border: 2px solid #c2b9b4d7;

	bottom: -62%;

	@media (max-width: 825px) {
		display: none;
	}
`
