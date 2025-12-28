// src/components/layout/Sidebar/SidebarMenu.jsx
import { Link, useLocation } from "react-router-dom";

const menuItems = [
    { name: "Dashboard", path: "/user/dashboard" },
    { name: "Orders", path: "/user/orders" },
    { name: "Wishlist", path: "/user/wishlist" },
    { name: "Profile", path: "/user/profile" },
    { name: "Settings", path: "/user/settings" },
];

const SidebarMenu = () => {
    const location = useLocation();

    return (
        <nav>
            <ul className="flex flex-col space-y-2">
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                className={`block px-4 py-2 rounded-md hover:bg-gray-700 ${isActive ? "bg-gray-800 font-semibold" : ""
                                    }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default SidebarMenu;
