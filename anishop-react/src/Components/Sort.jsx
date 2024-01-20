import React from "react";

function Sort({setSort}) {
    return (
        <div>
            <select onChange={(e) => setSort(e.target.value)}>
                <option value="nameASC">Name A-Z</option>
                <option value="nameDESC">Name Z-A</option>
                <option value="priceASC">Price low to high</option>
                <option value="priceDESC">Price high to low</option>
            </select>
        </div>
    );
}

export default Sort;