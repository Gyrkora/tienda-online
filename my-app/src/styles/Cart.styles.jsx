import styled from 'styled-components'

export const CartContainerProd = styled.div`
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
		grid-template-columns: 65% 35%;
		justify-content: center;
		align-items: center;
		margin: 2rem 1rem;

		img {
			width: 50vmin;
			height: 50vmin;
		}
	}
`

export const CartContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	grid-column: 1 / 2;
`

export const OrdenStyle = styled.div`
	margin: 2rem 0;
	grid-row: 1 / -1;
	grid-column: 2 / 3;
`

export const CartItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 2px solid black;
	margin: 1rem 0;
	padding: 1.5rem;
	border-radius: 1.6rem;

	img {
		max-width: 99%;
		max-height: 90%;
		width: 50vmin;
		height: 50vmin;
		border: 3px solid black;
	}

	@media (min-width: 1006px) {
		display: grid;
		grid-template-columns: 45% 50%;
		justify-content: center;
		align-items: center;

		img {
			width: 50vmin;
			height: 50vmin;
		}
	}
`
