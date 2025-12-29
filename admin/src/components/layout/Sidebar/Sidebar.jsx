import React from "react";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
    return (
        <aside className="flex-shrink-0 w-64 bg-white shadow">
            <div className="p-6 text-xl font-bold text-blue-600">Admin Panel</div>
            <SidebarMenu />
        </aside>
    );
};

export default Sidebar;
