import { useState, useEffect } from "react";
function Profile() {
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
    <div className="profile">
      <h5>UserName: {profileData.name}</h5>
      <h5>FirstName: {profileData.first_name}</h5>
      <h5>LastName: {profileData.last_name}</h5>
    </div>
  );
}

export default Profile;
