import { Link } from "react-router-dom";
import { useState, useEffect, axios } from "react";
function Login() {
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
          setMessage("Dang nhap thanh cong");
          // console.log("Success:", data); // Xử lý dữ liệu JSON từ phản hồi ở đây
          sessionStorage.setItem("token", data.token);
          console.log(data.token); // lay token
          window.location.href= '/';
        })
        .catch((error) => {
          setMessage("Dang nhap that bai");
          console.log("Token", sessionStorage.getItem("token")); // lay token
          console.error("Error:", error); // Xử lý lỗi ở đây
        });
    } catch (error) {}
  };
  return (
    <div className="login" style={{ marginLeft: 100 }}>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
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
        <a href="">Forgot password?</a>
        <br />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
      <Link to="/signup">
        <p>Do not have an account? Register</p>
      </Link>

      <div>
        <br />
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default Login;
