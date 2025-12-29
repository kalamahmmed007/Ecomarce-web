import React from "react";

const FormSection = ({ title, children, className = "" }) => {
    return (
        <div className={`mb-6 ${className}`}>
            {title && <h4 className="mb-2 font-semibold text-gray-800 text-md">{title}</h4>}
            {children}
        </div>
    );
};

export default FormSection;
