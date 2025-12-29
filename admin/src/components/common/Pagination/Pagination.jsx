import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange, className = "" }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className={`flex space-x-2 ${className}`}>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
            >
                Prev
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1 border rounded ${page === currentPage ? "bg-blue-600 text-white" : ""}`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
