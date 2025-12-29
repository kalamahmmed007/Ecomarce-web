import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items = [], className = "" }) => {
    return (
        <nav className={`text-sm text-gray-600 ${className}`}>
            <ol className="flex space-x-2">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                        {idx !== 0 && <span className="mx-2">/</span>}
                        {item.to ? (
                            <Link to={item.to} className="hover:underline">
                                {item.label}
                            </Link>
                        ) : (
                            <span>{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
