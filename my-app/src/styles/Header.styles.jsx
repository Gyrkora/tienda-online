import styled from 'styled-components'

export const HeaderContainer = styled.div`
	border: 1px solid gray;
	position: relative;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	justify-content: center;
	background-color: white;
`

export const TextHeader = styled.div`
	max-width: 80%;
	width: 20rem;
	height: 15rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	position: relative;
	border-radius: 1.2rem;

	border: 3px solid #c2b9b4d7;
	h1 {
		font-size: 2.5rem;
		margin: 2rem 0 1rem 0;
	}
`

export const BirdContainer = styled.div`
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
	position: absolute;
	height: 8.9rem;
	max-height: 100%;
	width: 2.5rem;

	border: 2px solid #c2b9b4d7;

	bottom: -62%;
`
