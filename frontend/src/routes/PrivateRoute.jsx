import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../redux/selectors/authSelectors";

const PrivateRoute = ({ children, roles = [] }) => {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const userRole = useSelector((state) => state.auth.user?.role);

    if (!isAuthenticated) return <Navigate to="/auth/login" replace />;

    if (roles.length && !roles.includes(userRole)) return <Navigate to="/" replace />;

    return children;
};

export default PrivateRoute;
