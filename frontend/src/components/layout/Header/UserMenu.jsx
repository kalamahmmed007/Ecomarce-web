// src/components/layout/Header/UserMenu.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const UserMenu = () => {
    const [open, setOpen] = useState(false);
    const user = useSelector((state) => state.auth.user);

    const handleLogout = () => {
        // Dispatch logout action or clear token
        console.log("Logout clicked");
    };

    return (
        <div className="relative">
            <button onClick={() => setOpen(!open)} className="flex items-center">
                {user ? (
                    <img
                        src={user.avatar || "/default-avatar.png"}
                        alt="User"
                        className="h-6 w-6 rounded-full"
                    />
                ) : (
                    <FaUserCircle className="h-6 w-6 text-gray-700" />
                )}
            </button>

            {open && (
                <div className="absolute right-0 top-full z-50 mt-2 w-40 rounded-md bg-white py-2 shadow-md">
                    {user ? (
                        <>
                            <Link
                                to="/user/profile"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setOpen(false)}
                            >
                                Profile
                            </Link>
                            <Link
                                to="/user/orders"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setOpen(false)}
                            >
                                Orders
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                <FiLogOut className="mr-2" /> Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setOpen(false)}
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setOpen(false)}
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserMenu;
