import '@styles/CartItem.css'
import { FC } from 'react';
import { useCart } from '../CartContext';
import { Pets } from 'src/types';

interface CartItemProps {
  pet: Pets;
}

const CartItem:FC<CartItemProps> = ({ pet }) => {
  const {cart, setCart} = useCart();

  function handleRemoveFromCart(petId: number) {
    const newCart = cart.filter((pet) => pet.id !== petId);
    setCart(newCart);
  }

  return (
    <div className="cart-item">
      <img src={pet.image_url!} alt={pet.name!} />
      <div className="text-content">
        <h4 className='text-color'>{pet.name}</h4>
        <p className='second-text-color'>Category: {pet.category} | {pet.subcategory}</p>
        <h4 className='price'>${pet.price}</h4>
      </div>
      <button aria-label='Close' onClick={() => handleRemoveFromCart(pet.id)}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 8L8 24M8 8L24 24" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}

export default CartItem;