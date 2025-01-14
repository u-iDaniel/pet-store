import { useState } from 'react';
import { useCart } from '../CartContext';
import '@styles/Cart.css'
import CartItem from './CartItem';

const Cart = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const {cart} = useCart();
  const numItems = cart.length;

  function toggleDrawer() {
    setShowDrawer(!showDrawer);
  }

  return (
    <>
      <button onClick={toggleDrawer}>Cart ({numItems})</button>

      {showDrawer && 
        <>
          <div className="drawer">
            <div className="top-bar">
              <h3><span className='text-color'>Cart</span> <span className='second-text-color'>({numItems})</span></h3>
              <button aria-label='Close' onClick={toggleDrawer}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 8L8 24M8 8L24 24" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <div className="cart-contents">
              {cart.map((pet) => <CartItem pet={pet} key={pet.id} />)}
            </div>

            <div className="checkout">
              <h3>Subtotal: <span className='text-color'>${cart.reduce((acc, pet) => acc + +pet.price!, 0)}</span></h3>
              <button>Checkout Now</button>
            </div>
          </div>
          
          <div onClick={toggleDrawer} className={`overlay ${showDrawer ? 'visible' : ''}`}></div>
        </>}
    </>
  )
}

export default Cart;