import React from "react";


function Paging({itemsPerPage, totalItems, setPage}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const pageButtons = pageNumbers.map((number) => (
        <button key={number} onClick={() => setPage(number)}>
            {number}
        </button>
    ));

    return (
        <div>
            <button onClick={() => setPage(prev => prev - 1)}>{"<"}</button>
            {pageButtons}
            <button onClick={() => setPage(prev => prev + 1)}>{">"}</button>
        </div>
    );
}

export default Paging;