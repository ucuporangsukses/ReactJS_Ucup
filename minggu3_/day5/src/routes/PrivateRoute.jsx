import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
    const auth = localStorage.getItem("auth") === "true";
    if(!auth) return <Navigate to="/login" replace />
    return <Outlet />;
}