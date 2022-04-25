import React from "react";
import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("cartList")) || []
  );

  function addToCart(items) {
    for (let i = 0; i < cartList.length; i++) {
      const element = cartList[i];
      if(element.id === items.id){
          element.count += items.count
          localStorage.setItem("cartList", JSON.stringify(cartList))
          return
      }
    }
    console.log("No estaba, agrego")
    setCartList([...cartList, items]);
    localStorage.setItem("cartList", JSON.stringify([...cartList, items]))

  }


 


  const removeItem = (id) => {
    let newCart = cartList.filter((e) => e.id !== id);
    setCartList(newCart);
    localStorage.setItem("cartList", JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCartList([]);
    localStorage.setItem("cartList", JSON.stringify([]));
  };

  const showList = () => {
    console.log(cartList);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        showList,
        addToCart,
        removeItem,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
