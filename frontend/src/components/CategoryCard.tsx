import { FC } from "react";
import '@styles/CategoryCard.css'

interface CardProps {
  img: string;
  category: string;
  desc: string;
}

const CategoryCard:FC<CardProps> = (props) => {
  
  return (
    <div className="category-card">
      <img src={props.img} alt={props.category} />
      <div className="text">
        <h3>{props.category}</h3>
        <p>{props.desc}</p>
      </div>
      
    </div>
  )
}

export default CategoryCard;