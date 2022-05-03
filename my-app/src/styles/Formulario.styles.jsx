import styled from 'styled-components'

export const FormularioCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 80%;
	width: 20rem;
	background-color: white;

	p {
		font-size: 1.2rem;
	}

	select {
		margin-top: 0.5rem;
	}

	margin: 1rem 0 2rem 0;

	padding: 2rem;
	-webkit-box-shadow: 0px 4px 10px -3px rgba(0, 0, 0, 0.57);
	box-shadow: 0px 4px 10px -3px rgba(0, 0, 0, 0.57);
`

export const InputContainer = styled.div`
	input {
		margin: 0.5rem 0;
		padding: 0.5rem 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 15rem;
	}

	.label {
		margin-top: 0.5rem;
	}
`

export const OrderFilled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
`

export const FormAlarm = styled.div`
	color: #03b36d;

	font-weight: bold;
	margin-bottom: 1rem;
`
