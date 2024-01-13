import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const ProductList = (props) => {
  // Từ list product truyền vào id của product cần hiển thị
  const navigate = useNavigate();
  const handleClick = (product) => {
    navigate("/product", { state: { product } });
  };
  const [myData, setMyData] = useState([]);
  let imgPath = "http://103.252.95.181:8000";
  const fetchData = () => {
    fetch("http://103.252.95.181:8000/products/")
      .then((Response) => {
        if (!Response.ok) {
          throw new Error("Error");
        }
        return Response.json();
      })
      .then((data) => {
        setMyData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  let productToShow = null;
  myData.map((product) => {
    if (product.id === props.id) {
      productToShow = product;
    }
  });
  return (
    <div className="relative">
      <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 m-4">
        {myData.map((product) => (
          <div key={product.id} className="border p-4 m-4 hover:scale-105 hover:bg-gray-400 transition-all duration-150 ease-in-out rounded-3xl cursor-pointer" onClick={() => handleClick(product)}>
            <img className="max-w-full rounded-3xl"
              src={imgPath + product.images}
              alt={product.product_name}
            />
            <h1>{product.product_name}</h1>
            <h1>{product.price}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
