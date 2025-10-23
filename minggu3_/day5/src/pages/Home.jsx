import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { fetchProducts } from "../data/products";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const q = searchParams.get("q") || "";
  const brand = searchParams.get("brand") || "all";
  const sort = searchParams.get("sort") || "title";

  useEffect(() => {
    setLoading(true);
    fetchProducts({ q, brand, sort }).then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, [q, brand, sort]);

  return (
    <div className="p-6">
      <div className="mb-6 bg-[#2a2a2a] p-6 rounded">
        <h1 className="text-3xl font-bold">BreStore — Fashion</h1>
        <p className="text-gray-400">Dark & sleek shop vibes</p>

        <div className="mt-4 flex gap-2">
          <input
            defaultValue={q}
            placeholder="Search... (nama produk / brand)"
            onBlur={(e) => setSearchParams({ q: e.target.value, brand, sort })}
            className="p-2 rounded bg-black border border-[#2a2a2a] w-60"
          />

          <select
            value={brand}
            onChange={(e) => setSearchParams({ q, brand: e.target.value, sort })}
            className="p-2 rounded bg-black border border-[#2a2a2a]"
          >
            <option value="all">All Brands</option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Converse">Converse</option>
            <option value="Uniqlo">Uniqlo</option>
            <option value="H&M">H&M</option>
            <option value="Kangol">Kangol</option>
            <option value="Prada">Prada</option>
            <option value="Burberry">Burberry</option>
            <option value="Calle">Calle</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSearchParams({ q, brand, sort: e.target.value })}
            className="p-2 rounded bg-black border border-[#2a2a2a]"
          >
            <option value="title">Sort: Title</option>
            <option value="price">Sort: Price</option>
          </select>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-[#2a2a2a] rounded p-3 cursor-pointer"
              onClick={() => navigate(`/product/${p.id}`)}
            >
              <img src={p.image} alt={p.title} className="w-full h-40 object-cover rounded" />
              <h3 className="mt-2 font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-400">{p.brand}</p>
              <p className="mt-1 font-bold">${p.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
