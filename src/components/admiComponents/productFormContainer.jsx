import { useNavigate } from "react-router-dom";
import "./containerProduct.css";
import { useState } from "react";
import { ProductFormUI } from "./productFormUI";
import { validateProduct } from "../../utils/validateProducts";
import { uploadImage } from "../../services/updateImage";
import { createProduct } from "../../services/productService";

export const ProductFormContainer = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0] || null;
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
setErrors({});
    setLoading(true);

 
    const newErrors = validateProduct({ ...product, file });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
    
      const imageUrl = await uploadImage(file);
  const productData = {
        ...product,
        price: Number(product.price),
        image: imageUrl,
      };
      
      const id = await createProduct(productData);


      setProduct({ name: "", price: "", category: "", description: "" });
      setFile(null);
      navigate(`/admi/products/success/${id}`, { replace: true });
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductFormUI
      product={product}
      errors={errors}
      loading={loading}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
    />
  );
};