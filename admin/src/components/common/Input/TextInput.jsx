import React from "react";

const TextInput = ({ label, value, onChange, placeholder = "", className = "", error }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {label && <label className="mb-1 font-medium text-gray-700">{label}</label>}
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${error ? "border-red-500" : "border-gray-300"
                    }`}
            />
            {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
        </div>
    );
};

export default TextInput;
