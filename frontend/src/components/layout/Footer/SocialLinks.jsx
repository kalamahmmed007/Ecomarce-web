// src/components/layout/Footer/SocialLinks.jsx
import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";

const socialMedia = [
    { id: 1, icon: <FaFacebookF />, url: "https://facebook.com" },
    { id: 2, icon: <FaTwitter />, url: "https://twitter.com" },
    { id: 3, icon: <FaInstagram />, url: "https://instagram.com" },
    { id: 4, icon: <FaLinkedinIn />, url: "https://linkedin.com" },
    { id: 5, icon: <FaYoutube />, url: "https://youtube.com" },
];

const SocialLinks = () => {
    return (
        <div className="mt-4 flex justify-center gap-4 md:mt-0 md:justify-start">
            {socialMedia.map((social) => (
                <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white p-2 text-xl text-gray-600 shadow-md transition-colors hover:text-red-600"
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
