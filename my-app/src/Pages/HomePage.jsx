// import tow from '../tow.PNG'
import { Audiolibros } from '../components/Audiolibros'
import { Cursos } from '../components/Cursos'
import { Header } from '../components/Header'
import { Intro } from '../components/Intro'
import { HomePageContainer, TitulosHomePage } from '../styles/HomePage.styles'

export const HomePage = () => {
	return (
		<HomePageContainer>
			<Header />

			<Intro />

			<TitulosHomePage>
				<h2>Muchos compraron</h2>
			</TitulosHomePage>
			<Cursos />

			<TitulosHomePage>
				<h2>Audiolibros</h2>
			</TitulosHomePage>
			<Audiolibros />
		</HomePageContainer>
	)
}
