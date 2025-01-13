import { createContext, Dispatch, SetStateAction, useContext} from "react";

interface CartContextType {
  cart: {[petId: number] : boolean};
  setCart: Dispatch<SetStateAction<{[petId: number] : boolean}>>;
}

export const CartContext = createContext<CartContextType>({
  cart: {},
  setCart: () => null,
});

export const useCart = (): CartContextType => {
  const cartContextObj = useContext(CartContext);
  if (!cartContextObj) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return cartContextObj;
}
