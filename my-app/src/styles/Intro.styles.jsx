import styled from 'styled-components'
import inClass from '../assets/inClass.jpg'

export const IntroContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 5rem 0 10rem 0;

	@media (min-width: 768px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
`

export const CirculoContainer = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/* margin-bottom: 2rem; */
	max-width: 70%;
	margin: 0 auto;

	div {
		max-width: 60%;
		margin-top: 1rem;
	}

	img {
		border-radius: 50%;
		border: 1px solid black;
	}
`

export const HeroContainer = styled.div`
	background-image: url(${inClass});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 55rem;
	max-height: 100%;
`
