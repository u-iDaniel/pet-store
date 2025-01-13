import Navbar from "@components/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pets } from "src/types";
import { useCart } from "../CartContext";

import '@styles/Products.css'
import Breadcrumb from "@components/Breadcrumb";
import ProductCard from "@components/ProductCard";

const Products = () => {
  let { category } = useParams();
  // Remove extra 's' at the end if route contains it
  if (category?.at(-1) == 's') category = category.slice(0, -1);

  const [pets, setPets] = useState<Pets[]>([]);
  const {cart, setCart} = useCart();

  function handleAddToCart(petId : number) {
    setCart({...cart, [petId]: true}); // the new petId key overrides the old petId key if it existed 
  }
  
  function handleRemoveFromCart(petId : number) {
    setCart({...cart, [petId]: false});
  }

  // Call backend API
  useEffect(() => {
    const fetchPets = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/pets/${category}`);
      const data = await response.json();
      setPets(data);
    }

    fetchPets();
  }, [category]);

  return (
    <>
      <Navbar />
      <div className="info-bar">
        <Breadcrumb />
        <p className="results">Showing all {pets.length} results</p>
      </div>

      <div className="product-container">
        {/* USE PET ID since idx is not a unique key!!! State will persist for same idx pets lol */}
        {pets.map((pet) => 
          <ProductCard
            pet={pet}
            inCart={!!cart[pet.id]} 
            onAddToCart={() => handleAddToCart(pet.id)} 
            onRemoveToCart={() => handleRemoveFromCart(pet.id)}
            key={pet.id}
          />
        )}
      </div>
    </>
  );
}

export default Products;