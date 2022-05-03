import { ButtonOriginal, ButtonSwitchedContain } from '../styles/Button.styles'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ButtonSwitched = () => {
	return (
		<ButtonSwitchedContain>
			<Link to="/cart">
				<ButtonOriginal
					bgColor={'#bd9c26'}
					pX={'2rem'}
					label={'Ir al carrito 🛒'}
					onClick={() => console.log('ir a cart')}
				></ButtonOriginal>
			</Link>

			<Link to="/">
				<ButtonOriginal
					bgColor={'#bd1212'}
					pX={'2rem'}
					label={'Seguir comprando'}
					onClick={() => console.log('ir a home')}
				></ButtonOriginal>
			</Link>
		</ButtonSwitchedContain>
	)
}

const ButtonDetail = ({ noMore, onAdd, count }) => {
	const [ButtonType, setButtonType] = useState(true)

	const handleInter = () => {
		onAdd(count)
		setButtonType(false)
	}

	return (
		<div>
			{ButtonType ? (
				<ButtonOriginal
					bgColor={'#bd1212'}
					pX={'2rem'}
					label={'Agregar'}
					onClick={handleInter}
					disabled={noMore}
				></ButtonOriginal>
			) : (
				<ButtonSwitched disabled={noMore} />
			)}
		</div>
	)
}

export default ButtonDetail
