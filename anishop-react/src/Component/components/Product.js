import React from 'react';



//structure of a product
function Product(product) {
    
    
    return (
        <>
            <h3>{product.product_name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </>
    );
}
export default Product;