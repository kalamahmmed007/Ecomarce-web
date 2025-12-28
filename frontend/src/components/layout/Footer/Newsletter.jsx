// src/components/layout/Footer/Newsletter.jsx
import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;
        console.log("Subscribed with:", email);
        setEmail("");
        alert("Thanks for subscribing!");
    };

    return (
        <div className="rounded-lg bg-gray-100 p-6 text-center md:text-left">
            <h3 className="mb-2 text-xl font-semibold">Subscribe to our Newsletter</h3>
            <p className="mb-4 text-gray-600">
                Get the latest deals and updates straight to your inbox.
            </p>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center gap-2 sm:flex-row md:justify-start"
            >
                <div className="relative flex-1">
                    <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="rounded-lg bg-red-600 px-6 py-2 text-white transition-colors hover:bg-red-700"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default Newsletter;
