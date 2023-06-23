import React, { useState } from "react";
import "./SignUpForm.css";
import Logo from "./logo.jpg";
import Success from "./success.webp";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function SignUpForm() {
  const [account, setAccount] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here
    if (account && username && password) {
      setIsFormSubmitted(true);
    }
  };
  const [passwordsamooha, setPasswordsamooha] = useState("");
  console.log(passwordsamooha);
  const [showPasswordsamooha, setShowPasswordsamooha] = useState(false);

  const handlePasswordChange = (e) => {
    setPasswordsamooha(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPasswordsamooha(!showPasswordsamooha);
  };
  return (
    <div className="main-div">
      <div className="heading">
        <img src={Logo} alt="" /> <span className="company-name">samooha</span>
      </div>
      <p className="tagline">Sign up using Snowflake Account</p>

      <div className="form-main">
        {isFormSubmitted ? (
          <div className="success-div">
            <img className="success-img" src={Success} alt="" />
            <p className="success-message">Sign up successful!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* <label htmlFor="account">Account:</label> */}
            <input
              id="account"
              placeholder="Account Locator"
              type="text"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              required
            />
            {/* <label htmlFor="username">Username:</label> */}
            <input
              placeholder="Username"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {/* <label htmlFor="password">Password:</label> */}

            <div className="password-div">
              <input
                type={showPasswordsamooha ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  handlePasswordChange(e);
                  setPassword(e.target.value);
                }}
                placeholder="Password"
                id="password"
                required
              />

              <span className="eye" onClick={handleTogglePasswordVisibility}>
                {showPasswordsamooha ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
            <div className="links-container">
              <p className="bottom-txt-1">
                By Signing up, I agree to
                <a href="https://samooha.tech">Terms of Service</a> and
                <a href="https://samooha.tech">Privacy Policy</a>
              </p>
            </div>
            <button
              type="submit"
              className={account && username && password ? "focused" : ""}
            >
              Sign Up
            </button>
          </form>
        )}
        <div className="note-div">
          <span style={{ fontWeight: "bold" }}>Note: </span>
          You can later Signup to Samooha as
          <br />
          <span style={{ fontWeight: "bold" }}>Provider</span> or a{" "}
          <span style={{ fontWeight: "bold" }}>Consumer</span>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
