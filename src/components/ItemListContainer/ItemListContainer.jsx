 
import { useEffect, useState } from "react";
import { ItemList } from '../itemList/itemList';
import './itemCont.css'

export const ItemListContainer =() =>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch("/data/products.json")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err))
        .finally(() => {
            setLoading(false)
        } )

    }, []);
   
    if(loading) return <p>cargando productos</p>
    return(
        <div className="cont">
        <section >
            <ItemList products={products} />
        </section>
  </div>  )
}