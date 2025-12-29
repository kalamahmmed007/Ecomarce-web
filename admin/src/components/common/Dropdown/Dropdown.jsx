import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ label, children, className = "" }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={ref} className={`relative inline-block ${className}`}>
            <button
                onClick={() => setOpen(!open)}
                className="px-4 py-2 bg-white border rounded hover:bg-gray-100 focus:outline-none"
            >
                {label}
            </button>
            {open && <div className="absolute z-10 w-48 mt-2 bg-white border rounded shadow">{children}</div>}
        </div>
    );
};

export default Dropdown;
