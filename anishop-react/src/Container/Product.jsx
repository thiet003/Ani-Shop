import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { LocationSelector } from "../Components/LocationSelector";

export const Product = () => {
  const local = useLocation();
  const { product } = local.state;
  const [showLocationSelector, setShowLocationSelector] = useState(false);
  const [location, setLocation] = useState({
    "city": "Thành phố Hà Nội",
    "cityId": "01",
    "district": "Quận Nam Từ Liêm",
    "districtId": "019",
    "ward": "Phường Tây Mỗ",
    "wardId": "00628"
});
  const locationUpdate = (location) => {
    setLocation(location);
    setShowLocationSelector(!showLocationSelector);
    console.log(location);
  };
  const handleChangeClick = () => {
    setShowLocationSelector(!showLocationSelector);
  };
  let imgPath = "http://103.252.95.181:8000";
  useEffect(() => {}, [product]);

  const description = (des) => {
    const textWithDivs = des.split("\r\n\r\n-");
    // console.log(textWithDivs);
    if (textWithDivs) {
      return <div>{textWithDivs[0]}</div>;
    }
    return "No description";
  };
  const detail = (des) => {
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
  const [count, setCount] = useState(1);
  const handleCount = (e) => {
    if (e === "+") {
      setCount(count + 1);
    } else {
      if (count > 1) {
        setCount(count - 1);
      }
    }
  };
  const handleInputChange = (e) => {
    const inputCount = parseInt(e.target.value, 10);

    if (!isNaN(inputCount) && inputCount >= 0) {
      setCount(inputCount);
    } else if (e.target.value === '') {
      setCount(1);
    }
  };
  return (
    <div className="flex justify-center items-center w-full bg-gray-200">
      {product ? (
        <div className="bg-gray-200 my-10 grid grid-cols-1 grid-rows-2 gap-1 2xl:max-w-screen-2xl xl:max-w-screen-xl ">
          <div className="grid grid-cols-3 mb-7 bg-white rounded-[98px]">
            <div className="p-10">
              <img className="w-full rounded-[88px]" src={imgPath + product.images} alt={product.product_name} />
              <div className="flex">
                <div>Like</div>
                <div>Share</div>
                <div>Tố cáo</div>
              </div>
            </div>
            <div className="">
              <div>
                <h1>{product.product_name}</h1>
                <h1>{product.price}</h1>
              </div>
              <div>
                <button onClick={() => handleCount("-")}>-</button>
                <input type="text" value={count} onChange={handleInputChange} />
                <button onClick={() => handleCount("+")}>+</button>
              </div>
              <div>
                <div>Buy Nơw</div>
                <div>Add to Cart</div>
              </div>
            </div>
            <div className="relative">
              <div>Delivery Options</div>
              {
              location.city !== "" ?
              <div>{location.city + ", " + location.district + ", " + location.ward}</div> :
              <div>Chọn địa chỉ giao hàng</div>
              }
              <div onClick={handleChangeClick} className="cursor-pointer">THAY ĐỔI</div>
              {showLocationSelector &&
                <div className="absolute bg-amber-400 p-4 right-10 top-[100px]">
                  <LocationSelector myLocation = {location} locationUpdate={locationUpdate}/> 
                </div>
              }
            </div>
          </div>
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
    </div>
  );
};
