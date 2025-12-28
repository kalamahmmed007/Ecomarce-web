// src/routes/AppRouter.jsx
import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes, publicRoutes, protectedRoutes } from "./routes";

// Layouts
import MainLayout from "../components/layout/MainLayout/MainLayout";
import AuthLayout from "../components/layout/MainLayout/AuthLayout";
import ScrollToTop from "../components/shared/ScrollToTop/ScrollToTop";

// ProtectedRoute wrapper
const ProtectedRoute = ({ element: Element, roles }) => {
    const user = useSelector((state) => state.auth.user);
    const isLoggedIn = !!user;

    if (!isLoggedIn) return <Navigate to={routes.login} replace />;
    if (roles && !roles.includes(user.role)) return <Navigate to={routes.home} replace />;

    return <Element />;
};

// Layout wrappers using Outlet
const MainLayoutWrapper = () => (
    <MainLayout>
        <Outlet />
    </MainLayout>
);

const AuthLayoutWrapper = () => (
    <AuthLayout>
        <Outlet />
    </AuthLayout>
);

const AppRouter = () => {
    return (
        <>
            <ScrollToTop />

            <Routes>
                {/* Public routes */}
                <Route element={<MainLayoutWrapper />}>
                    {publicRoutes
                        .filter(
                            ({ path }) =>
                                ![routes.login, routes.register, routes.forgotPassword].includes(path)
                        )
                        .map(({ path, element: Element }) => (
                            <Route key={path} path={path} element={<Element />} />
                        ))}
                </Route>

                {/* Auth routes */}
                <Route element={<AuthLayoutWrapper />}>
                    {publicRoutes
                        .filter(({ path }) =>
                            [routes.login, routes.register, routes.forgotPassword].includes(path)
                        )
                        .map(({ path, element: Element }) => (
                            <Route key={path} path={path} element={<Element />} />
                        ))}
                </Route>

                {/* Protected routes */}
                {protectedRoutes.map(({ path, element: Element, roles }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<ProtectedRoute element={Element} roles={roles} />}
                    />
                ))}

                {/* 404 */}
                <Route
                    path="*"
                    element={
                        <MainLayout>
                            <div className="container mx-auto mt-20 text-center">
                                <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
                                <p className="mt-4 text-gray-600">
                                    The page you are looking for does not exist.
                                </p>
                            </div>
                        </MainLayout>
                    }
                />
            </Routes>
        </>
    );
};

export default AppRouter;
