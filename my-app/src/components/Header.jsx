// import tow from '../tow.PNG'
import araucaria from '../assets/araucaria22.svg'
import { Audiolibros } from './Audiolibros'
import { Cursos } from './Cursos'

export const Header = () => {
	return (
		<div>
			<header>
				<h1> Este es el Inicio </h1>
				<img src={araucaria} className="App-logo" alt="logo" />
			</header>

			<h2>Sugeridos para ti</h2>
			<Cursos />
			<h2>Audiolibros</h2>
			<Audiolibros />
		</div>
	)
}

/* className="App-header" */
