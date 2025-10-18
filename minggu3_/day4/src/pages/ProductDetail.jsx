import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>← Kembali</button>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} width={300} />
      <p>{product.description}</p>
      <p>Harga: ${product.price}</p>
      <p>Kategori: {product.category}</p>
    </div>
  );
}
