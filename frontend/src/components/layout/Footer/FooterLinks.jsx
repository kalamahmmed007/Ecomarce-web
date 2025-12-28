// src/components/layout/Footer/FooterLinks.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const FooterLinks = () => {
    const quickLinks = [
        { name: "Shop", href: "/shop" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/faq" },
    ];

    const customerService = [
        { name: "Shipping", href: "/shipping" },
        { name: "Returns", href: "/returns" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms & Conditions", href: "/terms" },
    ];



    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Quick Links */}
            <div className="flex flex-col space-y-2">
                <h3 className="mb-2 font-semibold">Quick Links</h3>
                {quickLinks.map((link, idx) => (
                    <a key={idx} href={link.href} className="hover:text-red-600">
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Customer Service */}
            <div className="flex flex-col space-y-2">
                <h3 className="mb-2 font-semibold">Customer Service</h3>
                {customerService.map((link, idx) => (
                    <a key={idx} href={link.href} className="hover:text-red-600">
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default FooterLinks;
