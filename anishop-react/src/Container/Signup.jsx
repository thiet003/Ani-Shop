import React, { useState, useEffect, axios } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../asset/img/Logo.png";
import signup from "./Css/Signup.module.css";
function Signup() {
  let navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("token") != null) {
      navigate("/");
    }
  });
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
          // console.log("Success:", data); // Xử lý dữ liệu JSON từ phản hồi ở đây
          sessionStorage.setItem("token", data.token);
          // console.log(data.token); // lay token
          window.location.href = "/";
        })
        .catch((error) => {
          setMessage("Username đã được sử dụng!");
          sessionStorage.setItem("token", "");
          console.error("Error:", error); // Xử lý lỗi ở đây
        });
    } catch (error) {}
  };
  return (
    <div className="p-8 m-8 rounded-md shadow-xl max-w-lg">
      <img className={signup.signup_img} src={logo} alt="" />

      <h3 className={signup.heading}>Signup</h3>
      <form onSubmit={handleSubmit}>
        <input
          className={signup.input}
          required
          type="text"
          placeholder="FirstName"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          className={signup.input}
          required
          type="text"
          placeholder="LastName"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          className={signup.input}
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={signup.input}
          required
          type="text"
          placeholder="UserName"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={signup.input}
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={signup.signup_button} type="submit">
          Signup
        </button>
      </form>
      {message && <p className={signup.message}>{message}</p>}
      <Link to="/login">
        <p className={signup.to_login}>Already have an account? Login</p>
      </Link>
    </div>
  );
}

export default Signup;
