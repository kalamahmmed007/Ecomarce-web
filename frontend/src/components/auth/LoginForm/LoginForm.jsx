// src/components/auth/LoginForm/LoginForm.jsx
import { useState } from "react";
import SocialLogin from "./SocialLogin";

const LoginForm = ({ onLogin }) => {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        onLogin(form);
    };

    return (
        <div className="mx-auto max-w-md space-y-4 rounded bg-white p-6 shadow">
            <h2 className="text-center text-2xl font-semibold">Login</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full rounded border px-3 py-2 focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full rounded border px-3 py-2 focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="w-full rounded bg-blue-600 py-2 text-white transition hover:bg-blue-700"
                >
                    Login
                </button>
            </form>
            <SocialLogin />
        </div>
    );
};

export default LoginForm;
