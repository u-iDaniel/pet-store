import '@styles/CartButton.css'
import { FC, useState } from 'react';

interface CartButtonProps {
  inCart: boolean;
  onAddToCart: () => void;
  onRemoveToCart: () => void;
}

const CartButton:FC<CartButtonProps> = (props) => {
  const [firstTime, setFirstTime] = useState(true);
  const [inTransition, setInTransition] = useState(false);

  function handleAdd() {
    props.onAddToCart();
  }

  function handleRemove() {
    props.onRemoveToCart();
    setFirstTime(true);
    setInTransition(false);
  }

  function handleTransition() {
    // Show green button first when user clicks the add to cart btn
    if (firstTime && !props.inCart) {
      setFirstTime(false);
    } else {
      setInTransition(true);
    }
  }

  return (
    <>
      {props.inCart ? (
          inTransition ? (
            <button onMouseLeave={() => setInTransition(false)} onClick={handleRemove} type="button" className="remove">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Remove from Cart
            </button>
          ) : (
            <button onMouseEnter={handleTransition} type="button" className="added">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.95833 14.9998L3.20833 10.2498L4.39583 9.06234L7.95833 12.6248L15.6042 4.979L16.7917 6.1665L7.95833 14.9998Z" fill="white"/>
              </svg>
              Added to Cart
            </button>
          )
        ) : (
          <button onClick={handleAdd} className='add' type="button">
            Add to Cart
          </button>
        )
      }
    </>
  )  
}

export default CartButton;