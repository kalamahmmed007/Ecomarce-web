import React from "react";

const MultiSelect = ({ options, selectedValues, onChange, className = "" }) => {
    const toggleValue = (val) => {
        if (selectedValues.includes(val)) {
            onChange(selectedValues.filter((v) => v !== val));
        } else {
            onChange([...selectedValues, val]);
        }
    };

    return (
        <div className={`border rounded p-2 ${className}`}>
            {options.map((opt) => (
                <label key={opt.value} className="flex items-center mb-1 space-x-2">
                    <input
                        type="checkbox"
                        checked={selectedValues.includes(opt.value)}
                        onChange={() => toggleValue(opt.value)}
                    />
                    <span>{opt.label}</span>
                </label>
            ))}
        </div>
    );
};

export default MultiSelect;
