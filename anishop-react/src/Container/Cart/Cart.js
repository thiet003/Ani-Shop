import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  sumCart,
} from "./cartActions";
import cart from "../Css/Cart.module.css";
import { useNavigate } from "react-router-dom";

const CartItem = ({ item }) => {
  const sourse = "http://103.252.95.181:8000" + item.product.images;
  const dispatch = useDispatch();
  return (
    <div className={cart.item_cart}>
      <img className={cart.item_img} src={sourse} />
      <h3 className={cart.item_name}>{item.product.product_name}</h3>
      <div className={cart.item_quantity}>
        <button
          onClick={() => dispatch(decreaseQuantity({ id: item.product.id }))}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => dispatch(increaseQuantity({ id: item.product.id }))}
        >
          +
        </button>
      </div>
      <p className={cart.item_price}>{item.product.price}</p>
      <p className={cart.item_total}>{item.product.price * item.quantity}</p>
      <button
        className={cart.item_remove}
        onClick={() => dispatch(removeItem({ id: item.product.id }))}
      >
        X
      </button>
    </div>
  );
};

const Cart = () => {
  let navigate = useNavigate();

  const toCustomerInfor = () => {
    navigate("/customerInfo");
  };
  const items = useSelector((state) => state.items);
  const totalAmount = useSelector((state) => state.totalAmount);
  const dispatch = useDispatch();
  console.log(items.length);
  useEffect(() => {
    if (sessionStorage.getItem("token") == null) {
      navigate("/login");
    }
    dispatch(sumCart(0));
  }, []);
  return (
    <div>
      <h2 className={cart.title}>Your Shopping Cart</h2>
      <div className={cart.col_item}>
        <p className={cart.col1}>Product</p>
        <p className={cart.col2}>Quantity</p>
        <p className={cart.col3}>Price</p>
        <p className={cart.col4}>Total</p>
      </div>
      {items.length === 0 && <p>No items in the cart.</p>}
      <div className={cart.list_item}>
        {items.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </div>
      <div className={cart.total_price}>
        <p>Total Price:</p>
        <p>{totalAmount} đ</p>
      </div>
      <div className={cart.pay}>
        <p>Apply Discount Code</p>
        <input type="text" />
        <button onClick={toCustomerInfor}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
