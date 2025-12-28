// src/services/paymentService.js
import api from "./api";

export const createPaymentIntent = async (orderId, paymentMethod) => {
    const { data } = await api.post(`/payments/create-intent`, { orderId, paymentMethod });
    return data;
};

export const confirmPayment = async (paymentId) => {
    const { data } = await api.post(`/payments/confirm/${paymentId}`);
    return data;
};
