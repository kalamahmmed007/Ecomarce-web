import React from "react";

const TableRow = ({ children, onClick, className = "" }) => {
    return (
        <tr
            onClick={onClick}
            className={`cursor-pointer hover:bg-gray-100 ${className}`}
        >
            {children}
        </tr>
    );
};

export default TableRow;
