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
						<h3>
							<span>Título:</span> {item.courseName}{' '}
						</h3>
						<h3>
							<span>Categoría:</span> {item.category}
						</h3>
					</div>

					<div>
						<div>
							<h3>
								<span>Cantidad:</span> {item.amount}
							</h3>
						</div>
						<h3>
							<span>Precio:</span> {item.amount * item.priceInDollars + ' USD'}
						</h3>
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
