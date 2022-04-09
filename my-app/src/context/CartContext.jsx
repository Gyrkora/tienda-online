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



    // const addToCart = (item, amount) => {
    //     if(cartList.some(one => one.id === item.id)){
            
    //         let index = cart.findIndex(el => el.id === item.id);
    //         let product = cartList[index];
    //         product.amount = product.amount + amount;

    //         const newCart = [...cartList];
    //         newCart.splice( index, 1, product );

    //         setCartList([ ...newCart ]);

    //     }else{
            // let product = {...item, qty};
    //          setCartList([
            // ...cartList,
            // item
    //     }
    // }

    //https://stackblitz.com/edit/react-6ymjfz?file=src%2Fcontext%2FCartContext.js



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