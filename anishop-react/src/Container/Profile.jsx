import { useState, useEffect } from "react";
import profile from "./Css/Profile.module.css";
function Profile() {
  function HandleClick(){
    sessionStorage.setItem("token","");
    window.location.href = "/login";
  }
  const [profileData, setProfileData] = useState({
    email: "",
    first_name: "",
    id: 0,
    isAdmin: false,
    last_name: "",
    name: "",
    username: "",
  });
  const url = "http://103.252.95.181:8000/profile/";
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        if (sessionStorage.getItem("token") === "") {
          window.location.href = "/login";
        }
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
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    // Gọi hàm fetchProfileData khi component mount
    fetchProfileData();
  }, []);
  console.log(profileData);
  console.log(sessionStorage.getItem("token"));
  return (
    <div className={profile.profile}>
      <h3 className={profile.heading}>My Profile</h3>
      <button onClick={HandleClick}>Đăng xuất</button>
      <div className={profile.profile_content}>
        <div className={profile.profile_left}>
          <img
            src="https://img.icons8.com/bubbles/100/000000/user.png"
            alt=""
          />
          <h4>{profileData.username}</h4>
        </div>
        <div className={`${profile.profile_item} ${profile.profile_item_l}`}>
          <h5>Information</h5>
          <div>
            <h6>First Name:</h6>
            <p>{profileData.first_name}</p>
          </div>
          <div>
            <h6>Last Name:</h6>
            <p>{profileData.last_name}</p>
          </div>
          <div>
            <h6>Email:</h6>
            <p>{profileData.email}</p>
          </div>
          <div>
            <h6>Phone:</h6>
            <p>0987654321</p>
          </div>
          <a href="/orders">Sửa profile</a>
        </div>
        <div className={profile.profile_item}>
          <h5>Orders</h5>
          <div>
            <h6>Pending:</h6>
            <p>50</p>
          </div>
          <div>
            <h6>Shipping:</h6>
            <p>50</p>
          </div>
          <div>
            <h6>Delivered:</h6>
            <p>50</p>
          </div>
          <div>
            <h6>Cancelled:</h6>
            <p>50</p>
          </div>
          <a href="/orders">Xem chi tiết</a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
