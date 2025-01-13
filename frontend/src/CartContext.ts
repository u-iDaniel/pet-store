import { createContext, Dispatch, SetStateAction, useContext} from "react";
import { Pets } from "./types";

interface CartContextType {
  cart: Pets[];
  setCart: Dispatch<SetStateAction<Pets[]>>;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => null,
});

export const useCart = (): CartContextType => {
  const cartContextObj = useContext(CartContext);
  if (!cartContextObj) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return cartContextObj;
}
