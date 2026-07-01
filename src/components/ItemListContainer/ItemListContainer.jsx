 
import { useEffect, useState } from "react";
import { ItemList } from '../itemList/itemList';
import './itemCont.css'
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemListContainer = () =>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
       const productsDB = collection(db, "products")
        getDocs(productsDB).then((resp) => {
            setProducts(
                resp.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                })
            )
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