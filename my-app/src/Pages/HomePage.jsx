// import tow from '../tow.PNG'
import { Audiolibros } from '../components/Audiolibros'
import { Cursos } from '../components/Cursos'
import { Header } from '../components/Header'

export const HomePage = () => {
	return (
		<div>
			<Header />

			<h2>Sugeridos para ti</h2>
			<Cursos />
			<h2>Audiolibros</h2>
			<Audiolibros />
		</div>
	)
}

/* className="App-header" */
