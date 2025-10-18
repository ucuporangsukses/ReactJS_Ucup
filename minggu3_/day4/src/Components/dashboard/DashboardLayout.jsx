import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <NavLink to="profile" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Profile
        </NavLink>
        <NavLink to="settings" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Settings
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
