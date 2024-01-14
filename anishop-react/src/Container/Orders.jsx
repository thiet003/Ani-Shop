import { useState, useEffect } from "react";
import Order from "../Components/Order";
import orders from "../Container/Css/Orders.module.css";
function Orders() {
  const [ordersData, setOrdersData] = useState([]);
  const url = "http://103.252.95.181:8000/get-order/";
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // Gọi API để lấy thông tin của profile
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Xử lý dữ liệu JSON từ phản hồi
        const data = await response.json();

        // Cập nhật state với thông tin của profile
        setOrdersData(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    // Gọi hàm fetchProfileData khi component mount
    fetchProfileData();
  }, []);
  console.log(ordersData);
  console.log(sessionStorage.getItem("token"));
  const OrderList = ({ orders }) => (
    <div>
      {orders.map((order) => (
        <Order
          id={order.id}
          created_at={order.created_at}
          total_price={order.total_price}
        />
      ))}
    </div>
  );
  return (
    <div className={orders.orders}>
      <h3 className={orders.heading}>My Orders</h3>
      <div className={orders.orders_content}>
        <div className={orders.col}>
          <p className={orders.order}>Order</p>
          <p className={orders.status}>Status</p>
          <p className={orders.time}>Time Placed</p>
          <p className={orders.total_price}>Total Price</p>
        </div>
        <OrderList className={orders.list} orders={ordersData} />;
      </div>
    </div>
  );
}

export default Orders;
