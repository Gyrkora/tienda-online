import { ButtonStyled } from '../styles/Button.styles'
import {
	CartContainer,
	CartContainerItem,
	CartContainerProd,
	CartItemContainer,
} from '../styles/Cart.styles'

export const CartItem = ({ item, removeByItem }) => {
	return (
		<CartItemContainer>
			<div>
				<img src={item.photo} alt={item.courseName} />
			</div>

			<div>
				<h1> {item.courseName} </h1>
				<h2> Cantidad: {item.amount} </h2>
				<h4> Precio: {item.amount * item.priceInDollars + ' USD'}</h4>
				<ButtonStyled onClick={() => removeByItem(item.id)}>
					{' '}
					&#10005;
				</ButtonStyled>
			</div>
		</CartItemContainer>
	)
}
