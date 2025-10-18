import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
    <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
      <NavLink to="/" end style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Home
      </NavLink>
      <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        About
      </NavLink>
      <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Contact
      </NavLink>
      <NavLink to="/products" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Products
      </NavLink>
      <NavLink to="/dashboard" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        Dashboard
      </NavLink>
    </nav>
  );
}
