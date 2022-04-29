import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	CardContainer,
	CartItemContainer,
	DescriptionCartItem,
} from '../styles/Cart.styles'

export const CartItem = ({ item, removeByItem }) => {
	return (
		<CardContainer>
			<CartItemContainer>
				<div>
					<h2>
						{item.type}: {item.courseName}
					</h2>
					<img src={item.photo} alt={item.courseName} />
				</div>

				<DescriptionCartItem>
					<div>
						<h3> Título: {item.courseName} </h3>
						<h4> Categoría: {item.category}</h4>
					</div>

					<div>
						<h3> Cantidad: {item.amount} </h3>
					</div>

					<div>
						<h4> Precio: {item.amount * item.priceInDollars + ' USD'}</h4>
					</div>

					<i
						onClick={() => removeByItem(item.id)}
						className="fa-solid fa-trash-can"
					></i>
				</DescriptionCartItem>
			</CartItemContainer>
		</CardContainer>
	)
}
