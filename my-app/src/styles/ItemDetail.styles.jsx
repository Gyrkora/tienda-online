import styled from 'styled-components'

export const DetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 5rem 1rem;
`

export const DetailContainerInner = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		max-width: 99%;
		max-height: 90%;

		width: 50vmin;
		height: 50vmin;

		border: 3px solid black;
	}

	@media (min-width: 1006px) {
		display: grid;
		grid-template-columns: 45% 55%;
		column-gap: 1rem;
		justify-content: center;
		align-items: center;

		img {
			width: 50vmin;
			height: 50vmin;
		}
	}
`

export const DetailContainerRight = styled.div`
	margin-left: 1rem;
	h4 {
		color: tomato;
	}
`

export const DetailContainerLeft = styled.div`
	margin-left: 1rem;
	padding: 1rem;
`
