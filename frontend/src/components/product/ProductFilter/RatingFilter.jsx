// src/components/product/ProductFilter/RatingFilter.jsx
import React, { useState, useEffect } from "react";
import { FiStar } from "react-icons/fi";

const RatingFilter = ({ selectedRating = 0, onChange }) => {
    const [rating, setRating] = useState(selectedRating);

    useEffect(() => {
        setRating(selectedRating);
    }, [selectedRating]);

    const handleSelect = (value) => {
        setRating(value);
        onChange && onChange(value);
    };

    const renderStars = (value) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= value) {
                stars.push(<FiStar key={i} className="inline-block h-5 w-5 text-yellow-400" />);
            } else {
                stars.push(<FiStarOutline key={i} className="inline-block h-5 w-5 text-gray-300" />);
            }
        }
        return stars;
    };

    const options = [5, 4, 3, 2, 1]; // Highest rating first

    return (
        <div className="rounded bg-white p-4 shadow">
            <h4 className="mb-3 font-semibold">Filter by Rating</h4>
            <ul className="space-y-2">
                {options.map((value) => (
                    <li key={value}>
                        <button
                            onClick={() => handleSelect(value)}
                            className={`flex items-center space-x-2 focus:outline-none ${rating === value ? "font-semibold" : "font-normal"
                                }`}
                        >
                            <span>{renderStars(value)}</span>
                            <span className="text-gray-700">& Up</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RatingFilter;
