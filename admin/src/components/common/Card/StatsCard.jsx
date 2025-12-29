import React from "react";
import Card from "./Card";

const StatsCard = ({ title, value, icon, className = "" }) => {
    return (
        <Card className={`flex items-center justify-between ${className}`}>
            <div>
                <p className="text-sm text-gray-500">{title}</p>
                <p className="text-xl font-semibold text-gray-800">{value}</p>
            </div>
            {icon && <div className="text-3xl text-blue-500">{icon}</div>}
        </Card>
    );
};

export default StatsCard;
