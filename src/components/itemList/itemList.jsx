import { Link } from "react-router-dom"
import { Item } from "../item/Item"
import './itemlist.css'
export const ItemList = ({ products }) =>{

if(!products.length){
    return <p>No se encuentran productos...</p>

}
return(
    <div className="itemlistcontainer"> 
        {products.map((product) => (
           <Link to={`/product/${product.id}`} key={product.id} >
            <Item {...product} />
            <button onClick={(e) => {
                e.preventDefault();
                agregarAlCarrito(product)}}>Agregar al carrito</button>
            </Link>
        
       ) )}
    </div>
)
}