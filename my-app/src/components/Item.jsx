import { Link } from 'react-router-dom'
import { ButtonOriginal } from '../styles/Button.styles'

export const Item = ({ courseName, price, photo, id, stock }) => {
	return (
		<div>
			<img src={photo} alt={courseName} />
			<Link to={`/detalle/${id}`}>
				<h3>{courseName}</h3>
			</Link>
			<h4>{price}</h4>

			<Link to={`/detalle/${id}`}>
				<ButtonOriginal
					bgColor={'#bd1212'}
					pX={'2rem'}
					label={'ver más'}
				></ButtonOriginal>
			</Link>
		</div>
	)
}
