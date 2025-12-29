import React from "react";
import Card from "./Card";

const InfoCard = ({ title, content, className = "" }) => {
    return (
        <Card className={className}>
            <h3 className="mb-2 text-lg font-medium text-gray-800">{title}</h3>
            <p className="text-gray-600">{content}</p>
        </Card>
    );
};

export default InfoCard;
