import React from 'react'
import { createContext, useState, useContext } from 'react'

const CartContext = createContext () 
    
export const useCartContext  = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    function addToCart(items) {
        setCartList([
            ...cartList,
            items
        ])
    }
// function addItem (item, quantity)

//function removeItem(itemId)

// function clear()


/*
    function isInCart (id) {
        if(id ){
            true
        }
        else{false}
    }
*/
    const showList = ()=>{
    console.log(cartList)
    }


  return (
    <CartContext.Provider value={{
        cartList,
        showList,
        addToCart
    }}>
        {children}
    </CartContext.Provider>
  )}

export default CartContextProvider