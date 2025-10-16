import React from "react";
import { useUserContext } from "../hooks/useUserContext";
import { ThemeContext } from "../context/ThemeContext";

export default function UserProfile() {
  const { user, login, logout, updateProfile } = useUserContext();
  const { theme } = React.useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: theme === "light" ? "#f5f5f5" : "#555",
        color: theme === "light" ? "#000" : "#fff",
        marginBottom: "20px",
      }}
    >
      <h2>User Info</h2>
      <p>Nama: {user.name || "-"}</p>
      <p>Email: {user.email || "-"}</p>
      <p>Status: {user.isLoggedIn ? "Logged In" : "Logged Out"}</p>

      <div style={{ marginTop: "10px" }}>
        <button
          onClick={() => login("Bre", "bre@example.com")}
          style={{
            padding: "5px 10px",
            marginRight: "5px",
            cursor: "pointer",
            backgroundColor: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",
            border: "1px solid",
          }}
        >
          Login
        </button>
        <button
          onClick={logout}
          style={{
            padding: "5px 10px",
            marginRight: "5px",
            cursor: "pointer",
            backgroundColor: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",
            border: "1px solid",
          }}
        >
          Logout
        </button>
        <button
          onClick={() => updateProfile({ name: "Bre Updated" })}
          style={{
            padding: "5px 10px",
            cursor: "pointer",
            backgroundColor: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",
            border: "1px solid",
          }}
        >
          Update Name
        </button>
      </div>
    </div>
  );
}
