import styled from 'styled-components'

export const CartContainerGStyle = styled.div`
	background-color: #f2f2f28f;

	h1 {
		margin-top: 0;
		padding-top: 2rem;
	}

	margin: 0;

	span {
		color: #bd1212;
	}
`

export const NoCartItems = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 50vh;
`

export const CartContainerProd = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 95%;
	margin: 0 auto;
	padding-bottom: 3rem;

	img {
		max-width: 99%;
		max-height: 90%;
		width: 50vmin;
		height: 50vmin;
	}

	@media (min-width: 1024px) {
		//lg
		display: grid;
		grid-template-columns: 70% 30%;
		justify-content: center;
		align-items: start;

		img {
			width: 50vmin;
			height: 50vmin;
		}
	}
`

export const CartContainer = styled.div`
	//principal
	display: flex;
	flex-direction: center;

	justify-content: center;
	align-items: center;
	grid-column: 1 / 2;
	margin: 0 auto;
	max-width: 95%;
`

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 99%;
`

export const CartItemContainer = styled.div`
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 1rem 0;
	position: relative;
	padding: 1rem;
	-webkit-box-shadow: 0px 4px 10px -3px rgba(0, 0, 0, 0.57);
	box-shadow: 0px 4px 10px -3px rgba(0, 0, 0, 0.57);
	width: 30rem;
	max-width: 80%;
	i {
		font-size: 1.5rem;
	}

	img {
		max-width: 99%;
		max-height: 90%;
		width: 30vmin;
		height: 30vmin;
	}

	@media (min-width: 768px) {
		width: 60rem;
		max-width: 95%;
		display: grid;
		grid-template-columns: 50% 50%;

		i {
			position: absolute;
			top: -25%;
			right: 0;
			cursor: pointer;
		}
	}

	@media (min-width: 1024px) {
		display: grid;
		grid-template-columns: 40% 60%;
		padding: 1rem;
	}

	@media (min-width: 1300px) {
		justify-content: center;
		align-items: center;
		max-width: 99%;

		img {
			width: 30vmin;
			height: 30vmin;
			padding: 0.5rem;
		}

		i {
			position: absolute;
			top: -100%;
			right: 0;
			cursor: pointer;
		}
	}
`

export const OrderStyle = styled.div`
	grid-row: 3 / -1;
	grid-column: 2 / 3;
	width: 20rem;
	max-width: 95%;
	margin: 0 auto;
`

export const DescriptionCartItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;

	@media (min-width: 1300px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		justify-content: center;
	}
`

export const CartButton = styled.button`
	padding: 0.7rem 2rem;
	margin: 1rem 0 0.5rem 0;
	border: none;
	background-color: #bd9c26;
	color: white;
	border-radius: 10px;
	cursor: pointer;
	transition: all 0.5s ease-in-out;

	&:hover {
		background-color: #bd1212;
		padding: 0.7rem 4rem;
	}
`

export const CartButtonOut = styled(CartButton)`
	padding: 1rem 2rem;
	font-size: 1.1rem;
	margin: 0.5rem;
	background-color: #0eb36d;
	cursor: pointer;

	&:hover {
		background-color: #0e8553;
		transform: scale(1.2);
		padding: 1rem 2rem;
	}
`
