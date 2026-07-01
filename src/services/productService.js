import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    query,
    where,
  } from "firebase/firestore";
  
  import { db } from "../firebase/config";
  

  const productsRef = collection(db, "products");
  

  export const getProducts = async () => {
    try {
      const snapshot = await getDocs(productsRef);
  
      const productsFormat = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
  
      return productsFormat;
    } catch (err) {
      console.error("Error al traer productos:", err);
      return [];
    }
  };
  
 
  export const getProductById = async (id) => {
    try {

      const productRef = doc(db, "products", id);
      const snapshot = await getDoc(productRef);
  
      if (snapshot.exists()) {
        const product = { id: snapshot.id, ...snapshot.data() };
        console.log("Doc:", product);
        return product;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error al traer producto por ID:", error);
      return null;
    }
  };
  
  //filtro x categoria 
  export const getByCategory = async (category) => {
    try {
      let queryRef;

      if (category) {
        queryRef = query(productsRef, where("category", "==", category));
      } else {
        queryRef = productsRef;
      }

      const snapshot = await getDocs(queryRef);
  
      const productsFormat = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      return productsFormat;
    } catch (error) {
      console.error("Error al filtrar productos:", error);
      return [];
    }
  };

  export const createProduct = async (productData) => {
    try {

      const docRef = await addDoc(productsRef, productData);
  
      return docRef.id; 
    } catch (error) {
      console.error("Error al crear producto:", error);
      throw error;
    }
  };