import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";



export const ItemDetailContainer = () =>{
const {id} = useParams();

const [ItemDetail, setItemDetail] = useState(null);
const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("/data/products.json")
        .then(res => res.json())
        .then(data =>{
        const item = data.find((element) => String(element.id) === id);
        if (item) {
            setItemDetail(item)
            return;
        }
       } )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))

    }, []);
    if(loading) return <p>El producto se esta cargando....</p>
    if (!ItemDetail) return <p>El producto seleccionado no se encuentra</p>

    return(
    <section>
            <h1>Detalle del producto</h1>
        <div>
            <ItemDetail item={ ItemDetail}> </ItemDetail>
        </div>
    </section>

    )} 

    

