import styled from 'styled-components'

export const InputContainer = styled.div`
	/* border: 2px solid black; */
	margin: 1rem 0;

	input {
		margin-top: 0.5rem;
		padding: 0.5rem 0;
		display: flex;
		align-items: start;
		max-width: 95%;
		width: 15rem;
	}
`

export const OrderFilled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
`

export const FormularioCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	border: 2px solid green;
	margin: 2rem 1rem;
	border-radius: 1rem;

	padding: 2rem;
`
