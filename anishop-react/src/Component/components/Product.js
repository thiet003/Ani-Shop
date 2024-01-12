import React from 'react';



//structure of a product
function Product({product}) {
    const {id, product_name, description, price, images, stock, created_date, modified_date, catagory} = product;

    return (
        <>
            <h3>{product_name}</h3>
            <p>{description}</p>
            <p>{price}</p>
        </>
    );
}
export default Product;