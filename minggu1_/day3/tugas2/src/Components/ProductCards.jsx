import React from "react";
import PropTypes from "prop-types";

function ProductCard({ productName, price, stock, isAvailable }) {
  return (
    <div
      style={{
        border: "1px solid  #0e0e0eff",
        borderRadius: "8px",
        padding: "15px",
        width: "200px",
      }}
    >
      <h3>{productName}</h3>
      <p>Price: Rp {price.toLocaleString()}</p>
      <p>Stock: {stock}</p>
      <p>Status: {isAvailable ? "Available" : "Out of stock"}</p>
    </div>
  );
}

ProductCard.defaultProps = {
  stock: 0,
  isAvailable: true,
};

ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number,
  isAvailable: PropTypes.bool,
};

export default ProductCard;
