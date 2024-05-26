import React, { Dispatch, FC, SetStateAction } from 'react';

interface PaginationProps {
  totalPages: number | undefined;
  setPage: Dispatch<SetStateAction<number>>;
  currentPage?: number | undefined;
}

const Pagination: FC<PaginationProps> = ({
  totalPages = 10,
  setPage,
  currentPage = 1,
}) => {
  const getPageNumbers = () => {
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);
    return [...Array(end - start + 1)].map((_, idx) => start + idx);
  };

  return (
    <div className="flex justify-center space-x-2">
      <button
        className={`px-3 py-1 rounded-md bg-blue-500 text-white ${currentPage === 1 && 'cursor-not-allowed opacity-50'}`}
        onClick={() => setPage(1)}
        disabled={currentPage === 1}
      >
        First
      </button>
      {getPageNumbers().map((page) => (
        <button
          key={page}
          className={`px-3 py-1 rounded-md ${currentPage === page ? 'bg-blue-500 text-blue cursor-not-allowed' : 'bg-white text-black border border-gray-300'}`}
          onClick={() => setPage(page)}
          disabled={currentPage === page}
        >
          {page}
        </button>
      ))}
      <button
        className={`px-3 py-1 rounded-md bg-blue-500 text-white ${currentPage === totalPages && 'cursor-not-allowed opacity-50'}`}
        onClick={() => setPage(totalPages)}
        disabled={currentPage === totalPages}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
