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

export const Cart = () => {
	const { cartList, removeCart, removeByItem, totalPrice } = useCartContext()
	// let ordenId = ''
	const [ordenID, setOrdenID] = useState('')

	const generarOrden = async (e) => {
		e.preventDefault()

		let orden = {}

		orden.buyer = {
			firstName: 'Federico',
			email: 'f@gmail.com',
			phone: '023456987',
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
			// .then(({ id }) => console.log(id))
			.then(({ id }) => setOrdenID(id))

			.finally(removeCart())

		//# actualizar el stock

		const queryCollectionStock = collection(db, 'cursos')

		const queryActulizarStock = await query(
			queryCollectionStock,

			where(
				documentId(),
				'in',
				cartList.map((it) => it.id) // todos los id's que estén... se va a crear un array = ["jlksjfdgl","asljdfks'] => ejemplo del map
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
		<div>
			{cartList.map((item) => {
				return (
					<CartItem key={item.id} item={item} removeByItem={removeByItem} />
				)
			})}

			{cartList.length ? (
				<div>
					<button onClick={removeCart}>Vaciar Carrito</button>
					<h3> Precio Total: {totalPrice}</h3>
				</div>
			) : (
				<div>
					<h3>No hay productos para mostrar</h3>
					<Link to="/">
						<button>Seguí comprando</button>
					</Link>
					<button onClick={generarOrden}>Generar orden</button>
				</div>
			)}

			<button onClick={generarOrden}>Generar orden</button>
			<h2>Su número de compra es el siguiente: {ordenID}</h2>
		</div>
	)
}
