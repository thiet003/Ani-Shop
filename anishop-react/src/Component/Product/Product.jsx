import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Product = (props) => {
  // Từ list product truyền vào product cần hiển thị
  let imgPath = "http://103.252.95.181:8000";
  useEffect(() => {}, [props.product]);
  const description = (des) => {
    const textWithDivs = des.split("\r\n\r\n-");
    if (textWithDivs) {
      return <div>{textWithDivs[0]}</div>;
    }
    return "No description";
  };
  const detail = (des) => {
    const textWithDivs = (
      <ul>
        {des.split("\r\n\r\n-").slice(1).map((paragraph, index) => (
        <li key={index}>{paragraph}</li>
        ))}
      </ul>
    );
    if (textWithDivs > 1) {
      return textWithDivs;
    }
    return (<div>&lt;No detail&gt;</div>);
  };
  return (
    <div>
      Product nè
      {props.product ? (
        <div>
          <h1>{props.product.product_name}</h1>
          <img
            src={imgPath + props.product.images}
            alt={props.product.product_name}
          />
          <h1>{props.product.price}</h1>
          <h1>{description(props.product.description)}</h1>
          <h1>{detail(props.product.description)}</h1>
        </div>
      ) : (
        <h1>Product not found</h1>
      )}
    </div>
  );
};
