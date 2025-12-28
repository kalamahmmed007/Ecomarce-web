// src/components/layout/Header/MobileMenu.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as MenuIcon } from "../../../assets/icons/menu.svg";
import { ReactComponent as CartIcon } from "../../../assets/icons/cart.svg";
import { ReactComponent as WishlistIcon } from "../../../assets/icons/heart.svg";
import UserMenu from "./UserMenu";

const MobileMenu = () => {
    const [open, setOpen] = useState(false);
    const cartCount = useSelector((state) => state.cart.items.length);
    const wishlistCount = useSelector((state) => state.wishlist.items.length);
    const user = useSelector((state) => state.auth.user);

    return (
        <div className="relative flex items-center justify-between border-t border-gray-200 bg-white px-4 py-2 md:hidden">
            {/* Hamburger */}
            <button onClick={() => setOpen(!open)}>
                <MenuIcon className="h-6 w-6 text-gray-700" />
            </button>

            {/* Logo */}
            <Link to="/" className="text-lg font-bold text-gray-800">
                ShopName
            </Link>

            {/* Icons on mobile */}
            <div className="flex items-center space-x-4">
                {/* Wishlist */}
                <Link to="/wishlist" className="relative">
                    <WishlistIcon className="h-6 w-6 text-gray-700" />
                    {wishlistCount > 0 && (
                        <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-1 text-xs text-white">
                            {wishlistCount}
                        </span>
                    )}
                </Link>

                {/* Cart */}
                <Link to="/cart" className="relative">
                    <CartIcon className="h-6 w-6 text-gray-700" />
                    {cartCount > 0 && (
                        <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-1 text-xs text-white">
                            {cartCount}
                        </span>
                    )}
                </Link>

                {/* User */}
                <UserMenu user={user} />
            </div>

            {/* Dropdown menu */}
            {open && (
                <div className="absolute left-0 top-12 z-50 flex w-full flex-col space-y-2 bg-white p-4 shadow-md">
                    <Link to="/" className="py-2 hover:text-blue-600">Home</Link>
                    <Link to="/shop" className="py-2 hover:text-blue-600">Shop</Link>
                    <Link to="/about" className="py-2 hover:text-blue-600">About</Link>
                    <Link to="/contact" className="py-2 hover:text-blue-600">Contact</Link>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
