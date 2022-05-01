import React from 'react'
import {
	CirculoContainer,
	HeroContainer,
	IntroContainer,
	LetrasIntroContainer,
} from '../styles/Intro.styles'
import tow from '../tow.PNG'
import libros from '../assets/4.png'
import lapiz from '../assets/555.png'
import clubesBanner from '../assets/clubesBanner.png'
import letras from '../assets/LetrasTOW.png'

export const Intro = () => {
	return (
		<div>
			<HeroContainer>
				<div>
					<h1>
						Bienvenida a <br></br> la Tienda 🏠...
					</h1>
				</div>
				<LetrasIntroContainer className="letrasBg">
					<img src={letras} alt="letras" />
					<img src={tow} alt="tow" className="App-logoFooter" />
				</LetrasIntroContainer>
			</HeroContainer>
			<h2>Programas permanentes</h2>

			<IntroContainer>
				<CirculoContainer>
					<img src={lapiz} alt="lapiz" />
					<div>
						<p>
							En las clases personalizadas se toman en cuenta el nivel; las
							prioridades y necesidades del/la estudiante; sus creencias e
							intereses; y sus estilos de aprendizaje.
						</p>
					</div>
				</CirculoContainer>
				<CirculoContainer>
					<img src={libros} alt="libros" />
					<div>
						<p>
							Recibe todas las semanas una tarea de redacción y lectura que te
							ayudará a comprender mejor el español y la cultura
							latinoamericana.
						</p>
					</div>
				</CirculoContainer>
			</IntroContainer>
		</div>
	)
}
