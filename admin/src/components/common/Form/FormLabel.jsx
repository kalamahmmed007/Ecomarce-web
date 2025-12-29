import React from "react";

const FormLabel = ({ htmlFor, children, className = "" }) => {
    return (
        <label htmlFor={htmlFor} className={`block mb-1 font-medium text-gray-700 ${className}`}>
            {children}
        </label>
    );
};

export default FormLabel;
