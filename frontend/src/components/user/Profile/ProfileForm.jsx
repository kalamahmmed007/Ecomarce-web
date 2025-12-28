// src/components/user/Profile/ProfileForm.jsx
import { useState } from "react";

const ProfileForm = ({ user, onUpdate }) => {
    const [form, setForm] = useState({ name: user.name, email: user.email });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = e => {
        e.preventDefault();
        onUpdate(form);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full rounded border px-3 py-2"
            />
            <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full rounded border px-3 py-2"
            />
            <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
                Save Changes
            </button>
        </form>
    );
};

export default ProfileForm;
