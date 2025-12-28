// src/components/auth/ForgotPassword/ResetPassword.jsx
import { useState } from "react";

const ResetPassword = ({ onReset }) => {
    const [form, setForm] = useState({ password: "", confirmPassword: "" });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) return alert("Passwords do not match!");
        onReset(form.password);
    };

    return (
        <div className="mx-auto max-w-md space-y-4 rounded bg-white p-6 shadow">
            <h2 className="text-center text-2xl font-semibold">Reset Password</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="New Password"
                    className="w-full rounded border px-3 py-2 focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className="w-full rounded border px-3 py-2 focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="w-full rounded bg-blue-600 py-2 text-white transition hover:bg-blue-700"
                >
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;
