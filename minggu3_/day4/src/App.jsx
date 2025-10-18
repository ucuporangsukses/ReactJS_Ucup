import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";

import DashboardLayout from "./Components/dashboard/DashboardLayout";
import Profile from "./Components/dashboard/Profile";
import Settings from "./Components/dashboard/Settings";

export default function App() {
  return (
    <Router>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>Evaluasi Harian React Router 🔥</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:productId" element={<ProductDetail />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
