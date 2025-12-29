import React, { useState } from "react";

const UserMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button onClick={() => setOpen(!open)} className="flex items-center p-2 space-x-2 rounded hover:bg-gray-100">
                <img
                    src="/assets/images/avatar-placeholder.png"
                    alt="User"
                    className="w-8 h-8 rounded-full"
                />
                <span className="font-medium text-gray-700">Admin</span>
            </button>
            {open && (
                <div className="absolute right-0 z-10 w-40 mt-2 bg-white border rounded shadow">
                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">Profile</button>
                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">Logout</button>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
