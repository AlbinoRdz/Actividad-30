import  { useEffect, useState } from "react"
import axios from "axios";

interface CardsTS {
    id:number;
    name:string;
    price:number;
    image:string;
    description:string;
    title:string;
}

const AxiosHook = (url:string) =>{

   
    const [getAxios, setGetAaxios] = useState<CardsTS[]>([]);
    
    
    useEffect(()=>{
        const getProducts = async () =>{
            try {
                const res = await axios.get(url);
                setGetAaxios(res.data); 
                
            } catch (err){
                console.error(err);
                
            }  
        }
    getProducts();
    },[url]);

    return {getAxios}
}

export default AxiosHook;
