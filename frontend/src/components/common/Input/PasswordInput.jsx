// src/components/common/Input/PasswordInput.jsx
import { useState } from "react";

const PasswordInput = ({
    label,
    value,
    onChange,
    error,
}) => {
    const [show, setShow] = useState(false);

    return (
        <div className="space-y-1">
            {label && (
                <label className="text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}

            <div className="relative">
                <input
                    type={show ? "text" : "password"}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={`w-full rounded-md border px-3 py-2 pr-10 text-sm focus:ring-2 focus:ring-blue-500
            ${error ? "border-red-500" : "border-gray-300"}`}
                />

                <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500"
                >
                    {show ? "Hide" : "Show"}
                </button>
            </div>

            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
};

export default PasswordInput;
