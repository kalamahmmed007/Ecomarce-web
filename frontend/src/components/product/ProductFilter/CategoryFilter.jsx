// src/components/product/ProductFilter/CategoryFilter.jsx
import React, { useState, useEffect } from "react";

const CategoryFilter = ({ categories = [], selectedCategories = [], onChange }) => {
    const [selected, setSelected] = useState(selectedCategories);

    useEffect(() => {
        setSelected(selectedCategories);
    }, [selectedCategories]);

    const handleToggle = (category) => {
        let updated;
        if (selected.includes(category)) {
            updated = selected.filter((c) => c !== category);
        } else {
            updated = [...selected, category];
        }
        setSelected(updated);
        onChange && onChange(updated); // Notify parent component
    };

    return (
        <div className="rounded bg-white p-4 shadow">
            <h4 className="mb-3 font-semibold">Filter by Category</h4>
            <ul className="space-y-2">
                {categories.map((category) => (
                    <li key={category}>
                        <label className="flex cursor-pointer items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={selected.includes(category)}
                                onChange={() => handleToggle(category)}
                                className="form-checkbox h-4 w-4 text-blue-500"
                            />
                            <span className="text-gray-700">{category}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryFilter;
