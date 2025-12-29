import React from "react";

const IconButton = ({ icon, onClick, className = "", title ="", disabled = false }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            title={title}
            className={`p-2 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 ${className}`}
        >
            {icon}
        </button>
    );
};

export default IconButton;
