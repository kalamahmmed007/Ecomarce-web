// src/components/checkout/ShippingForm/AddressForm.jsx
import { useState } from "react";

const AddressForm = ({ onSubmit }) => {
    const [form, setForm] = useState({ name: "", street: "", city: "", zip: "", phone: "" });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(form);
        setForm({ name: "", street: "", city: "", zip: "", phone: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-2 rounded border p-4">
            {["name", "street", "city", "zip", "phone"].map(field => (
                <input
                    key={field}
                    type="text"
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    className="w-full rounded border px-2 py-1"
                    required
                />
            ))}
            <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
                Add Address
            </button>
        </form>
    );
};

export default AddressForm;
