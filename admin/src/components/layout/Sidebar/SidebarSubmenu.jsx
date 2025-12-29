import React, { useState } from "react";
import SidebarItem from "./SidebarItem";

const SidebarSubmenu = ({ label, icon, items = [] }) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center w-full px-6 py-3 text-gray-700 hover:bg-gray-100"
            >
                <img src={icon} alt={label} className="w-5 h-5 mr-3" />
                <span>{label}</span>
                <span className="ml-auto">{open ? "-" : "+"}</span>
            </button>
            {open && (
                <div className="ml-8">
                    {items.map((item) => (
                        <SidebarItem key={item.label} {...item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SidebarSubmenu;
