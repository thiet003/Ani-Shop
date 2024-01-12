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

    function handleClick(c){
        if (c == "<") {
            setPage(prev => {
                if(prev > 1) return prev - 1;
            })
        }
        else {
            setPage(prev => {
                if(prev < pageNumbers.length) return prev + 1;
            })
        }
    }

    return (
        <div>
            <button onClick={handleClick}>{"<"}</button>
            {pageButtons}
            <button onClick={handleClick}>{">"}</button>
        </div>
    );
}

export default Paging;