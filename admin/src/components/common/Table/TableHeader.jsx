import React from "react";

const TableHeader = ({ title, actions }) => {
    return (
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            {actions && <div className="flex space-x-2">{actions}</div>}
        </div>
    );
};

export default TableHeader;
