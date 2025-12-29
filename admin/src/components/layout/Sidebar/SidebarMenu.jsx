import React from "react";
import SidebarItem from "./SidebarItem";

const SidebarMenu = () => {
    const menuItems = [
        { label: "Dashboard", icon: "/assets/icons/dashboard.svg", to: "/admin/dashboard" },
        { label: "Products", icon: "/assets/icons/products.svg", to: "/admin/products" },
        { label: "Orders", icon: "/assets/icons/orders.svg", to: "/admin/orders" },
        { label: "Users", icon: "/assets/icons/users.svg", to: "/admin/customers" },
    ];

    return (
        <nav className="mt-6">
            {menuItems.map((item) => (
                <SidebarItem key={item.label} {...item} />
            ))}
        </nav>
    );
};

export default SidebarMenu;
