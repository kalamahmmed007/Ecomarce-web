// src/components/auth/RegisterForm/RegisterForm.jsx
import { useState } from "react";

const RegisterForm = ({ onRegister }) => {
    const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) return alert("Passwords do not match!");
        onRegister(form);
    };

    return (
        <div className="mx-auto max-w-md space-y-4 rounded bg-white p-6 shadow">
            <h2 className="text-center text-2xl font-semibold">Register</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full rounded border px-3 py-2 focus:ring-2 focus:ring-blue-500"
                />
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
                    className="w-full rounded bg-green-600 py-2 text-white transition hover:bg-green-700"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
