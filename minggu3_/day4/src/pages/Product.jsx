import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
        const brandList = ["All", ...new Set(data.products.map((p) => p.brand))];
        setBrands(brandList);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleFilter = (brand) => {
    setSelectedBrand(brand);
    if (brand === "All") setFilteredProducts(products);
    else setFilteredProducts(products.filter((p) => p.brand === brand));
  };

  if (loading)
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px", color: "#388E3C" }}>
        Loading produk bree... 🌀
      </h2>
    );

  return (
    <div
      style={{
        backgroundColor: "#FFFBEA",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h2
        style={{
          color: "#2E7D32",
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "25px",
        }}
      >
        🌿 Daftar Produk Tropikal 🔥
      </h2>

      {/* Dropdown Filter */}
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <label htmlFor="brandFilter" style={{ fontWeight: "bold", color: "#2E7D32" }}>
          Filter Brand:{" "}
        </label>
        <select
          id="brandFilter"
          value={selectedBrand}
          onChange={(e) => handleFilter(e.target.value)}
          style={{
            padding: "10px 15px",
            borderRadius: "10px",
            border: "2px solid #4CAF50",
            backgroundColor: "#E8F5E9",
            color: "#2E7D32",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {brands.map((brand, index) => (
            <option key={index} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Grid Produk */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "25px",
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "2px solid #C8E6C9",
              borderRadius: "15px",
              padding: "15px",
              backgroundColor: "#E8F5E9",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              transition: "transform 0.2s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 6px 15px rgba(76, 175, 80, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 10px rgba(0, 0, 0, 0.1)";
            }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ color: "#2E7D32" }}>{product.title}</h3>
            <p style={{ color: "#333", fontWeight: "500" }}>
              💸 Harga: ${product.price}
            </p>
            <p style={{ color: "#388E3C" }}>
              🏷️ Brand: <b>{product.brand}</b>
            </p>
            <Link
              to={`/products/${product.id}`}
              style={{
                display: "inline-block",
                marginTop: "10px",
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "8px 12px",
                borderRadius: "8px",
                textDecoration: "none",
                transition: "background-color 0.3s",
                
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#388E3C")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#4CAF50")}
            >
              Lihat Detail 🔍
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
