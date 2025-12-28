export const APP_NAME = "My E-Commerce App";
export const APP_DESCRIPTION = "Best online shop for tech & lifestyle products";
export const APP_VERSION = "1.0.0";

export const ROUTES = {
    home: "/",
    shop: "/shop",
    productDetails: (id) => `/product/${id}`,
    cart: "/cart",
    checkout: "/checkout",
    login: "/auth/login",
    register: "/auth/register",
    profile: "/user/profile",
    dashboard: "/user/dashboard",
};
