import React from "react";
import MainLayout from "../../components/layout/MainLayout/MainLayout";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
    <MainLayout>
        <div className="flex h-[70vh] flex-col items-center justify-center text-center">
            <h1 className="mb-4 text-6xl font-bold">404</h1>
            <p className="mb-6 text-lg">Page not found</p>
            <Link to="/" className="rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
                Go Home
            </Link>
        </div>
    </MainLayout>
);

export default NotFoundPage;
