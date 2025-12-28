// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";

// Import slices
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import authReducer from "./slices/authSlice";
import searchReducer from "./slices/searchSlice";

// Optional: custom middleware
import apiMiddleware from "./middleware/apiMiddleware";
import loggerMiddleware from "./middleware/loggerMiddleware";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,
        auth: authReducer,
        search: searchReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiMiddleware, loggerMiddleware),
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
