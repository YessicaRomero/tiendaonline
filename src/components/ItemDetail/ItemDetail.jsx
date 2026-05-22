import { Item } from "../item/Item"


export const ItemDetail = ({item}) => {
return <Item {...item}>
    <button onClick={() => addItem(item) }> Agregar al carrito</button>
</Item>
}
