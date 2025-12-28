// src/components/product/ProductFilter/PriceFilter.jsx
import React, { useState, useEffect } from "react";

const PriceFilter = ({ min = 0, max = 1000, selectedMin, selectedMax, onChange }) => {
    const [range, setRange] = useState([selectedMin ?? min, selectedMax ?? max]);

    useEffect(() => {
        setRange([selectedMin ?? min, selectedMax ?? max]);
    }, [selectedMin, selectedMax, min, max]);

    const handleChange = (index, value) => {
        const newRange = [...range];
        newRange[index] = Number(value);
        setRange(newRange);
        onChange && onChange(newRange);
    };

    return (
        <div className="rounded bg-white p-4 shadow">
            <h4 className="mb-3 font-semibold">Filter by Price</h4>
            <div className="mb-2 flex items-center space-x-2">
                <input
                    type="number"
                    value={range[0]}
                    min={min}
                    max={range[1]}
                    onChange={(e) => handleChange(0, e.target.value)}
                    className="w-1/2 rounded border p-1"
                />
                <span>-</span>
                <input
                    type="number"
                    value={range[1]}
                    min={range[0]}
                    max={max}
                    onChange={(e) => handleChange(1, e.target.value)}
                    className="w-1/2 rounded border p-1"
                />
            </div>
            <input
                type="range"
                min={min}
                max={max}
                value={range[0]}
                onChange={(e) => handleChange(0, e.target.value)}
                className="mb-1 w-full"
            />
            <input
                type="range"
                min={min}
                max={max}
                value={range[1]}
                onChange={(e) => handleChange(1, e.target.value)}
                className="w-full"
            />
            <div className="mt-2 text-gray-700">
                Price: ${range[0]} - ${range[1]}
            </div>
        </div>
    );
};

export default PriceFilter;
