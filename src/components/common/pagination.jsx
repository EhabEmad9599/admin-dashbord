import React from "react";

const Pagination = ({ itemsCount, pageSize, onPageChange }) => {
  const pagesCount = itemsCount / pageSize;
  return (
    <>
      <section className="Pagination">
        <ul>
          <li>&lt;</li>
          <li className="active page-item">
            <a className="page-link">1</a>
          </li>
          {/* <li>2</li>
          <li>3</li> */}
          <li>&gt;</li>
        </ul>
      </section>
    </>
  );
};

export default Pagination;
