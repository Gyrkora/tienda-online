import styled from 'styled-components'

export const CartContainerGStyle = styled.div`
	background-color: #f2f2f28f;

	h1 {
		margin-top: 0;
		padding-top: 2rem;
	}

	margin: 0;
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
	display: grid;
	grid-template-columns: 50% 50%;
	justify-content: center;
	align-items: center;
	margin: 1rem 0;
	position: relative;
	padding: 1rem;
	-webkit-box-shadow: 0px 4px 10px -3px rgba(0, 0, 0, 0.57);
	box-shadow: 0px 4px 10px -3px rgba(0, 0, 0, 0.57);
	/* max-width: 30rem; */
	max-width: 99%;
	i {
		position: absolute;
		top: -7%;
		right: 0;
		font-size: 1.5rem;
		cursor: pointer;
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

		i {
			top: -35%;
		}
	}

	@media (min-width: 1024px) {
		/* width: 60rem; */
		max-width: 95%;
		display: grid;
		grid-template-columns: 40% 60%;
		padding: 1rem;
	}

	@media (min-width: 1300px) {
		justify-content: center;
		align-items: center;
		max-width: 99%;
		/* width: 100rem; */

		img {
			width: 30vmin;
			height: 30vmin;
			padding: 0.5rem;
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
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	justify-content: center;
	position: relative;
`

export const CartButton = styled.button`
	padding: 0.7rem 2rem;
	margin: 1rem 0 0.5rem 0;
	border: none;
	background-color: #ff7961;
	color: white;
	border-radius: 10px;
	cursor: pointer;
	transition: all 0.5s ease-in-out;

	&:hover {
		background-color: #b33620;
		padding: 0.7rem 4rem;
	}
`

export const CartButtonOut = styled.button`
	padding: 1rem 2rem;
	font-size: 1.1rem;
	margin: 0.5rem;
	border: none;
	background-color: #0eb36d;
	color: white;
	border-radius: 10px;
	cursor: pointer;
	transition: all 0.5s ease-in-out;

	&:hover {
		background-color: #0e8553;
		transform: scale(1.2);
	}
`
