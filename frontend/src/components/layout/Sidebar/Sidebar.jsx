// src/components/layout/Sidebar/Sidebar.jsx
import { useState } from "react";
import SidebarMenu from "./SidebarMenu";

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <>
            {/* Overlay for mobile */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={toggleSidebar}
            ></div>

            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-gray-200 z-50 transform transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between border-b border-gray-700 px-4 py-4">
                    <h2 className="text-lg font-bold">Dashboard</h2>
                    <button onClick={toggleSidebar} className="text-gray-400 hover:text-white md:hidden">
                        ✕
                    </button>
                </div>

                <div className="mt-6">
                    <SidebarMenu />
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
