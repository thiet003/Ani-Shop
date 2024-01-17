import React from "react";

function SearchBar({setSearch}) {
    
    return(
        <div>
            <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)}></input>
        </div>
    )
}

export default SearchBar;