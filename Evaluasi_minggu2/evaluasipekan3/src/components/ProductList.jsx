import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, loading, error }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Gagal memuat data</p>;
  if (!products.length) return <p>Produk tidak ditemukan.</p>;

  return (
    <div className="product-grid">
      {products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
