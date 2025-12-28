import React, { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", form);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-red-50 p-6">
            <div className="flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl md:flex-row">
                {/* Left side */}
                <div className="flex flex-col justify-center bg-black p-10 text-white md:w-1/2">
                    <h1 className="mb-6 text-4xl font-extrabold text-red-600">Get in Touch</h1>
                    <p className="mb-6 text-gray-300">
                        Have questions or want to work with us? Fill out the form and we’ll get back to you shortly!
                    </p>
                    <div className="space-y-2">
                        <p><span className="font-bold">Email:</span> contact@brand.com</p>
                        <p><span className="font-bold">Phone:</span> +880 1234 567890</p>
                        <p><span className="font-bold">Address:</span> Dhaka, Bangladesh</p>
                    </div>
                </div>

                {/* Right side */}
                <div className="bg-white p-10 md:w-1/2">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="mb-2 block font-medium text-black">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-200"
                                required
                            />
                        </div>

                        <div>
                            <label className="mb-2 block font-medium text-black">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-200"
                                required
                            />
                        </div>

                        <div>
                            <label className="mb-2 block font-medium text-black">Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-200"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-red-600 py-3 font-bold text-white transition-colors hover:bg-red-700"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
