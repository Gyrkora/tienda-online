import styled from 'styled-components'
import inClass from '../assets/inClass.jpg'

export const IntroContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 80%;
	margin: 5rem auto;

	@media (min-width: 977px) {
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

	max-width: 70%;
	margin: 2rem auto;

	div {
		max-width: 70%;
		margin-top: 1rem;
	}

	img {
		border-radius: 50%;
		border: 1px solid black;
		max-width: 99%;
	}
`

export const HeroContainer = styled.div`
	background-image: url(${inClass});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 55rem;
	max-height: 100%;
	position: relative;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-content: space-around;
	align-items: start;
	padding: 0 2rem;

	div {
		/* margin-top: 5rem; */
		margin: 5rem auto;
		background-color: white;
		max-width: 99%;
		border-radius: 2rem;
		padding: 1rem;
	}

	grid-column-gap: 30rem;

	h1 {
		margin: 0;
	}

	@media (max-width: 1009px) {
		display: none;
	}
`

export const LetrasIntroContainer = styled.div`
	/* 
@media (min-width: 1300px) {

	display: grid;
	grid-template-columns: ;

} */

	padding: 0 !important;

	@media (max-width: 1024px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`
