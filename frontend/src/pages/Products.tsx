import Navbar from "@components/Navbar";
import { useParams } from "react-router-dom";

const Products = () => {
  const { category } = useParams();

  return (
    <>
      <Navbar />
    
    </>
  );
}

export default Products;