import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Username: ${username}, Email: ${email}, Password: ${password}`
    );
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-form__title">Sign Up</h2>
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
          Email
          <input
            className="login-form__input"
            type="email"
            value={email}
            onChange={handleEmailChange}
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
          Sign Up
        </button>
        <p style={{ color: "black" }}>
          Already have an account?{" "}
          <span>
            <Link style={{ color: "blue" }} to="/login">
              Log In
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
