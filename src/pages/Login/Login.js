import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../server/loginApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await login(email, password);
      localStorage.setItem("token", response.token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="login-page">
      <h2>Log in</h2>

      <form onSubmit={(e) => handleSubmit(e)} className="login-form">
        <div className="form-group">
          <label htmlFor="password">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={password}
            required
            minLength="5"
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="form-btn-container">
          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
