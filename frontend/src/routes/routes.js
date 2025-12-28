// src/routes/routes.js
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
import OrderDetailsPage from "../pages/User/Orders/OrderDetailsPage";
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

// Path constants
export const routes = {
    home: "/",
    shop: "/shop",
    productDetails: "/product/:id",
    cart: "/cart",
    checkout: "/checkout",
    orderSuccess: "/order-success",
    login: "/login",
    register: "/register",
    forgotPassword: "/forgot-password",
    category: "/category/:id",
    search: "/search",
    about: "/about",
    contact: "/contact",
    faq: "/faq",
    terms: "/terms",
    privacy: "/privacy",
    userDashboard: "/user/dashboard",
    userProfile: "/user/profile",
    userOrders: "/user/orders",
    userOrderDetails: "/user/orders/:id",
    userWishlist: "/user/wishlist",
    userSettings: "/user/settings",
};

// Optional: arrays for mapping if needed
export const publicRoutes = [
    { path: routes.home, element: HomePage },
    { path: routes.shop, element: ShopPage },
    { path: routes.productDetails, element: ProductDetailsPage },
    { path: routes.cart, element: CartPage },
    { path: routes.checkout, element: CheckoutPage },
    { path: routes.orderSuccess, element: OrderSuccessPage },
    { path: routes.login, element: LoginPage },
    { path: routes.register, element: RegisterPage },
    { path: routes.forgotPassword, element: ForgotPasswordPage },
    { path: routes.category, element: CategoryPage },
    { path: routes.search, element: SearchPage },
    { path: routes.about, element: AboutPage },
    { path: routes.contact, element: ContactPage },
    { path: routes.faq, element: FAQPage },
    { path: routes.terms, element: TermsPage },
    { path: routes.privacy, element: PrivacyPage },
];

export const protectedRoutes = [
    { path: routes.userDashboard, element: UserDashboard, roles: ["user", "admin"] },
    { path: routes.userProfile, element: ProfilePage, roles: ["user", "admin"] },
    { path: routes.userOrders, element: OrdersPage, roles: ["user", "admin"] },
    { path: routes.userOrderDetails, element: OrderDetailsPage, roles: ["user", "admin"] },
    { path: routes.userWishlist, element: WishlistPage, roles: ["user", "admin"] },
    { path: routes.userSettings, element: SettingsPage, roles: ["user", "admin"] },
];
