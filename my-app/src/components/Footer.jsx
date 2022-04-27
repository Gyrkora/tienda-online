import tow from '../assets/TowTienda.png'
import React from 'react'
import { Flechita, FooterContainer, SocialMedia } from '../styles/Footer.styles'

export const Footer = () => {
	return (
		<FooterContainer>
			<div>
				<img className="App-logoFooter" src={tow} alt="logo" />
			</div>
			<div>
				<h4>Servicios</h4>
				<ul>
					<li>
						<p>Cursos Especializados</p>
					</li>
					<li>
						<p>Clases</p>
					</li>
					<li>
						<p>Clubes de Conversación</p>
					</li>
					<li>
						<p>Audiolibros</p>
					</li>
				</ul>
			</div>

			<div>
				<h4>Contacto</h4>
				<ul>
					<li>
						<p>Merlet 564, Valparaiso. Chile </p>
					</li>
					<li>
						<SocialMedia>
							<i className="fab fa-whatsapp"></i> +569 76450978
						</SocialMedia>
					</li>
				</ul>
			</div>

			<div>
				<h4>Síguenos en:</h4>
				<div>
					<SocialMedia>
						<a href="#">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="#">
							<i className="fab fa-facebook"></i>
						</a>
						<a href="#">
							<i className="fab fa-youtube"></i>
						</a>
					</SocialMedia>
				</div>
			</div>

			<div>
				<a href="#top">
					<Flechita>
						<i className="fas fa-arrow-circle-up"></i>
					</Flechita>
				</a>
			</div>
		</FooterContainer>
	)
}
