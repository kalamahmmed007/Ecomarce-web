// src/components/shared/NotificationCenter/NotificationCenter.jsx
import { useState, useEffect } from "react";

const NotificationCenter = ({ notifications = [] }) => {
    const [visible, setVisible] = useState([]);

    useEffect(() => {
        setVisible(notifications.slice(-3)); // show last 3 notifications
    }, [notifications]);

    return (
        <div className="fixed right-4 top-4 z-50 flex flex-col gap-2">
            {visible.map((n, idx) => (
                <div
                    key={idx}
                    className="rounded-lg border-l-4 border-blue-500 bg-white p-4 shadow-md"
                >
                    <p className="text-gray-800">{n.message}</p>
                </div>
            ))}
        </div>
    );
};

export default NotificationCenter;
