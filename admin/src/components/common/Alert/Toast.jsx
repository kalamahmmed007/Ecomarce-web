import React, { useEffect } from "react";

const Toast = ({ message, type = "info", duration = 3000, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => onClose && onClose(), duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const typeClasses = {
        info: "bg-blue-500",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        error: "bg-red-500",
    };

    return (
        <div className={`fixed bottom-4 right-4 text-white px-4 py-2 rounded shadow ${typeClasses[type]}`}>
            {message}
        </div>
    );
};

export default Toast;
