import Navbar from "@components/Navbar";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  let { category } = useParams();
  // Remove extra 's' at the end if route contains it
  if (category?.at(-1) == 's') category = category.slice(0, -1);

  useEffect(() => {
    const fetchPets = async () => {
      console.log(`${import.meta.env.VITE_API_BASE_URL}/pets/${category}`);
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/pets/${category}`);
      const data = await response.json();
      console.log(data);
    }

    fetchPets();
  }, [category]);

  return (
    <>
      <Navbar />

    </>
  );
}

export default Products;