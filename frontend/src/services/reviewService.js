// src/services/reviewService.js
import api from "./api";

export const getReviews = async (productId) => {
    const { data } = await api.get(`/products/${productId}/reviews`);
    return data;
};

export const addReview = async (productId, reviewData) => {
    const { data } = await api.post(`/products/${productId}/reviews`, reviewData);
    return data;
};

export const updateReview = async (reviewId, reviewData) => {
    const { data } = await api.put(`/reviews/${reviewId}`, reviewData);
    return data;
};

export const deleteReview = async (reviewId) => {
    const { data } = await api.delete(`/reviews/${reviewId}`);
    return data;
};
