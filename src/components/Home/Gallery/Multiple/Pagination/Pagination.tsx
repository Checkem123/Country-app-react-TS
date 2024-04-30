import "./pagination.css";

interface PaginationProps {
    countriesPerPage: number;
    totalCountries: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
}

const Pagination = ({
    countriesPerPage,
    totalCountries,
    paginate,
    currentPage,
}: PaginationProps) => {
    const totalPages = Math.ceil(totalCountries / countriesPerPage);
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, startPage + 2);

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination">
            {startPage > 1 && (
                <li key="prev" onClick={() => paginate(currentPage - 1)}>
                    {"<<"}
                </li>
            )}
            {pageNumbers.map((number) => (
                <li
                    key={number}
                    className={currentPage === number ? "active" : ""}
                    onClick={() => paginate(number)}
                >
                    {number}
                </li>
            ))}
            {endPage < totalPages && (
                <li key="next" onClick={() => paginate(currentPage + 1)}>
                    {">>"}
                </li>
            )}
        </ul>
    );
};

export default Pagination;
