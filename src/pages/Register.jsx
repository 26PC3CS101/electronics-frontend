
import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/users", user);

      alert("Registration Successful!");
      navigate("/login");

    } catch (error) {
      console.log("Register Error:", error);
      alert("Registration Failed. Check your backend.");
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <button className="submit-btn">
            Register
          </button>

        </form>
      </div>
    </div>
  );
}

export default Register;
