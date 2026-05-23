import { UseCart } from "../../context/CardContext"
import { CartItem } from "./CartItem";

export const ListCart = () =>{ 

    const { cart} = UseCart();

    return(
        <div>
            {cart.map((element)=> {
                <CartItem key={element.id} item={element} />
            }
         
       ) }
   </div> ) 



}