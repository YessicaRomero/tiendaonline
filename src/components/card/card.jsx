import { Link } from "react-router-dom";
import { UseCart } from "../../context/CardContext"
import { CartSum } from "./CardSum";
import{ListCart}  from "./ListCart";

export const Carts = () =>{
const {cart} = UseCart();


return(
    <section>
        <h1>Tu carrito
              🛒 </h1>
              {cart.length ? (
                    <div>
                    <ListCart/>
                    <CartSum />
                    </div>
                ) : (
                    <div>
                    <p className="empty-cart">El carrito esta vacío 😕</p>
          <Link className="btn primary bg-primary" to={"/"}>
            Volver
          </Link>
              </div>  )
              }

    </section>
)}