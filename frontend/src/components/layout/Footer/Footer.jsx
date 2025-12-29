import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="text-gray-300 bg-gray-900">
            <div className="px-6 mx-auto max-w-7xl py-14">

                {/* Top Section */}
                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <h2 className="mb-4 text-2xl font-bold text-white">
                            Ecomerce
                        </h2>
                        <p className="text-sm text-gray-400">
                            Clean products. Real quality.
                            Built for modern shoppers.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/" className="transition hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" className="transition hover:text-white">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="transition hover:text-white">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="transition hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Support
                        </h3>

                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    to="/faq"
                                    className="transition cursor-pointer hover:text-white"
                                >
                                    FAQ
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/privacy-policy"
                                    className="transition cursor-pointer hover:text-white"
                                >
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/terms"
                                    className="transition cursor-pointer hover:text-white"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/refund-policy"
                                    className="transition cursor-pointer hover:text-white"
                                >
                                    Refund Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Newsletter
                        </h3>
                        <p className="mb-4 text-sm text-gray-400">
                            Drop your email — we only send fire updates 🔥
                        </p>

                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full px-4 py-2 text-sm text-white placeholder-gray-500 bg-gray-800 outline-none rounded-l-xl focus:ring-2 focus:ring-gray-600"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 text-sm font-semibold text-white transition bg-gray-700 rounded-r-xl hover:bg-gray-600"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px my-10 bg-gray-800"></div>

                {/* Bottom */}
                <div className="flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
                    <p className="text-gray-500">
                        © {new Date().getFullYear()} Ecomerce. All rights reserved.
                    </p>

                    <div className="flex gap-4">
                        <span className="transition cursor-pointer hover:text-white">
                            Facebook
                        </span>
                        <span className="transition cursor-pointer hover:text-white">
                            Instagram
                        </span>
                        <span className="transition cursor-pointer hover:text-white">
                            Twitter
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
