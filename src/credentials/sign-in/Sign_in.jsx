import React, { useState, useEffect } from "react";
import { CiUser } from "react-icons/ci";
// import { FcGoogle } from "react-icons/fc";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { TbPasswordFingerprint } from "react-icons/tb";
import "./Sign_in.css";
// import GoogleLogin, { GoogleLogout } from "react-google-login";
// import { gapi } from "gapi-script";
import GoogleS from "../Google-sign/GoogleS";

export default function Sign_in(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("rememberedEmail");
    const storedPassword = localStorage.getItem("rememberedPassword");
    const storedRememberPassword = localStorage.getItem(
      "rememberPasswordChecked"
    );

    if (storedRememberPassword === "true") {
      setEmail(storedEmail || "");
      setPassword(storedPassword || "");
      setRememberPassword(true);
    }
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleshowPassword = (e) => {
    e.stopPropagation(); // Prevent form submission
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleRememberPasswordChange = () => {
    setRememberPassword(!rememberPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend server to authenticate the user
      const response = await fetch("http://your-backend-url/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Parse the JSON response
      const data = await response.json();

      if (response.ok) {
        // Login successful, perform any necessary actions (e.g., store authentication token)
        alert("Logged in successfully!");
        // Redirect the user to the home page or any other desired page
      } else {
        // Login failed, display an error message
        setErrorMessage(data.message); // Assuming your backend returns an error message
        console.log(errorMessage);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  const handleForgotPassword = () => {
    console.log("Redirecting to forgot password module");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>
          Welcome To &nbsp;
          <span style={{ color: "#7734ef", display: "inline-block" }}>
            GenieHub!
          </span>
        </h2>
        <h6 style={{ width: "60%", marginLeft: "20%", marginRight: "25%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          excepturi laboriosam!
        </h6>
        <form onSubmit={handleSubmit}>
          <div className="input-box-email">
            <div className="user-icon">
              <CiUser />
            </div>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email / Mobile"
            />
          </div>
          <div className="input-box-pass">
            <div className="user-icon">
              <TbPasswordFingerprint />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              className="password-input"
            />
            <span onClick={(e) => handleshowPassword(e)} className="button-eye">
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>
          <div className="rem-for-pass">
            <label className="label">
              <input
                type="checkbox"
                checked={rememberPassword}
                onChange={handleRememberPasswordChange}
                style={{ display: "inline", marginRight: "7px" }}
              />
              <span className="remember-me">Remember&nbsp;me</span>
            </label>
            <a
              href="/forgot/:id"
              onClick={handleForgotPassword}
              className="a-tag"
            >
              Forget Password
            </a>
          </div>
          <button type="submit" className="btn">
            Sign In
          </button>
          <h5 style={{ fontWeight: "450", margin: "5px 1px" }}>
            Don't have an account?{" "}
            <a href="/sign_up" onClick={props.handleCreate}>
              Create
            </a>
          </h5>

          <h3>OR</h3>
          <GoogleS />
        </form>
      </div>
    </div>
  );
}
