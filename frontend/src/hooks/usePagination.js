import { useState } from "react";

export const usePagination = (initialPage = 1) => {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const nextPage = () => setCurrentPage((p) => p + 1);
    const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));
    const goToPage = (page) => setCurrentPage(page);

    return { currentPage, nextPage, prevPage, goToPage, setCurrentPage };
};
