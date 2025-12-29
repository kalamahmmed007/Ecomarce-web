import React, { useState } from "react";

const SearchBar = ({ placeholder = "Search..." }) => {
    const [query, setQuery] = useState("");

    return (
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-64 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
    );
};

export default SearchBar;
