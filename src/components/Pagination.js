
import React from 'react';

function Pagination({ totalPages, currentPage, handlePageChange }) {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          className={`page-button ${index + 1 === currentPage ? 'active' : ''}`}
          key={index}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
