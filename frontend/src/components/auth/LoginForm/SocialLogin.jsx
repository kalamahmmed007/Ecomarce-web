import React from "react";

const SocialLogin = () => (
    <div className="mt-6 space-y-4">
        <p className="text-center text-gray-500">Or continue with</p>
        <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 px-5 py-2 transition duration-200 border rounded-lg shadow-sm hover:bg-gray-100">
                <img src="/assets/icons/google.svg" alt="Google" className="w-5 h-5" />
                Google
            </button>
            <button className="flex items-center gap-2 px-5 py-2 transition duration-200 border rounded-lg shadow-sm hover:bg-gray-100">
                <img src="/assets/icons/facebook.svg" alt="Facebook" className="w-5 h-5" />
                Facebook
            </button>
            <button className="flex items-center gap-2 px-5 py-2 transition duration-200 border rounded-lg shadow-sm hover:bg-gray-100">
                <img src="/assets/icons/github.svg" alt="GitHub" className="w-5 h-5" />
                GitHub
            </button>
        </div>
    </div>
);

export default SocialLogin;
