// src/components/layout/MainLayout/AuthLayout.jsx
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthLayout = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    // Redirect logged-in users away from login/register pages
    const authPages = ["/login", "/register", "/forgot-password"];
    const currentPath = window.location.pathname;

    if (isAuthenticated && authPages.includes(currentPath)) {
        return <Navigate to="/user/dashboard" replace />;
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Outlet />
        </div>
    );
};

export default AuthLayout;
