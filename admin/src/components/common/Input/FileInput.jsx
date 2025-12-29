import React from "react";

const FileInput = ({ label, onChange, accept = "*", className = "", multiple = false, error }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            {label && <label className="mb-1 font-medium text-gray-700">{label}</label>}
            <input
                type="file"
                onChange={onChange}
                accept={accept}
                multiple={multiple}
                className={`px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${error ? "border-red-500" : "border-gray-300"
                    }`}
            />
            {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
        </div>
    );
};

export default FileInput;
