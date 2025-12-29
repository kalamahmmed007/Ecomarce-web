import React from "react";

const SearchInput = ({ value, onChange, placeholder = "Search...", className = "" }) => {
    return (
        <div className={`flex items-center border rounded px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400 ${className}`}>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="flex-1 bg-transparent border-none outline-none"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
            </svg>
        </div>
    );
};

export default SearchInput;
