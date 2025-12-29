import React from "react";

const Spinner = ({ size = 6, className = "" }) => {
    return (
        <div
            className={`animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-blue-500 h-${size} w-${size} ${className}`}
        ></div>
    );
};

export default Spinner;
