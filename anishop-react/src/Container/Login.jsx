import { Link } from "react-router-dom";
import { useState, useEffect, axios } from "react";
import login from './Css/Login.module.css';
import logo from '../asset/img/Logo.png'
function Login() {
  if(sessionStorage.getItem("token")!=="")
  {
      window.location.href = "/profile";
  }
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const url = "http://103.252.95.181:8000/login/";
  const handleSubmit = async (event) => {
    event.preventDefault(); // Ngăn việc trang web reload khi submit form
    try {
      let dt = {
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
          sessionStorage.setItem("token", data.token);
          console.log(data.token); // lay token
          window.location.href = "/";
        })
        .catch((error) => {
          setMessage("Sai tên đăng nhập hoặc mật khẩu");
          console.log("Token", sessionStorage.getItem("token")); // lay token
          console.error("Error:", error); // Xử lý lỗi ở đây
        });
    } catch (error) {}
  };
  return (
    <div className="p-8 m-8 rounded-md shadow-xl">
      <img className={login.login_img} src={logo} alt="" />
      <h3 className={login.heading}>Login</h3>
      <form onSubmit={handleSubmit}>
        <input className={login.input} required
          type="text"
          placeholder="UserName"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input className={login.input}
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {message && <p className={login.message}>{message}</p>}
        <button className={login.login_button} type="submit">Login</button>
      </form>
      <Link to="/signup">
        <p className={login.to_register}>Do not have an account? Register</p>
      </Link>
      <a className={login.forgot_pass} href="">Forgot password?</a>
    </div>
  );
}

export default Login;
