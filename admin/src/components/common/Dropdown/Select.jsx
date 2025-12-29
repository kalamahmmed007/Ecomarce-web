import React from "react";

const Select = ({ options, value, onChange, className = "" }) => {
    return (
        <select
            value={value}
            onChange={onChange}
            className={`px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
        >
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
