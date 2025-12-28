// src/components/common/Pagination/Pagination.jsx
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="mt-4 flex items-center justify-center space-x-1">
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-1 rounded-md text-sm font-medium ${page === currentPage ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                        }`}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
