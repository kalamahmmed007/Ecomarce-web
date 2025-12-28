export const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const ENDPOINTS = {
    auth: {
        login: "/auth/login",
        register: "/auth/register",
        logout: "/auth/logout",
        refresh: "/auth/refresh",
    },
    products: {
        list: "/products",
        detail: (id) => `/products/${id}`,
        categories: "/categories",
        search: "/products/search",
    },
    cart: {
        get: "/cart",
        add: "/cart/add",
        update: "/cart/update",
        remove: "/cart/remove",
    },
    orders: {
        create: "/orders",
        list: "/orders",
        detail: (id) => `/orders/${id}`,
    },
    user: {
        profile: "/user/profile",
        addresses: "/user/addresses",
    },
    wishlist: {
        get: "/wishlist",
        add: "/wishlist/add",
        remove: "/wishlist/remove",
    },
};
