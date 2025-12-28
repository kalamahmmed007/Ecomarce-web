// src/components/common/Tooltip/Tooltip.jsx
import { useState } from "react";

const Tooltip = ({ content, children }) => {
    const [show, setShow] = useState(false);

    return (
        <div className="relative inline-block" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            {children}
            {show && (
                <div className="absolute bottom-full mb-2 w-max max-w-xs rounded bg-gray-800 px-2 py-1 text-xs text-white shadow-lg">
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
