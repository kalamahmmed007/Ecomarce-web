// src/redux/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import orderReducer from "./slices/orderSlice";
import categoryReducer from "./slices/categorySlice";
import reviewReducer from "./slices/reviewSlice";
import searchReducer from "./slices/searchSlice";
import uiReducer from "./slices/uiSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    orders: orderReducer,
    categories: categoryReducer,
    reviews: reviewReducer,
    search: searchReducer,
    ui: uiReducer,
});

export default rootReducer;
