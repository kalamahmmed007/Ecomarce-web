// src/services/categoryService.js
import api from "./api";

export const getCategories = async () => {
    const { data } = await api.get("/categories");
    return data;
};

export const getCategoryById = async (id) => {
    const { data } = await api.get(`/categories/${id}`);
    return data;
};
