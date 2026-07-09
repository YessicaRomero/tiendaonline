import { UseCart } from "../../context/CardContext"
import { Item } from "../item/Item";

export  const CartItem = ({item}) =>{

const {removeItem} = UseCart();

return (
    <Item {...item}>
    <button
        className="btn bg-delete primary"
        onClick={() => removeItem(item.id)}
      >
        Eliminar
      </button>
      </Item>
)
}