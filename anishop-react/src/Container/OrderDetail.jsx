import React ,{ useState, useEffect } from "react";
import { Route, Routes, useParams, Link, useNavigate } from "react-router-dom";

function OrderDetail() {
  let navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [orderDetailData, setOrderDetailData] = useState({});
  const url = "http://103.252.95.181:8000/order/" + id;
  useEffect(() => {
    if (sessionStorage.getItem("token") == null) {
      navigate("/login");
    }
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
        setOrderDetailData(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    // Gọi hàm fetchProfileData khi component mount
    fetchProfileData();
  }, []);
  console.log(orderDetailData);
  return (
    <div>
      <h5>Chi tiết mặt hàng</h5>
      <div>
        <p>Dia chi: {orderDetailData.address}</p>
        <p>SDT: {orderDetailData.number_phone}</p>
        <p>Note: {orderDetailData.note}</p>
      </div>
    </div>
  );
}

export default OrderDetail;
