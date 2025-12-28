// src/components/layout/Navbar/NavItem.jsx
import { Link } from "react-router-dom";

const NavItem = ({ name, path, children, hasMegaMenu }) => {
    return (
        <div className="group relative">
            <Link
                to={path}
                className="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
                {name}
            </Link>

            {hasMegaMenu && (
                <div className="absolute left-0 z-50 mt-2 hidden w-64 bg-white p-4 shadow-lg group-hover:block">
                    {children}
                </div>
            )}
        </div>
    );
};

export default NavItem;
