import React from "react";

const FormError = ({ message, className = "" }) => {
    if (!message) return null;
    return <p className={`text-red-500 text-sm mt-1 ${className}`}>{message}</p>;
};

export default FormError;
