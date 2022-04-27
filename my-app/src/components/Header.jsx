// import tow from '../tow.PNG'
import araucaria from '../assets/araucaria22.svg'
import { HeaderContainer } from '../styles/Header.styles'

export const Header = () => {
	return (
		<div>
			<HeaderContainer>
				<h1> Tienda The Other Way Spanish </h1>
				<img src={araucaria} className="App-logo" alt="logo" />
			</HeaderContainer>
		</div>
	)
}

/* className="App-header" */
