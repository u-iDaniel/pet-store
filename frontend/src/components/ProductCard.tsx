import '@styles/ProductCard.css'
import { FC } from 'react';
import { Pets } from 'src/types';
import CartButton from '@components/CartButton';

interface ProductCardProps {
  pet: Pets;
  inCart: boolean;
  onAddToCart: () => void;
  onRemoveToCart: () => void;
}

const ProductCard:FC<ProductCardProps> = ({ 
  pet,
  inCart,
  onAddToCart,
  onRemoveToCart,
}) => {
  return (
    <div className="product-card">
      <img src={pet.image_url!} alt={pet.name!} />
      <div className="content">
        <h3>{pet.subcategory}</h3>
        <h4>{pet.name}</h4>
        <p className='desc'>{pet.description}</p>
        <p className='vaccinated'>
          {/* Checkmark for vaccinated, Cross for not vaccinated */}
          {pet.vaccinated ? 
            <svg aria-label="Is" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.95837 11.0001L0.208374 6.25008L1.39587 5.06258L4.95837 8.62508L12.6042 0.979248L13.7917 2.16675L4.95837 11.0001Z" fill="#1D1B20"/>
            </svg>
            : 
            <svg aria-label="Not" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5L15 15" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          }
          &nbsp; 
          Vaccinated
        </p>
        <p className='price'>${pet.price}</p>
        <CartButton inCart={inCart} onAddToCart={onAddToCart} onRemoveToCart={onRemoveToCart}  />
      </div>
    </div>
  )
}

export default ProductCard;