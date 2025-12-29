import React from "react";
import Badge from "./Badge";

const StatusBadge = ({ status, className = "" }) => {
    const statusColors = {
        active: "green",
        inactive: "gray",
        pending: "yellow",
        error: "red",
    };

    return <Badge color={statusColors[status] || "gray"} className={className}>{status}</Badge>;
};

export default StatusBadge;
