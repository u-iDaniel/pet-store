// import { useEffect } from 'react';
import Breadcrumb from '@components/Breadcrumb';
import CategoryCard from '@components/CategoryCard';
import Navbar from '@components/Navbar';
import '@styles/Shop.css'
import { Link } from 'react-router-dom';

const catDesc = `
  Timid, Independent, Cuddly. Perfect for busy individuals or furry baby lovers.
`;
const dogDesc = `
  Loyal, Confident, Energetic. Perfect for families and outdoor loving individuals.
`

const birdDesc = `
  Affectionate, Playful, Melodious. Perfect for gentle individuals and having great conversations.
`

const Shop = () => {

  // useEffect
  return (
    <>
      <Navbar />
      <div className="shop">
        <Breadcrumb />
        {/* Pull from database instead of hardcoding in the future? */}
        <div className="container">
          <Link to={"/shop/cats"}>
            <CategoryCard img='/pets/vito.png' category='Cats' desc={catDesc}></CategoryCard>
          </Link>
          <Link to={"/shop/dogs"}>
            <CategoryCard img='/pets/bella.png' category='Dogs' desc={dogDesc}></CategoryCard>
          </Link>
          <Link to={"/shop/birds"}>
            <CategoryCard img='/pets/jackie.png' category='Birds' desc={birdDesc}></CategoryCard>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Shop;