
const AccountSettings = ({ user, onUpdate }) => {
    const [form, setForm] = React.useState({ name: user.name, email: user.email });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = e => {
        e.preventDefault();
        onUpdate(form);
    };

    return (
        <div className="mx-auto max-w-2xl space-y-4 rounded bg-white p-6 shadow">
            <h2 className="text-2xl font-semibold">Account Settings</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
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
                <button className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
                    Update
                </button>
            </form>
        </div>
    );
};

export default AccountSettings;
