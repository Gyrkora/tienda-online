import React from 'react'
import {
	CirculoContainer,
	HeroContainer,
	IntroContainer,
} from '../styles/Intro.styles'
import libros from '../assets/4.png'
import lapiz from '../assets/555.png'

export const Intro = () => {
	return (
		<div>
			{/* <h2>¿Estás buscando aprender español?</h2> */}
			<HeroContainer></HeroContainer>

			<IntroContainer>
				<CirculoContainer>
					<img src={lapiz} alt="lapiz" />
					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
							tenetur obcaecati unde cum ipsum animi qui sequi! Beatae accusamus
						</p>
					</div>
				</CirculoContainer>
				<CirculoContainer>
					<img src={libros} alt="libros" />
					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Laboriosam consequatur alias quibusdam voluptas
						</p>
					</div>
				</CirculoContainer>
			</IntroContainer>
		</div>
	)
}
