import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductById } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchProductById(id)
      .then((p) => {
        setProduct(p);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  if (loading) return <p className="p-6">Loading...</p>;
  if (!product) return <p className="p-6">Produk gak ketemu</p>;

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={product.image} alt={product.title} className="w-full md:w-80 h-80 object-cover rounded" />
        <div>
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p className="text-gray-400">{product.brand}</p>
          <p className="mt-2 font-bold text-xl">${product.price}</p>
          <p className="mt-4 text-gray-300">{product.description}</p>
          <div className="mt-6 flex gap-3">
            <button onClick={addToCart} className="px-4 py-2 bg-gray-300 text-black rounded">
              Tambah ke Cart
            </button>
            <button onClick={() => navigate(-1)} className="px-4 py-2 border rounded">
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
