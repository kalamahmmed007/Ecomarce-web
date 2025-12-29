import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const AdminLayout = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Header />
                <main className="flex-1 p-6 overflow-auto">{children}</main>
            </div>
        </div>
    );
};

export default AdminLayout;
