import { useState } from 'react';
import { useCart } from '../CartContext';
import '@styles/Cart.css'

const Cart = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const {cart} = useCart();
  const numItems = Object.values(cart).filter(inCart => inCart).length;

  function toggleDrawer() {
    setShowDrawer(!showDrawer);
  }

  // TODO: Make sure when you click off the cart drawer it will close the drawer
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

            </div>

            <div className="checkout">
              <h3><span className='primary-color'>Subtotal: </span><span className='text-color'>$1234</span></h3>
              <button className='primary-color'>Checkout Now</button>
            </div>
          </div>
          
          <div className={`overlay ${showDrawer ? 'visible' : ''}`}></div>
        </>}
    </>
  )
}

export default Cart;