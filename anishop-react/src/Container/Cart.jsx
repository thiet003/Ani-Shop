import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  sumCart,
} from "../Redux/Slices/CartSlice";
import {
  increment,
  decrement,
  setCount,
} from "../Redux/Slices/ProductCountSlice";
import cart from "./Css/Cart.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem = ({ item }) => {
  const sourse = "http://103.252.95.181:8000" + item.product.images;
  const dispatch = useDispatch();
  // const handleInputChange = (e) => {
  //   const inputCount = parseInt(e.target.value, 10);
  //   if (!isNaN(inputCount) && inputCount >= 0) {
  //     dispatch(setCount(inputCount));
  //   } else if (e.target.value === "") {
  //     dispatch(setCount(1));
  //   }
  // };
  return (
    <div className="grid grid-cols-2">
      <div>
        <img className="max-w-xs" src={sourse} />
        <h3 className="">{item.product.product_name}</h3>
      </div>
      <div className="grid grid-cols-4">
        <div className="">
          <button
            className="p-3 bg-slate-100 border aspect-square h-10 text-black font-bold text-3xl items-center justify-center flex rounded-s-xl hover:bg-gray-300 hover:text-white"
            onClick={() => dispatch(decreaseQuantity({ id: item.product.id }))}
          >
            <FontAwesomeIcon icon="fa-solid fa-minus" size="2xs" />
          </button>
          <div
            className="text-center w-16 outline-none border border-slate-100 text-lg"
            type="text"
            value={item.quantity}
            // {/* // onChange={handleInputChange} */}
          >
            {item.quantity}
          </div>
          <button
            className="p-3 bg-slate-100 border aspect-square h-10 text-black font-bold text-3xl items-center justify-center flex rounded-e-xl hover:bg-gray-300 hover:text-white"
            onClick={() => dispatch(increaseQuantity({ id: item.product.id }))}
          >
            <FontAwesomeIcon icon="fa-solid fa-plus" size="2xs" />
          </button>
        </div>
        <p className="">{item.product.price}</p>
        <p className="">{item.product.price * item.quantity}</p>
        <button 
          className=""
          onClick={() => dispatch(removeItem({ id: item.product.id }))}
        >
          X
        </button>
      </div>
    </div>
  );
};

const Cart = () => {
  let navigate = useNavigate();

  const toCustomerInfor = () => {
    navigate("/customerInfo");
  };
  const items = useSelector((state) => state.Cart.items);
  const totalAmount = useSelector((state) => state.Cart.totalAmount);
  const dispatch = useDispatch();
  console.log("LENGTH: " + items.length);
  useEffect(() => {
    if (sessionStorage.getItem("token") == null) {
      navigate("/login");
    }
    dispatch(sumCart(0));
  }, []);
  return (
    <div className="w-full">
      <h2 className={cart.title}>Your Shopping Cart</h2>
      <div className="grid grid-cols-2">
        <div>
        <p className="">Product</p>
        </div>
        <div className="grid grid-cols-4">
        <p className="">Quantity</p>
        <p className="">Price</p>
        <p className="">Total</p>
        </div>
      </div>
      {/* {items.length === 0 && <p>No items in the cart.</p>} */}
      <div className="">
        {items.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>
      <div className="">
        <p>Total Price:</p>
        <p>{totalAmount} đ</p>
      </div>
      <div className="">
        <p>Apply Discount Code</p>
        <input type="text" />
        <button onClick={toCustomerInfor}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
