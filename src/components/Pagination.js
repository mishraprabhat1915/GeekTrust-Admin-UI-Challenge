import React from "react";
import "../css/Pagination.css";
const Pagination = ({ contacts, handlePaginationButton, page }) => {
  return (
    <div className="main_container">
      <div className="pagination_container" key={contacts.id}>
        <span
          className="unselected_page"
          onClick={() => handlePaginationButton(page - 1)}
        >
          ◀️
        </span>
        {[...Array(Math.ceil(contacts.length / 10))].map((_, i) => {
          return (
            <span
              className={page === i + 1 ? "selected_Page" : "unselected_page"}
              onClick={() => handlePaginationButton(i + 1)}
              key={i}
            >
              {i + 1}
            </span>
          );
        })}
        <span
          className="unselected_page"
          onClick={() => handlePaginationButton(page + 1)}
        >
          ▶️
        </span>
      </div>
    </div>
  );
};

export default Pagination;
