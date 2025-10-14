import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) { setError(true); }
      finally { setLoading(false); }
    };
    fetchProducts();
  }, []);

  const filtered = products
    .filter(p => category === "All" ? true : p.category === category)
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container">
      <h1>Juminten_store</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter category={category} setCategory={setCategory} />
      <ProductList products={filtered} loading={loading} error={error} />
    </div>
  );
}
