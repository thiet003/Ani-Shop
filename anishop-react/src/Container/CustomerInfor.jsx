import React from "react";
import cusInfor from "./Css/CustomerInfor.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
function CustomerInfor() {
  let navigate = useNavigate();
  if(sessionStorage.getItem("token")=== null || sessionStorage.getItem("token")==="")
  {
      navigate('/login');
  }
  let y = 0;
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let x = cart.length;
  cart.forEach((item) => {
    y += item.quantity * item.product.price;
  });
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(x);
  const [total, setTotal] = useState(y);
  const url = "http://103.252.95.181:8000/add-order/";
  const backToCart = () => {
    navigate("/cart");
  };
  const orderSubmit = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let rs = [];
    cart.forEach((item) => {
      let x = {
        price: item.product.price,
        product_id: item.product.id,
        quantity: item.quantity,
      };
      rs.push(x);
    });
    let dt = {
      address: address,
      note: note,
      number_phone: phone,
      orderItems: rs,
      total_price: total,
    };
    const fetchOrder = async () => {
      // Gọi API
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
          body: JSON.stringify(dt),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Xử lý dữ liệu JSON từ phản hồi
        console.log("add order success");
        toast.success("Đặt hàng thành công!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchOrder();
  };
  return (
    <div className={cusInfor.main}>
      <div className={cusInfor.title}>
        <Link to="/cart">
          <h2>Cart</h2>
        </Link>
        <h2>/</h2>
        <Link to="/customerInfo">
          <h2>Customer</h2>
        </Link>
      </div>
      <div className={cusInfor.content}>
        <div className={cusInfor.infor_cus}>
          <h3>Thông tin giao hàng</h3>
          <label>Full Name</label>
          <input
            onChange={(e) => setFullName(e.target.value)}
            required
            type="text"
          />
          <label>Phone Number</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
            type="text"
          />
          <label>Address</label>
          <input
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            required
            type="text"
          />
          <label value={note}>Note</label>
          <input onChange={(e) => setNote(e.target.value)} type="text" />
        </div>
        <div className={cusInfor.order}>
          <div className={cusInfor.order_quantity}>
            <p>Quantity:</p>
            <p>{quantity}</p>
          </div>
          <div className={cusInfor.order_price}>
            <p>Total Price:</p>
            <p>{total} đ</p>
          </div>
          <p className={cusInfor.order_shift}>
            Chú ý: Hiện tại chúng tôi chỉ hỗ trợ thanh toán khi nhận hàng
          </p>
          <div className={cusInfor.order_btn}>
            <button onClick={backToCart}>Back</button>
            <button onClick={orderSubmit}>Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfor;
