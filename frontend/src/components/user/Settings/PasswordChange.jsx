// src/components/user/Settings/PasswordChange.jsx
const PasswordChange = ({ onChangePassword }) => {
    const [form, setForm] = React.useState({ oldPassword: "", newPassword: "", confirmPassword: "" });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = e => {
        e.preventDefault();
        if (form.newPassword !== form.confirmPassword) return alert("Passwords do not match!");
        onChangePassword(form);
    };

    return (
        <div className="mx-auto max-w-2xl space-y-4 rounded bg-white p-6 shadow">
            <h2 className="text-2xl font-semibold">Change Password</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    type="password"
                    name="oldPassword"
                    value={form.oldPassword}
                    onChange={handleChange}
                    placeholder="Current Password"
                    className="w-full rounded border px-3 py-2"
                />
                <input
                    type="password"
                    name="newPassword"
                    value={form.newPassword}
                    onChange={handleChange}
                    placeholder="New Password"
                    className="w-full rounded border px-3 py-2"
                />
                <input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className="w-full rounded border px-3 py-2"
                />
                <button className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
                    Update Password
                </button>
            </form>
        </div>
    );
};

export default PasswordChange;
