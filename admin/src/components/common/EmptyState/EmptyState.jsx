import React from "react";

const EmptyState = ({ title = "No Data", description = "", className = "" }) => {
    return (
        <div className={`text-center py-10 ${className}`}>
            <p className="text-xl font-semibold text-gray-800">{title}</p>
            {description && <p className="mt-2 text-gray-500">{description}</p>}
        </div>
    );
};

export default EmptyState;
