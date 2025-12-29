import React from "react";

const Button = ({ children, onClick, className = "", type ="button", disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-400 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
