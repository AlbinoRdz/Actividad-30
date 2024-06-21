
interface PropertyProps{
    id:number;
    name:string;
    price:number;
    image:string;
    description:string;
    title:string;
}


const FilterCards = (Product:PropertyProps[], searchText:string) => {
   

    const filterFinal = Product.filter((elem ) =>{
        
        return elem.title.toLowerCase().includes(searchText.toLowerCase());
     }
     )
     
     
    return filterFinal
}

export default FilterCards;