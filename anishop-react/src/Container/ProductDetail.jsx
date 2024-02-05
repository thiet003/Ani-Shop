import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useParams, useSearchParams, useNavigate } from "react-router-dom";
import { DeliveryOption } from "../Components/DeliveryOption";
import { AnimatedBackground } from "./AnimatedBackground/AnimatedBackground";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  setCount,
} from "../Redux/Slices/ProductCountSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProductDetail = () => {
  let navigate = useNavigate();
  // Them vao gio hang
  const addToCart = () => {
    const productCart = {
      product: product,
      quantity: 1,
    };
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let found = cart.find((p) => p.product.id === productCart.product.id);
    if (found) {
      found.quantity += productCart.quantity;
    } else {
      cart.push(productCart);
    }
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  scrollToTop();
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  let imgPath = "http://103.252.95.181:8000";
  let productPath = "http://103.252.95.181:8000/product/" + productId;
  console.log(productPath);
  const fetchData = () => {
    fetch(productPath)
      .then((Response) => {
        if (!Response.ok) {
          throw new Error("Error");
        }
        return Response.json();
      })
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  // redux cho count
  const dispatch = useDispatch();
  const count = useSelector((state) => state.ProductCount.count);
  const handleCount = (operation) => {
    if (operation === "+") {
      dispatch(increment());
    } else if (operation === "-" && count > 1) {
      dispatch(decrement());
    }
  };
  const handleInputChange = (e) => {
    const inputCount = parseInt(e.target.value, 10);
    if (!isNaN(inputCount) && inputCount >= 0) {
      dispatch(setCount(inputCount));
    } else if (e.target.value === "") {
      dispatch(setCount(1));
    }
  };

  useEffect(() => {}, [product]);

  const description = (des) => {
    console.log(des);
    return des;
    const textWithDivs = des.split("\r\n\r\n-");
    if (textWithDivs) {
      return <div>{textWithDivs[0]}</div>;
    }
    return "No description";
  };
  const detail = (des) => {
    console.log(des);
    return des;
    const textWithDivs = (
      <ul>
        {des
          .split("\r\n\r\n-")
          .slice(1)
          .map((paragraph, index) => (
            <li key={index}>{paragraph}</li>
          ))}
      </ul>
    );
    if (textWithDivs.props.children.length > 0) {
      return textWithDivs;
    }
    return <div>&lt;No detail&gt;</div>;
  };

  const priceStandardized = (price) => {
    return price;
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  return (
    <div className="flex justify-center items-center w-full bg-transparent">
      {product ? (
        <div className="bg-transparent my-10 grid grid-cols-1 grid-rows-2 gap-1 2xl:max-w-screen-2xl xl:max-w-screen-xl ">
          <div className="grid grid-cols-3 mb-7 bg-white rounded-[98px]">
            {/* Ảnh sản phẩm */}
            <div className="p-10">
              <img
                className="w-full rounded-[88px]"
                src={imgPath + product.images}
                alt={product.product_name}
              />
              <div className="flex relative items-center mt-5 mx-5">
                <div className="mr-4 cursor-pointer">
                  <FontAwesomeIcon icon="fa-solid fa-share-nodes" size="2xl" />
                </div>
                <div className="mr-4 cursor-pointer">
                  <FontAwesomeIcon
                    icon="fa-regular fa-heart"
                    size="2xl"
                    style={{ color: "#000000" }}
                  />
                </div>
                <div className="absolute right-5 cursor-pointer">Tố cáo</div>
              </div>
            </div>
            {/* Tên + Giá + Số lượng + Nút mua/giỏ hàng sản phẩm */}
            <div className="px-5 py-7 relative">
              <div className="text-left">
                <div className="text-black text-[40px] font-bold ">
                  {product.product_name}
                </div>
                <div className="t text-key-primary-color text-[50px] font-bold">
                  <u>đ</u> {priceStandardized(product.price)}
                </div>
              </div>
              <div className="flex items-center mt-20">
                <div className="text-black font-medium text-lg">Quantity</div>
                <div className="mx-5 flex flex-row">
                  <button
                    className="p-3 bg-slate-100 border aspect-square h-10 text-black font-bold text-3xl items-center justify-center flex rounded-s-xl hover:bg-gray-300 hover:text-white"
                    onClick={() => handleCount("-")}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-minus" size="2xs" />
                  </button>
                  <input
                    className="text-center w-16 outline-none border border-slate-100 text-lg"
                    type="text"
                    value={count}
                    onChange={handleInputChange}
                  />
                  <button
                    className="p-3 bg-slate-100 border aspect-square h-10 text-black font-bold text-3xl items-center justify-center flex rounded-e-xl hover:bg-gray-300 hover:text-white"
                    onClick={() => handleCount("+")}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-plus" size="2xs" />
                  </button>
                </div>
              </div>
              <div className="absolute bottom-10 w-full grid gap-5 2xl:grid-cols-2 px-5 xl:grid-cols-2 lg:grid-cols-1">
                <button className="bg-key-tertiary-color w-full px-3 py-3 rounded-full text-white text-xl font-bold flex items-center justify-center hover:bg-amber-400">
                  Buy Now
                  <FontAwesomeIcon
                    className="ml-3 max-2xl:hidden"
                    icon="fa-solid fa-bag-shopping"
                    size="2xl"
                    style={{ color: "#ffffff" }}
                  />
                </button>
                <button
                  onClick={addToCart}
                  className="bg-key-primary-color w-full px-3 py-3 rounded-full text-white text-xl font-bold flex items-center justify-center hover:bg-red-400"
                >
                  Add to Cart
                  <FontAwesomeIcon
                    className="ml-3 max-2xl:hidden"
                    icon="fa-solid fa-cart-shopping"
                    size="2xl"
                    style={{ color: "#ffffff" }}
                  />
                </button>
              </div>
            </div>
            {/* Địa chỉ giao hàng */}
            <div className="relative">
              <DeliveryOption />
            </div>
          </div>
          {/* Mô tả chi tiết */}
          <div className="grid grid-cols-5 grid-rows-3">
            <div className="col-span-5 bg-pink-100">
              <h1>{description(product.description)}</h1>
            </div>
            <div className="col-span-4">
              <h1>{detail(product.description)}</h1>
            </div>
            <div className="row-span-2 bg-gray-100">Similar product</div>
            <div className="bg-violet-100 col-span-4">Ratings & Reviews</div>
          </div>
        </div>
      ) : (
        <h1>Product not found</h1>
      )}
      <AnimatedBackground />
    </div>
  );
};
