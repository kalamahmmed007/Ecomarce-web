import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ label, icon, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${isActive ? "bg-gray-200 font-semibold" : ""
                }`
            }
        >
            <img src={icon} alt={label} className="w-5 h-5 mr-3" />
            <span>{label}</span>
        </NavLink>
    );
};

export default SidebarItem;
