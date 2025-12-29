import React from "react";

const DatePicker = ({ value, onChange, className = "" }) => {
    return (
        <input
            type="date"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
        />
    );
};

export default DatePicker;
