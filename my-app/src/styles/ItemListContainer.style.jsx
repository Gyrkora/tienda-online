import styled from 'styled-components'

export const ItemSContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, 300px);
	justify-content: center;
	align-items: center;
	padding-bottom: 5rem;
	column-gap: 10rem;
	row-gap: 2rem;

	h2 {
		text-align: center;
	}

	h3 {
		color: #bd1212;
		margin: 10px 0;
	}

	h4 {
		font-weight: 600;
	}

	img {
		height: 15rem;
		width: 17rem;
		padding: 0.5rem;
	}
`
