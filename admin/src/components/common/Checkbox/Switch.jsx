import React from "react";

const Switch = ({ checked, onChange, className = "" }) => {
    return (
        <label className={`relative inline-flex items-center cursor-pointer ${className}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="sr-only"
            />
            <div
                className={`w-10 h-4 bg-gray-300 rounded-full shadow-inner transition-colors duration-200 ${checked ? "bg-blue-500" : ""
                    }`}
            ></div>
            <div
                className={`dot absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow transform transition-transform duration-200 ${checked ? "translate-x-full" : ""
                    }`}
            ></div>
        </label>
    );
};

export default Switch;
