import { createContext, useContext, useState } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([])

    const addToCart = (item, count) => {

        if(cartList.some(one => one.id === item.id)){
            
                    //sumando la cuenta a la cantidad
                    let index = cartList.findIndex(one => one.id === item.id) //si hay un id igual dentro de cartList
                    let product = cartList[index]
                    product.amount = product.amount + count;

        
                    //eliminar del carrito
                    const newCart = [...cartList];
                    newCart.splice( index, 1, product );
        
                    //agregando la nueva array
                    setCartList([ ...newCart ]);
        } else {

           

            let product = {...item, count}
            setCartList([...cartList, product ]); 

            
        }
        
    }

  

            /*  setCartList([
                ...cartList,
                item
            ]) */


    const removeCart = () => {
        setCartList( [] )
        
    }




    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeCart
        }}>
            {children}                                
        </CartContext.Provider>
    )
}

// export default CartContextProvider