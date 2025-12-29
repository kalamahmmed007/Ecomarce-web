// src/components/layout/MainLayout/AuthLayout.jsx
import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES } from "../../../routes/routes";

const AuthLayout = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const location = useLocation();

    const authPages = [ROUTES.LOGIN, ROUTES.REGISTER, ROUTES.FORGOT_PASSWORD];

    // Redirect logged-in users away from auth pages
    if (isAuthenticated && authPages.includes(location.pathname)) {
        return <Navigate to={ROUTES.USER_DASHBOARD} replace />;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Outlet />
        </div>
    );
};

export default AuthLayout;
