// src/services/userService.js
import api from "./api";

export const getProfile = async () => {
    const { data } = await api.get("/users/profile");
    return data;
};

export const updateProfile = async (profileData) => {
    const { data } = await api.put("/users/profile", profileData);
    return data;
};

export const changePassword = async (passwordData) => {
    const { data } = await api.put("/users/change-password", passwordData);
    return data;
};

export const getAddresses = async () => {
    const { data } = await api.get("/users/addresses");
    return data;
};

export const addAddress = async (address) => {
    const { data } = await api.post("/users/addresses", address);
    return data;
};

export const updateAddress = async (addressId, address) => {
    const { data } = await api.put(`/users/addresses/${addressId}`, address);
    return data;
};

export const deleteAddress = async (addressId) => {
    const { data } = await api.delete(`/users/addresses/${addressId}`);
    return data;
};
