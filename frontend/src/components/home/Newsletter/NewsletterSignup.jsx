// src/components/home/Newsletter/NewsletterSignup.jsx
import { useState } from "react";

const NewsletterSignup = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        // fake submission
        setSubmitted(true);
    };

    return (
        <section className="bg-blue-50 py-12">
            <div className="mx-auto max-w-lg text-center">
                <h2 className="mb-4 text-2xl font-semibold">Subscribe to Our Newsletter</h2>
                <p className="mb-6 text-gray-600">Get the latest deals and updates directly in your inbox</p>
                {submitted ? (
                    <p className="font-semibold text-green-600">Thank you for subscribing!</p>
                ) : (
                    <form className="flex gap-2" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="flex-1 rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="rounded bg-blue-600 px-4 text-white transition hover:bg-blue-700">
                            Subscribe
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default NewsletterSignup;
