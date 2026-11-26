
import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.get("/users", {
        params: {
          email: email.trim(),
          password: password
        }
      });

      if (response.data.length > 0) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data[0])
        );

        alert("Login Successful!");
        navigate("/");
      } else {
        alert("Invalid Email or Password");
      }

    } catch (error) {
      console.log("Login Error:", error);
      alert("Unable to connect to server. Check your backend.");
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="submit-btn">
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default Login;
