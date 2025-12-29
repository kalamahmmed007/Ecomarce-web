import React from "react";

const TablePagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex mt-4 space-x-2">
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1 rounded border ${page === currentPage ? "bg-blue-600 text-white" : "bg-white text-gray-700"
                        }`}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default TablePagination;
