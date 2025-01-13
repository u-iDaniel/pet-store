import {FC, ReactNode, useState } from "react";
import { CartContext } from "./CartContext";
import { Pets } from "./types";

const CartProvider:FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Pets[]>([]);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;