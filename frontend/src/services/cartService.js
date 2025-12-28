// src/services/cartService.js
import api from "./api";

export const getCart = async () => {
    const { data } = await api.get("/cart");
    return data;
};

export const addToCart = async (productId, quantity = 1) => {
    const { data } = await api.post("/cart", { productId, quantity });
    return data;
};

export const updateCart = async (productId, quantity) => {
    const { data } = await api.put("/cart", { productId, quantity });
    return data;
};

export const removeFromCart = async (productId) => {
    const { data } = await api.delete(`/cart/${productId}`);
    return data;
};
