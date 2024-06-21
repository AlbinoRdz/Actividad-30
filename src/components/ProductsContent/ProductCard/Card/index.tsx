import "./styles.css";
import React from "react";

interface CardsProps {
    id:number;
    name:string;
    price:number;
    image:string;
    description:string;
    
}


const Card = ({name, price, image, description}:CardsProps): JSX.Element => {

    return(
        <section className="card">
            <h1 className="card-name">{name}</h1>
            <img alt="imagenes de productos" className="card-img" src={image} />
            <p className="card-text">{description}</p>
            <span className="card-price">{price}</span>
        </section>
    )
}


export default Card;