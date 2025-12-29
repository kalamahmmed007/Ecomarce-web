import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";

// Layouts
import MainLayout from "../components/layout/MainLayout/MainLayout";
import AuthLayout from "../components/layout/MainLayout/AuthLayout";
import DashboardLayout from "../components/layout/MainLayout/DashboardLayout";

// Pages
import HomePage from "../pages/Home/HomePage";
import ShopPage from "../pages/Shop/ShopPage";
import ProductDetailsPage from "../pages/ProductDetails/ProductDetailsPage";
import CartPage from "../pages/Cart/CartPage";
import CheckoutPage from "../pages/Checkout/CheckoutPage";
import OrderSuccessPage from "../pages/OrderSuccess/OrderSuccessPage";

import LoginPage from "../pages/Auth/LoginPage";
import RegisterPage from "../pages/Auth/RegisterPage";
import ForgotPasswordPage from "../pages/Auth/ForgotPasswordPage";

import UserDashboard from "../pages/User/Dashboard/UserDashboard";
import ProfilePage from "../pages/User/Profile/ProfilePage";
import OrdersPage from "../pages/User/Orders/OrdersPage";
import WishlistPage from "../pages/User/Wishlist/WishlistPage";
import SettingsPage from "../pages/User/Settings/SettingsPage";

import CategoryPage from "../pages/Category/CategoryPage";
import SearchPage from "../pages/Search/SearchPage";
import AboutPage from "../pages/About/AboutPage";
import ContactPage from "../pages/Contact/ContactPage";
import FAQPage from "../pages/FAQ/FAQPage";
import TermsPage from "../pages/Terms/TermsPage";
import PrivacyPage from "../pages/Privacy/PrivacyPage";
import NotFoundPage from "../pages/NotFound/NotFoundPage";

// Route guards
import ProtectedRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
    return (
        <Routes>
            {/* Public routes */}
            <Route element={<MainLayout />}>
                <Route path={ROUTES.HOME} element={<HomePage />} />
                <Route path={ROUTES.SHOP} element={<ShopPage />} />
                <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetailsPage />} />
                <Route path={ROUTES.CART} element={<CartPage />} />
                <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} />
                <Route path={ROUTES.ORDER_SUCCESS} element={<OrderSuccessPage />} />
                <Route path={ROUTES.CATEGORY} element={<CategoryPage />} />
                <Route path={ROUTES.SEARCH} element={<SearchPage />} />
                <Route path={ROUTES.ABOUT} element={<AboutPage />} />
                <Route path={ROUTES.CONTACT} element={<ContactPage />} />
                <Route path={ROUTES.FAQ} element={<FAQPage />} />
                <Route path={ROUTES.TERMS} element={<TermsPage />} />
                <Route path={ROUTES.PRIVACY} element={<PrivacyPage />} />
            </Route>

            {/* Auth routes */}
            <Route element={<PublicRoute><AuthLayout /></PublicRoute>}>
                <Route path={ROUTES.LOGIN} element={<LoginPage />} />
                <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
                <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
            </Route>

            {/* Dashboard routes (protected) */}
            <Route path="/user" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
                <Route path="dashboard" element={<UserDashboard />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="orders" element={<OrdersPage />} />
                <Route path="wishlist" element={<WishlistPage />} />
                <Route path="settings" element={<SettingsPage />} />
            </Route>

            {/* 404 fallback */}
            <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
    );
};

export default AppRouter;
