import { Link } from "react-router-dom"
import { Item } from "../item/Item"
import "./itemList.css"





export const ItemList = ({ products }) =>{

if(!products.length){
    return <p>No se encuentran productos...</p>

}
return(
    <div className="itemlistcontainer "> 
        {products.map((product) => (
           <Link  className="text-decoration-none" to={`/product/${product.id}`} key={product.id} >
            <Item {...product} />
            </Link>
        
       ) )}
    </div>
)
}