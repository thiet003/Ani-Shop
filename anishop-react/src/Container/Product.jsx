import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const Product = () => {
    const location = useLocation();
    const { product } = location.state;

  let imgPath = "http://103.252.95.181:8000";
  useEffect(() => {}, [product]);
  
  const description = (des) => {
    const textWithDivs = des.split("\r\n\r\n-");
    console.log(textWithDivs);
    if (textWithDivs) {
      return <div>{textWithDivs[0]}</div>;
    }
    return "No description";
  };
  const detail = (des) => {
    const textWithDivs = (
      <ul>
        { des.split("\r\n\r\n-").slice(1).map((paragraph, index) => (
        <li key={index}>{paragraph}</li>
        ))}
      </ul>
    );
    if (textWithDivs.props.children.length > 0) {
      return textWithDivs;
    }
    return (<div>&lt;No detail&gt;</div>);
  };
  return (
    <div>
      {product ? (
        <div>
          <h1>{product.product_name}</h1>
          <img
            src={imgPath + product.images}
            alt={product.product_name}
          />
          <h1>{product.price}</h1>
          <h1>{description(product.description)}</h1>
          <h1>{detail(product.description)}</h1>
        </div>
      ) : (
        <h1>Product not found</h1>
      )}
    </div>
  );
};
