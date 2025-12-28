// src/components/layout/Header/MainNav.jsx
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { ReactComponent as CartIcon } from "../../../assets/icons/cart.svg";
import { ReactComponent as WishlistIcon } from "../../../assets/icons/heart.svg";

const MainNav = () => {
    const cartCount = useSelector((state) => state.cart.items.length); // Redux cart count
    const wishlistCount = useSelector((state) => state.wishlist.items.length); // Redux wishlist count
    const user = useSelector((state) => state.auth.user); // Redux auth user

    return (
        <div className="flex items-center justify-between px-4 py-3 md:px-8">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
                <Logo className="h-8 w-auto" />
                <span className="text-lg font-bold text-gray-800">ShopName</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden space-x-6 font-medium text-gray-700 md:flex">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            {/* Right icons */}
            <div className="flex items-center space-x-4">
                <SearchBar />

                {/* Wishlist */}
                <Link to="/wishlist" className="relative">
                    <WishlistIcon className="h-6 w-6 text-gray-700 hover:text-gray-900" />
                    {wishlistCount > 0 && (
                        <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-1 text-xs text-white">
                            {wishlistCount}
                        </span>
                    )}
                </Link>

                {/* Cart */}
                <Link to="/cart" className="relative">
                    <CartIcon className="h-6 w-6 text-gray-700 hover:text-gray-900" />
                    {cartCount > 0 && (
                        <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-1 text-xs text-white">
                            {cartCount}
                        </span>
                    )}
                </Link>

                {/* User */}
                <UserMenu user={user} />
            </div>
        </div>
    );
};

export default MainNav;
