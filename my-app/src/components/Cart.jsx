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
	CartContainer,
	CartContainerProd,
	OrdenStyle,
} from '../styles/Cart.styles'
import { Formulario } from './Formulario'
import { FormularioCard, OrderFilled } from '../styles/Formulario.styles'

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
		<CartContainerProd>
			{cartList.map((item) => {
				return (
					<CartContainer key={item.id}>
						<div>
							<CartItem item={item} removeByItem={removeByItem} />
						</div>
					</CartContainer>
				)
			})}
			{cartList.length ? (
				<OrdenStyle>
					<h3> Precio Total: {totalPrice}</h3>

					<div>
						<Formulario ordenId={ordenID} />
					</div>
					<FormularioCard>
						<button onClick={generarOrden}>Generar orden</button>
						<OrderFilled>
							<p>Número de orden: {ordenID}</p>
						</OrderFilled>
					</FormularioCard>
					<div>
						<button onClick={removeCart}>Terminar la Compra</button>
						<button onClick={removeCart}>Vaciar Carrito</button>
					</div>
				</OrdenStyle>
			) : (
				<OrdenStyle>
					<h3>No hay productos para mostrar</h3>
					<Link to="/">
						<button>Seguí comprando</button>
					</Link>
					{ordenID && (
						<div>
							<p>Gracias por preferirnos!</p>
						</div>
					)}
				</OrdenStyle>
			)}{' '}
		</CartContainerProd>
	)
}
