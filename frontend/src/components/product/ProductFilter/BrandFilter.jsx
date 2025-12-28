// src/components/product/ProductFilter/BrandFilter.jsx
import React, { useState, useEffect } from "react";

const BrandFilter = ({ brands = [], selectedBrands = [], onChange }) => {
    const [selected, setSelected] = useState(selectedBrands);

    useEffect(() => {
        setSelected(selectedBrands);
    }, [selectedBrands]);

    const handleToggle = (brand) => {
        let updated;
        if (selected.includes(brand)) {
            updated = selected.filter((b) => b !== brand);
        } else {
            updated = [...selected, brand];
        }
        setSelected(updated);
        onChange && onChange(updated); // Pass updated selection to parent
    };

    return (
        <div className="rounded bg-white p-4 shadow">
            <h4 className="mb-3 font-semibold">Filter by Brand</h4>
            <ul className="space-y-2">
                {brands.map((brand) => (
                    <li key={brand}>
                        <label className="flex cursor-pointer items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={selected.includes(brand)}
                                onChange={() => handleToggle(brand)}
                                className="form-checkbox h-4 w-4 text-blue-500"
                            />
                            <span className="text-gray-700">{brand}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrandFilter;
