import { Item } from "../item/Item"


export const ItemDetail = ({item}) => {
return <Item {...item}>
    <button> Agregar al carrito</button>
</Item>
}
