import { UseCart } from "../../context/CardContext"

export const CartSum = () =>{
const {getCartTotal, checkout} = UseCart()

const total = getCartTotal() 

    return(
        <div>
            <p>Total a pagar: ${total} </p>
            <button className="btn bg-success primary" onClick={checkout}>
                        FINALIZAR COMPRA
      </button>
        </div>
    )

}