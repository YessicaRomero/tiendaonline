import { useEffect, useState } from "react";
import {ItemList} from "../itemList/ItemList";

import { useParams } from "react-router-dom";
import { getByCategory } from "../../services/productService";
import Spiner from "../spiner/spinner";





export const ItemListContainer = () => {
  
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getByCategory(category)
      .then((data) => setProducts(data))
      .catch((err) => console.log("Hubo un error:", err))
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) return <Spiner />
  return (
    <section >
   <ItemList className="text-decoration-none" products={products}  />
     
    </section>
  );
};