import React from "react";

function Category({id, category_name, created_date}) {
    return (
        <>
            <h3>{category_name}</h3>
        </>
    );
}

export default Category;