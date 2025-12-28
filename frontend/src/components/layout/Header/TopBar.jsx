// src/components/layout/Header/TopBar.jsx
import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <div className="flex items-center justify-between bg-gray-100 px-4 py-1 text-xs text-gray-600 md:text-sm">
            <div>
                <span>Free shipping on orders over $50!</span>
            </div>
            <div className="flex space-x-4">
                <Link to="/faq" className="hover:text-gray-900">FAQ</Link>
                <Link to="/contact" className="hover:text-gray-900">Contact</Link>
            </div>
        </div>
    );
};

export default TopBar;
