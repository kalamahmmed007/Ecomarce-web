import React from "react";

const TableActions = ({ children, className = "" }) => {
    return <div className={`flex space-x-2 ${className}`}>{children}</div>;
};

export default TableActions;
