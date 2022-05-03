import styled from 'styled-components'
import { Button } from '../components/Button'

export const ButtonOriginal = styled(Button)`
	margin: 0 0 1rem 0;
	padding: 0.5rem 1rem;
	color: white;
	background-color: ${(props) => props.bgColor};
	cursor: pointer;
	border-radius: 1rem;
	border: none;
	font-size: 1rem;
	transition: all 0.5s ease-in-out;

	&:hover {
		padding: 0.5rem ${(props) => props.pX};
	}
`

export const ButtonSwitchedContain = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	column-gap: 3rem;
	margin-top: 2rem;
`
