// src/services/orderService.js
import api from "./api";

export const createOrder = async (orderData) => {
    const { data } = await api.post("/orders", orderData);
    return data;
};

export const getOrders = async () => {
    const { data } = await api.get("/orders");
    return data;
};

export const getOrderById = async (orderId) => {
    const { data } = await api.get(`/orders/${orderId}`);
    return data;
};

export const cancelOrder = async (orderId) => {
    const { data } = await api.post(`/orders/${orderId}/cancel`);
    return data;
};

export const trackOrder = async (orderId) => {
    const { data } = await api.get(`/orders/${orderId}/track`);
    return data;
};
