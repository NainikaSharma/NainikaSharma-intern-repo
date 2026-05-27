import React, { useState } from "react";
import { loginUser } from "./api/auth";

function Login() {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleLogin = async (e) => {
    if (e) e.preventDefault();   // prevents refresh if event exists

    console.log("clicked");      // MUST appear and stay

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const data = await loginUser(email, password);

      console.log("Login Response:", data);

      setSuccess("Login successful! Token stored in localStorage.");
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
      setError("Invalid login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
      <h2>Login</h2>

      {/* FORM REMOVED COMPLETELY */}
      <div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        {/* CLICK HANDLER ONLY */}
        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>

      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
      {success && <p style={{ color: "green", marginTop: "1rem" }}>{success}</p>}
    </div>
  );
}

export default Login;
