import React from "react";

const DateRangePicker = ({ startDate, endDate, onStartChange, onEndChange, className = "" }) => {
    return (
        <div className={`flex space-x-2 ${className}`}>
            <input
                type="date"
                value={startDate}
                onChange={(e) => onStartChange(e.target.value)}
                className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span className="self-center">to</span>
            <input
                type="date"
                value={endDate}
                onChange={(e) => onEndChange(e.target.value)}
                className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>
    );
};

export default DateRangePicker;
