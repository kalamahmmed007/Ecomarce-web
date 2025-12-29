import React from "react";
import Button from "./Button";

const ActionButton = ({ children, onClick, variant = "primary", className = "", ...props }) => {
    const baseClasses = "px-4 py-2 rounded focus:outline-none focus:ring-2";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-400",
    };

    return (
        <Button
            onClick={onClick}
            className={`${baseClasses} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </Button>
    );
};

export default ActionButton;
