import React, { useState, useEffect, axios } from "react";
import { Link } from "react-router-dom";
function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const url = "http://103.252.95.181:8000/register/";
  const handleSubmit = async (event) => {
    event.preventDefault(); // Ngăn việc trang web reload khi submit form
    try {
      let dt = {
        email: email,
        first_name: firstname,
        last_name: lastname,
        username: username,
        password: password,
      };
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dt),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok " + response.statusText
            );
          }
          return response.json();
        })
        .then((data) => {
          setMessage("Dang ki thanh cong");
          console.log("Success:", data); // Xử lý dữ liệu JSON từ phản hồi ở đây
          sessionStorage.setItem("token", data.token);
          console.log(data.token); // lay token
          window.location.href= '/';
        })
        .catch((error) => {
          setMessage("Dang ki that bai");
          sessionStorage.setItem("token", "");
          console.error("Error:", error); // Xử lý lỗi ở đây
        });
    } catch (error) {}
  };
  return (
    <div className="signup" style={{ marginLeft: 500 }}>
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="FirstName"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="LastName"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="UserName"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Signup</button>
      </form>
      {message && <p>{message}</p>}
      <Link to="/login">
        <p>Already have an account? Login</p>
      </Link>
    </div>
  );
}

export default Signup;
