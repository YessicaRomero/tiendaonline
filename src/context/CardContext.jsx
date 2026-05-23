
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CardContext = createContext();

export const UseCart = () => {
    const context = useContext(CardContext);
    if(!context) {
        throw new Error("No estas dentro de un proveedor ");
        
    } 
    return context;
}
export const CartProvider = ({children}) => {
const navigate = useNavigate();
const [cart, setCart] =  useState([]);

    const isInCart = (item) => {
        const inCart = cart.some((element) => element.id === item.id );
        return inCart
    } 

    const addItem = (item) => {
        if(isInCart(item)){
            alert('el producto ya esta seleccionado en su carro')
            return
        }
        setCart([...cart, item]);
        alert('Su producto se agrego al carrito 🛍️')
    }


    const removeItem = (id) =>{
        const updateCart = cart.filter ((element) => (element.id) !== id)
        setCart(updateCart);
        alert('El producto se elimino exitosamente de su carro')
    }
    const clearCart = () =>{
        setCart([])
    };


    const getTotalItems = () =>{
        return cart.length
    }
    //cuenta el total a pagar
    const getCartTotal  = () =>{
            return cart.reduce((acc, element)=> acc + element.price, 0);
    }
    const checkout = () =>{
        alert('Su compra se realizo con exito')
        clearCart()
        navigate("/")
    }

    const value = {
        cart,
        getCartTotal,
        getTotalItems,
        clearCart, 
        addItem,
        removeItem,
        checkout
    }
    
    return <CardContext.Provider value={value}>{children}</CardContext.Provider>

}