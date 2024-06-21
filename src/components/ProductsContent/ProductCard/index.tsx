import { useState } from "react";

import "./styles.css";
import AxiosHook from "../../../hooks/AxiosHook";
import FilterCards from "../../../hooks/FilterCards";
import SearchBox from "./SearchBox";
import Card from "./Card";




const ProductCard = () =>{
    const {getAxios} = AxiosHook("https://fakestoreapi.com/products");
    //console.log(getAxios);
    const [searchText, setSearchText] = useState<string>("");
    const Filtered = FilterCards(getAxios, searchText);
    

    return(
       
        <article>
            <SearchBox searchData={setSearchText} />
            <section className="cards-container">
                {
                    
                    Filtered.length > 0 
                    ?
                    Filtered.map((product) => {
                        
                        return (
                        <Card 
                                key={product.id}
                                name={product.title}
                                price={product.price}
                                description={product.description}
                                image={product.image} id={0}  />
                        ) 
                    }
                    )
                    : 
                    
                    <article className="cards-empty">
                        
                        <h1>Lo sentimos Su Articulo No Se Encuentra Disponible</h1>
                        <h2>Favor de reiniciar la busqueda</h2>
                    </article>
           
                } 
            </section>
        </article>
        
           

        
        
        
    )
}

export default ProductCard;