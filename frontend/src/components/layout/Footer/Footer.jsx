// src/components/layout/Footer/Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const footerLinks = [
        { title: "Shop", links: ["All Products", "New Arrivals", "Best Sellers", "Sale"] },
        { title: "Company", links: ["About Us", "Careers", "Blog", "Contact"] },
        { title: "Support", links: ["Help Center", "Shipping", "Returns", "FAQs"] },
    ];

    const paymentIcons = [
        "/assets/images/payment-icons/visa.svg",
        "/assets/images/payment-icons/mastercard.svg",
        "/assets/images/payment-icons/paypal.svg",
        "/assets/images/payment-icons/bkash.svg",
    ];

    return (
        <footer className="border-t border-gray-700 bg-gray-900 pt-12 text-gray-200">
            <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-4">
                {/* Logo & About */}
                <div>
                    <img
                        src="/assets/images/logo.svg"
                        alt="Logo"
                        className="mb-4 w-32"
                    />
                    <p className="text-sm text-gray-400">
                        YourBrand is the best place to find amazing products at unbeatable prices.
                    </p>
                    <div className="mt-4 flex gap-3">
                        <a href="#" className="transition hover:text-red-500">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="transition hover:text-red-500">
                            <FaTwitter />
                        </a>
                        <a href="#" className="transition hover:text-red-500">
                            <FaInstagram />
                        </a>
                        <a href="#" className="transition hover:text-red-500">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Footer Links */}
                {footerLinks.map((section, idx) => (
                    <div key={idx}>
                        <h3 className="mb-4 text-lg font-semibold">{section.title}</h3>
                        <ul className="space-y-2 text-gray-400">
                            {section.links.map((link, i) => (
                                <li key={i}>
                                    <a href="#" className="transition hover:text-red-500">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                {/* Newsletter */}
                <div className="md:col-span-1">
                    <h3 className="mb-4 text-lg font-semibold">Subscribe to our Newsletter</h3>
                    <div className="flex flex-col gap-2 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 rounded border border-gray-700 bg-gray-800 px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <button className="rounded bg-red-600 px-4 py-2 text-white transition hover:bg-red-700">
                            Subscribe
                        </button>
                    </div>

                    {/* Payment Icons */}
                    <div className="mt-6 flex gap-3">
                        {paymentIcons.map((icon, i) => (
                            <img key={i} src={icon} alt="payment" className="h-6" />
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
