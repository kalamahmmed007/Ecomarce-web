import React from "react";
import AuthLayout from "../../components/layout/MainLayout/AuthLayout";
import ForgotPassword from "../../components/auth/ForgotPassword/ForgotPassword";

const ForgotPasswordPage = () => (
    <AuthLayout>
        <div className="mx-auto mt-20 max-w-md rounded-lg bg-white p-6 shadow-lg">
            <ForgotPassword />
        </div>
    </AuthLayout>
);

export default ForgotPasswordPage;
