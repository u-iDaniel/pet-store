import {FC, ReactNode, useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider:FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<{[petId: number] : boolean} >({});

  return (
    <CartContext.Provider value={{cart, setCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;