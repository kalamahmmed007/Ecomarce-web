// src/pages/Auth/LoginPage.jsx
import React from "react";
import AuthLayout from "../../components/layout/MainLayout/AuthLayout";
import LoginForm from "../../components/auth/LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <AuthLayout>
            <div className="mx-auto mt-20 max-w-md rounded-lg bg-white p-6 shadow-lg">
                <LoginForm />
            </div>
        </AuthLayout>
    );
};

export default LoginPage;
