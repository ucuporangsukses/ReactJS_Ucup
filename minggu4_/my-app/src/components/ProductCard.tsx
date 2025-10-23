import React from "react";
import { Product } from "./ProductList";
import { User } from "./typeGuard";

type ProductPreview = Pick<Product, "id" | "name">;
type CardProps = {
  product?: ProductPreview; // cuma id & name
  onAdd?: (product: Product) => void;
  user?: User;
};

export function ProductCard({ product, onAdd, user }: CardProps) {
  if (user) {
    return (
      <div className="border border-gray-700 p-3 rounded bg-gray-800">
        <h3 className="font-semibold">{user.name}</h3>
        <p className="text-sm text-gray-400">{user.email}</p>
      </div>
    );
  }

  if (product) {
    return (
      <div className="border border-gray-700 p-3 rounded bg-gray-800">
        <h3 className="font-semibold">{product.name}</h3>
        {onAdd && (
          <button
            onClick={() => onAdd(product as Product)}
            className="mt-2 px-2 py-1 bg-indigo-600 hover:bg-indigo-700 text-sm rounded"
          >
            Add to Cart
          </button>
        )}
      </div>
    );
  }

  return null;
}
