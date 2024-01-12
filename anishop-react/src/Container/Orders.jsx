import { useState, useEffect } from "react";
import Order from "../Component/Order";
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
    <div className="orders">
        <h3>My Orders</h3>
      <OrderList orders={ordersData} />;
    </div>
  );
}

export default Orders;
