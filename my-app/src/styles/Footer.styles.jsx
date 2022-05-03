import styled from 'styled-components'

export const FooterContainer = styled.div`
	background-color: #bd1212;
	display: flex;
	justify-content: center;
	flex-direction: column;

	align-items: center;
	gap: 1rem;
	padding: 1rem 0;
	color: white;

	h4 {
		color: white;
		font-weight: normal;
	}

	i {
		color: red;
		font-size: 1.5rem;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	@media (min-width: 992px) {
		justify-content: space-around;
		flex-direction: row;
		align-items: start;
	}
`

export const Flechita = styled.div`
	padding-top: 1.2rem;

	i {
		font-size: 2rem;
		color: white;
	}
`

export const SocialMedia = styled.div`
	i {
		font-size: 1.5rem;
		padding: 0 1rem;
		cursor: pointer;
	}

	.fa-facebook {
		color: #223f7a;
	}

	.fa-instagram {
		color: #3d1711;
	}

	.fa-youtube {
		color: #64212f;
	}

	.fa-whatsapp {
		color: #032b26;
		padding: 0 !important;
	}
`
