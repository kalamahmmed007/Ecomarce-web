import React from "react";

const Checkbox = ({ checked, onChange, label, className = "" }) => {
    return (
        <label className={`flex items-center space-x-2 ${className}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="w-4 h-4 text-blue-600 form-checkbox"
            />
            {label && <span>{label}</span>}
        </label>
    );
};

export default Checkbox;
