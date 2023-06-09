import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-form__title">Log In</h2>
        <label className="login-form__label">
          Username
          <input
            className="login-form__input"
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <label className="login-form__label">
          Password
          <input
            className="login-form__input"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button className="login-form__button" type="submit">
          Log In
        </button>
        <p style={{ color: "black" }}>
          New to Ema-Jhon ?{" "}
          <span>
            <Link style={{ color: "blue" }} to="/register">
              Sign Up
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
