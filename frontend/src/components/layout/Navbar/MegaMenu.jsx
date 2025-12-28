// src/components/layout/Navbar/MegaMenu.jsx
import { Link } from "react-router-dom";

const MegaMenu = () => {
    const categories = ["Electronics", "Fashion", "Home", "Beauty", "Sports"];

    return (
        <div className="grid grid-cols-2 gap-4">
            {categories.map((cat) => (
                <Link
                    key={cat}
                    to={`/category/${cat.toLowerCase()}`}
                    className="block rounded px-2 py-1 hover:bg-gray-100"
                >
                    {cat}
                </Link>
            ))}
        </div>
    );
};

export default MegaMenu;
