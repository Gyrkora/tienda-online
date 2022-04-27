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
import { DetailContainerInner } from '../styles/ItemDetail.styles'
import {
	CartContainer,
	CartContainerProd,
	OrdenStyle,
} from '../styles/Cart.styles'
import { Formulario } from './Formulario'

export const Cart = () => {
	const { cartList, removeCart, removeByItem, totalPrice } = useCartContext()
	const [ordenID, setOrdenID] = useState('')

	const generarOrden = async (e) => {
		e.preventDefault()

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
		const db = getFirestore() //se consigue el storage
		const queryCollection = collection(db, 'orders') //se crea la colección
		await addDoc(queryCollection, orden) //agregar el archivo orden a orders //promise
			.then(({ id }) => setOrdenID(id))

			.finally(removeCart())

		//# actualizando el stock

		const queryCollectionStock = collection(db, 'cursos')

		const queryActulizarStock = await query(
			queryCollectionStock,

			where(
				documentId(),
				'in',
				cartList.map((it) => it.id) // all los id's que estén... se va a crear un array = ["jlksjfdgl","asljdfks'] => ejemplo del map
			)
		)

		const batch = writeBatch(db) //escritura por lote del firestore

		await getDocs(queryActulizarStock) //se trae la array de los id's, es decir, traeme todos los id's de los productos que están en mi carrito
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
			{/* <div> */}
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
					<button onClick={removeCart}>Vaciar Carrito</button>
					<div>
						<button onClick={generarOrden}>Generar orden</button>
						<h2>Su número de compra es el siguiente: {ordenID}</h2>
						<Formulario />
					</div>
				</OrdenStyle>
			) : (
				<div>
					<h3>No hay productos para mostrar</h3>
					<Link to="/">
						<button>Seguí comprando</button>
					</Link>
				</div>
			)}
			{/* </div> */}
		</CartContainerProd>
	)
}
