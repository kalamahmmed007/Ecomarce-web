// src/components/layout/Header/Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";

import SearchBar from "../Header/SearchBar";
import UserMenu from "../Header/UserMenu";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [menuData, setMenuData] = useState([]);
    const cartCount = useSelector((state) => state.cart.items.length);
    const wishlistCount = useSelector((state) => state.wishlist.items.length);

    // Fetch menu from API
    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const res = await fetch("/api/menu"); // replace with your real API
                if (!res.ok) throw new Error("Failed to fetch menu");
                const data = await res.json();
                setMenuData(data);
            } catch (err) {
                console.error("Menu fetch error:", err);
                setMenuData([]); // fallback empty
            }
        };
        fetchMenu();
    }, []);

    return (
        <header className="relative z-50 w-full border-b border-gray-200 bg-white">
            {/* Top Bar */}
            <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-8">
                <Link to="/" className="flex items-center space-x-2 text-lg font-bold text-gray-800">
                    Online
                </Link>

                {/* Desktop Menu */}
                <div className="hidden items-center space-x-4 md:flex">
                    <SearchBar />
                    <Link to="/wishlist" className="relative">
                        <AiOutlineHeart className="h-6 w-6 text-gray-700 hover:text-gray-900" />
                        {wishlistCount > 0 && (
                            <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-1 text-xs text-white">
                                {wishlistCount}
                            </span>
                        )}
                    </Link>
                    <Link to="/cart" className="relative">
                        <AiOutlineShoppingCart className="h-6 w-6 text-gray-700 hover:text-gray-900" />
                        {cartCount > 0 && (
                            <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-1 text-xs text-white">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                    <UserMenu />
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
                    <AiOutlineMenu className="h-6 w-6 text-gray-700" />
                </button>
            </div>

            {/* Desktop Menu Bar */}
            <nav className="hidden border-t border-gray-200 bg-gray-50 md:flex">
                <div className="container mx-auto flex space-x-4 px-4 py-2">
                    {menuData.map((menu) => (
                        <div key={menu.id} className="group relative">
                            <Link
                                to={menu.url || "#"}
                                className="px-3 py-1 font-medium hover:text-blue-600"
                            >
                                {menu.title}
                            </Link>

                            {menu.submenu?.length > 0 && (
                                <div className="absolute left-0 top-full hidden min-w-[150px] rounded-md bg-white py-2 shadow-md group-hover:block">
                                    {menu.submenu.map((sub) => (
                                        <Link
                                            key={sub.id}
                                            to={sub.url}
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        >
                                            {sub.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="absolute left-0 top-full z-50 w-full bg-white shadow-md md:hidden">
                    <div className="flex flex-col space-y-2 p-4">
                        <SearchBar />
                        {menuData.map((menu) => (
                            <div key={menu.id} className="flex flex-col">
                                <Link
                                    to={menu.url || "#"}
                                    onClick={() => setMobileOpen(false)}
                                    className="py-2 font-medium hover:text-blue-600"
                                >
                                    {menu.title}
                                </Link>
                                {menu.submenu?.length > 0 && (
                                    <div className="flex flex-col space-y-1 pl-4">
                                        {menu.submenu.map((sub) => (
                                            <Link
                                                key={sub.id}
                                                to={sub.url}
                                                onClick={() => setMobileOpen(false)}
                                                className="py-1 text-gray-700 hover:text-blue-600"
                                            >
                                                {sub.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="mt-4 flex items-center space-x-4">
                            <Link to="/wishlist" className="relative">
                                <AiOutlineHeart className="h-6 w-6 text-gray-700" />
                                {wishlistCount > 0 && (
                                    <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-1 text-xs text-white">
                                        {wishlistCount}
                                    </span>
                                )}
                            </Link>
                            <Link to="/cart" className="relative">
                                <AiOutlineShoppingCart className="h-6 w-6 text-gray-700" />
                                {cartCount > 0 && (
                                    <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-1 text-xs text-white">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                            <UserMenu />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
