import { useState } from "react";
import axios from "axios";

const NewsletterSignup = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            await axios.post("http://localhost:5000/api/newsletter", { email });
            setMessage("Subscribed successfully 🥱");
            setEmail("");
        } catch (error) {
            setMessage("Already subscribed 🤓");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full px-4 py-16 bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="max-w-3xl p-8 mx-auto bg-gray-100 border border-gray-300 shadow-lg rounded-2xl">

                <h2 className="mb-2 text-3xl font-bold text-center text-gray-800">
                    Newsletter
                </h2>
                <p className="mb-6 text-center text-gray-600">
                    No spam. Just clean updates.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 sm:flex-row"
                >
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="flex-1 px-5 py-3 text-gray-800 placeholder-gray-400 transition bg-white border border-gray-300 outline-none rounded-xl focus:border-gray-500 focus:ring-2 focus:ring-gray-300"
                    />

                    <button
                        disabled={loading}
                        className="px-8 py-3 font-semibold text-white transition bg-gray-800 rounded-xl hover:bg-gray-700 disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Subscribe"}
                    </button>
                </form>

                {message && (
                    <p className="mt-4 text-sm text-center text-gray-700">
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default NewsletterSignup;
