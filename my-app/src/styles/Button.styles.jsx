import styled from 'styled-components'

export const ButtonStyled = styled.button`
	margin: 0 0 1rem 0;
	padding: 0.5rem 1rem;
	color: white;
	background-color: #bd1212;
	cursor: pointer;
	border-radius: 1rem;
	border: none;
	font-size: 1rem;
	transition: all 0.5s ease-in-out;

	&:hover {
		padding: 0.5rem 6rem;
	}
`

export const ButtonSwitchedContain = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	column-gap: 3rem;
	margin-top: 2rem;
`
