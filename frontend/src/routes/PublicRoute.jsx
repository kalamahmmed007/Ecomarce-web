import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../redux/selectors/authSelectors";
import { ROUTES } from "../routers/routes";

const PublicRoute = ({ children }) => {
    const isAuthenticated = useSelector(selectIsAuthenticated);

    // Redirect logged-in users to dashboard instead of home
    if (isAuthenticated) return <Navigate to={ROUTES.USER_DASHBOARD} replace />;

    return children;
};

export default PublicRoute;
