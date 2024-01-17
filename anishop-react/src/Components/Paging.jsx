import React from "react";


function Paging({itemsPerPage, totalItems, setPage, setItemsPerPage, currentPage}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const pageButtons = pageNumbers.map((number) => (
        <button key={number} onClick={() => setPage(number)}>
            {number}
        </button>
    ));

    function handleClick(e){
        if (e.target.value == "<") {
            setPage(currentPage => {
                if(currentPage > 1) return currentPage - 1;
                else return currentPage;
            })
        }
        else if (e.target.value == ">") {
            setPage(currentPage => {
                if(currentPage < pageNumbers.length) return currentPage + 1;
                else return currentPage;
            })
        }
    }

   

    return (
        <div>
            {/* setItemsPerPage, hide if totalItems < option */}
            {/* <select onChange={(e) => setItemsPerPage(e.target.value)} >
                <option value={12} >12</option>
                <option value={24} hidden={totalItems < 24}>24</option>
                <option value={36} hidden={totalItems < 36}>36</option>
            </select> */}
            <button value={"<"} onClick={handleClick}>{"<"}</button>
            {pageButtons}
            <button value={">"} onClick={handleClick}>{">"}</button>
        </div>
    );
}

export default Paging;