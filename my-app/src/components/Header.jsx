import tow from '../tow.PNG'
import araucaria from '../assets/araucaria2.svg'
import letras from '../assets/LetrasTOW.png'
import blackBird from '../assets/blackBird.svg'
import {
	BirdContainer,
	HeaderContainer,
	LetrasContainer,
	LetreroContainer,
	TextHeader,
	TroncoLetrero,
} from '../styles/Header.styles'

export const Header = () => {
	return (
		<div>
			<HeaderContainer>
				<LetreroContainer>
					<TextHeader>
						<h1>Tienda</h1>
						<LetrasContainer>
							<img src={letras} alt="letras" />
						</LetrasContainer>
						<BirdContainer>
							<img src={blackBird} alt="lapiz" />
						</BirdContainer>
						<TroncoLetrero></TroncoLetrero>
					</TextHeader>
				</LetreroContainer>

				<img src={araucaria} className="App-logo" alt="logo" />
			</HeaderContainer>
		</div>
	)
}
