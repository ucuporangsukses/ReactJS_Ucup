import React from "react";
import { ProductCard } from "./ProductCard";

export type Product = {
  id: number;
  name: string;
  price: number;
  tags?: string[];
};

type ProductListProps = {
  products: Product[];
  onAdd: (product: Product) => void;
};

export function ProductList({ products, onAdd }: ProductListProps) {
  return (
    <div className="border border-gray-700 bg-gray-900 p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Daftar Produk</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map(p => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
}
