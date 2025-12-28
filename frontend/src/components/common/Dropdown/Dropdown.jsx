// src/components/common/Dropdown/Dropdown.jsx
import { useState } from "react";

const Dropdown = ({ options = [], selected, onSelect }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative inline-block w-48">
            <button
                onClick={() => setOpen(!open)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-left text-sm focus:ring-2 focus:ring-blue-500"
            >
                {selected || "Select an option"}
            </button>

            {open && (
                <ul className="absolute z-10 mt-1 w-full rounded-md border border-gray-300 bg-white shadow-lg">
                    {options.map((opt) => (
                        <li
                            key={opt}
                            onClick={() => { onSelect(opt); setOpen(false); }}
                            className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100"
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
