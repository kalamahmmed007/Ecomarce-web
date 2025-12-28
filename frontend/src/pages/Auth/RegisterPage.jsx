import React from "react";
import AuthLayout from "../../components/layout/MainLayout/AuthLayout";
import RegisterForm from "../../components/auth/RegisterForm/RegisterForm";

const RegisterPage = () => (
    <AuthLayout>
        <div className="mx-auto mt-20 max-w-md rounded-lg bg-white p-6 shadow-lg">
            <RegisterForm />
        </div>
    </AuthLayout>
);

export default RegisterPage;
