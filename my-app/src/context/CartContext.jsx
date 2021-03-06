import { createContext, useContext, useState } from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
	const [cartList, setCartList] = useState([])

	const addToCart = (item, count) => {
		if (cartList.some((one) => one.id === item.id)) {
			//sumando la cuenta a la cantidad
			let index = cartList.findIndex((one) => one.id === item.id) //si hay un id igual dentro de cartList
			let product = cartList[index]
			product.amount = product.amount + count

			//eliminar del carrito
			const newCart = [...cartList]
			newCart.splice(index, 1, product)

			//agregando la nueva array
			setCartList([...newCart])
		} else {
			let product = { ...item, count }
			setCartList([...cartList, product])
		}
	}

	const removeCart = () => {
		setCartList([])
	}

	const removeByItem = (cartItemId) => {
		const newCart = [...cartList]
		let index = cartList.findIndex((one) => one.id === cartItemId)

		newCart.splice(index, 1)
		setCartList([...newCart])
	}

	const totalPrice = cartList.reduce(
		(a, c) => a + c.amount * c.priceInDollars,
		0
	)
	const totalItems = cartList.reduce((a, c) => a + c.amount, 0)

	return (
		<CartContext.Provider
			value={{
				cartList,
				totalPrice,
				totalItems,
				addToCart,
				removeCart,
				removeByItem,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
