import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Paging({
  itemsPerPage,
  totalItems,
  setPage,
  setItemsPerPage,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageButtons = pageNumbers.map((number) => (
    <button className="p-3 mx-1 bg-slate-100 border aspect-square h-10 text-black hover:font-bold text-2xl items-center justify-center flex hover:bg-gray-300 hover:text-white" key={number} onClick={() => setPage(number)}>
      {number}
    </button>
  ));

  function handleClick(e) {
    if (e.target.value == "<") {
      setPage((currentPage) => {
        if (currentPage > 1) return currentPage - 1;
        else return currentPage;
      });
    } else if (e.target.value == ">") {
      setPage((currentPage) => {
        if (currentPage < pageNumbers.length) return currentPage + 1;
        else return currentPage;
      });
    }
  }

  return (
    <div className="flex items-center justify-center my-5">
      
      <button
        value={"<"}
        className="p-3 mx-1 bg-slate-100 border aspect-square h-10 text-black font-bold text-3xl items-center justify-center flex rounded-s-xl hover:bg-gray-300 hover:text-white"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon="fa-solid fa-chevron-left" size="2xs" />
      </button>
      {pageButtons}
      <button
        value={">"}
        className="p-3 mx-1 bg-slate-100 border aspect-square h-10 text-black font-bold text-3xl items-center justify-center flex rounded-e-xl hover:bg-gray-300 hover:text-white"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" size="2xs" />
      </button>
    </div>
  );
}

export default Paging;
