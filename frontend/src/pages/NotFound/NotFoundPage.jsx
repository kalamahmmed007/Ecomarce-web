import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center bg-gray-50">
        <h1 className="mb-4 font-extrabold text-blue-600 text-7xl">404</h1>
        <p className="mb-6 text-xl text-gray-600">Oops! The page you’re looking for doesn’t exist.</p>
        <Link
            to="/"
            className="inline-block px-6 py-3 font-semibold text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow hover:bg-blue-700"
        >
            Go Home
        </Link>
    </div>
);

export default NotFoundPage;
