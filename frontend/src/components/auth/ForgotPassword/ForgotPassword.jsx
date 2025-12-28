// src/components/auth/ForgotPassword/ForgotPassword.jsx
import { useState } from "react";

const ForgotPassword = ({ onSubmit }) => {
    const [email, setEmail] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(email);
    };

    return (
        <div className="mx-auto max-w-md space-y-4 rounded bg-white p-6 shadow">
            <h2 className="text-center text-2xl font-semibold">Forgot Password</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded border px-3 py-2 focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="w-full rounded bg-yellow-600 py-2 text-white transition hover:bg-yellow-700"
                >
                    Send Reset Link
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
