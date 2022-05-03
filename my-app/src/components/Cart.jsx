import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import { CartItem } from './CartItem'
import {
	addDoc,
	collection,
	documentId,
	getDocs,
	getFirestore,
	query,
	where,
	writeBatch,
} from 'firebase/firestore'
import { useState } from 'react'
import {
	CartButton,
	CartButtonOut,
	CartContainer,
	CartContainerGStyle,
	CartContainerProd,
	NoCartItems,
	OrderStyle,
} from '../styles/Cart.styles'
import { Formulario } from './Formulario'
import {
	FormAlarm,
	FormularioCard,
	OrderFilled,
} from '../styles/Formulario.styles'

export const Cart = () => {
	const { cartList, removeCart, removeByItem, totalPrice } = useCartContext()
	const [ordenID, setOrdenID] = useState('')

	const generarOrden = async (event) => {
		event.preventDefault()

		let orden = {}

		orden.buyer = {
			firstName: 'Gyrkora',
			email: 'Gy@gmail.com',
			phone: '1194054346',
		}

		orden.total = totalPrice

		orden.items = cartList.map((cartItem) => {
			const id = cartItem.id
			const nombre = cartItem.courseName
			const precio = cartItem.priceInDollars * cartItem.amount

			return { id, nombre, precio }
		})

		// # document creation
		const db = getFirestore()
		const queryCollection = collection(db, 'orders')
		await addDoc(queryCollection, orden).then(({ id }) => setOrdenID(id))

		//# actualizando el stock
		const queryCollectionStock = collection(db, 'cursos')
		const queryActulizarStock = await query(
			queryCollectionStock,
			where(
				documentId(),
				'in',
				cartList.map((it) => it.id)
			)
		)

		const batch = writeBatch(db)
		await getDocs(queryActulizarStock)
			.then((resp) =>
				resp.docs.forEach((res) =>
					batch.update(res.ref, {
						stock:
							res.data().stock -
							cartList.find((item) => item.id === res.id).amount,
					})
				)
			)
			.finally(() => console.log('actulalizado'))

		batch.commit()
	}

	return (
		<CartContainerGStyle>
			<h1>Carrito</h1>

			{cartList.length === 0 && (
				<NoCartItems>
					<h3>No hay productos para mostrar</h3>
					<Link to="/">
						<button>Seguí comprando</button>
					</Link>
					{ordenID && (
						<FormAlarm>
							<p>Gracias por preferirnos!</p>
						</FormAlarm>
					)}
				</NoCartItems>
			)}

			<CartContainerProd>
				{cartList.map((item) => {
					return (
						<CartContainer key={item.id}>
							<CartItem item={item} removeByItem={removeByItem} />
						</CartContainer>
					)
				})}
				{cartList.length ? (
					<OrderStyle>
						<div>
							<Formulario ordenId={ordenID} />
						</div>
						<FormularioCard>
							<CartButton onClick={generarOrden}>Generar orden</CartButton>
							<OrderFilled>
								<p>Número de orden: {ordenID}</p>
							</OrderFilled>
						</FormularioCard>
						<div>
							<h3> Precio Total: {totalPrice} USD</h3>
							<CartButtonOut onClick={removeCart}>Ir al Checkout</CartButtonOut>
						</div>
					</OrderStyle>
				) : (
					<div></div>
				)}
			</CartContainerProd>
		</CartContainerGStyle>
	)
}
