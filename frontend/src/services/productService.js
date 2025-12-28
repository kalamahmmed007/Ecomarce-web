// src/services/productService.js
import api from "./api";

export const getProducts = async (params) => {
    const { data } = await api.get("/products", { params });
    return data;
};

export const getProductById = async (id) => {
    const { data } = await api.get(`/products/${id}`);
    return data;
};

export const searchProducts = async (query) => {
    const { data } = await api.get("/products/search", { params: { q: query } });
    return data;
};

export const getProductsByCategory = async (categoryId) => {
    const { data } = await api.get(`/categories/${categoryId}/products`);
    return data;
};

export const getRelatedProducts = async (productId) => {
    const { data } = await api.get(`/products/${productId}/related`);
    return data;
};
