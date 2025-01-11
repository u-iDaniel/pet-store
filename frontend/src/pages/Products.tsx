import Navbar from "@components/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pets } from "src/types";

import '@styles/Products.css'
import Breadcrumb from "@components/Breadcrumb";
import ProductCard from "@components/ProductCard";

const Products = () => {
  let { category } = useParams();
  // Remove extra 's' at the end if route contains it
  if (category?.at(-1) == 's') category = category.slice(0, -1);

  const [pets, setPets] = useState<Pets[]>([]);

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
        {pets.map((pet, idx) => <ProductCard pet={pet} key={idx}/>)}
      </div>
    </>
  );
}

export default Products;