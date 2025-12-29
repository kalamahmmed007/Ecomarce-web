import React from "react";

const Badge = ({ children, className = "", color ="blue" }) => {
    const colors = {
        blue: "bg-blue-100 text-blue-800",
        green: "bg-green-100 text-green-800",
        red: "bg-red-100 text-red-800",
        yellow: "bg-yellow-100 text-yellow-800",
        gray: "bg-gray-100 text-gray-800",
    };

    return (
        <span className={`px-2 py-1 rounded text-sm font-medium ${colors[color]} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
