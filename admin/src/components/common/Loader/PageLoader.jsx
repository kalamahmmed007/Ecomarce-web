import React from "react";
import Spinner from "./Spinner";

const PageLoader = ({ className = "" }) => {
    return (
        <div className={`flex items-center justify-center h-full ${className}`}>
            <Spinner size={12} />
        </div>
    );
};

export default PageLoader;
