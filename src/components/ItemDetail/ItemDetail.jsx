import { UseCart } from "../../context/CardContext"
import { Item } from "../item/Item"


export const ItemDetail = ({item}) => {
    const { addItem } = UseCart();
return(
     <Item {...item}>
    <button onClick={() => addItem(item)}> Agregar al carrito</button>
</Item>
)
}
