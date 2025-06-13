import React, { useState } from "react";
import { Login } from "./api";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "emilys",
    password: "emilyspass"
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await Login(formData);
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      setSuccess("Tizimga muvaffaqiyatli kirdingiz!");
    } catch (err) {
      console.error(err);
      setError("Login muvaffaqiyatsiz. Iltimos, qayta urinib ko‘ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc" }}>
      <h2>Login Sahifasi</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Password:</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: "20px" }} disabled={loading}>
          {loading ? "Kirish..." : "Kirish"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default LoginPage;