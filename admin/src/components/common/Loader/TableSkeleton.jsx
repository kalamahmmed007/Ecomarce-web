import React from "react";

const TableSkeleton = ({ rows = 5, cols = 5 }) => {
    return (
        <div className="space-y-2">
            {Array.from({ length: rows }).map((_, rowIdx) => (
                <div key={rowIdx} className="flex space-x-2 animate-pulse">
                    {Array.from({ length: cols }).map((_, colIdx) => (
                        <div key={colIdx} className="flex-1 h-6 bg-gray-200 rounded"></div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default TableSkeleton;
