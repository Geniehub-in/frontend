import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { TbPasswordFingerprint } from "react-icons/tb";
import GoogleS from "../Google-sign/GoogleS";
import "./Sign_up.css";
import PhoneOtpVerification from "../PhoneOtpVerification/PhoneOtpVerification";

export default function Sign_up(props) {
  const [userData, setUserData] = useState({
    fName: "",
    lName: "",
    mobile: "",
  });

  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordOne, setShowPasswordOne] = useState(false);

  const [verificationData, setVerificationData] = useState(null); // State to hold verification data

  // console.log(userData);
  const handleUserData = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRePasswordChange = (e) => {
    setRePassword(e.target.value);
  };

  const handleshowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleshowPasswordOne = () => {
    setShowPasswordOne((prevShowPassword) => !prevShowPassword);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (password !== rePassword) {
  //     setErrorMessage("Passwords do not match");
  //     return;
  //   }

  //   try {
  //     // Send a POST request to your backend server to authenticate the user
  //     const response = await fetch("http://your-backend-url/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ ...userData, password }),
  //     });

  //     // Parse the JSON response
  //     const data = await response.json();

  //     if (response.ok) {
  //       // Sign up successful
  //       // Send OTP to mobile number
  //       // Redirect to OTP verification page
  //       props.history.push("/verify-otp");
  //     } else {
  //       // Sign up failed, display an error message
  //       setErrorMessage(
  //         data.message ||
  //           "An error occurred. Sign up failed, Please try again later."
  //       );
  //     }
  //   } catch (error) {
  //     // Handle network errors or other exceptions
  //     console.error("Error:", error);
  //     setErrorMessage("An error occurred. Please try again later.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Assuming input data is correct, set verification data and redirect to PhoneOtpVerification component
    setVerificationData({ ...userData, password });

    // Redirect to PhoneOtpVerification component
    // props.history.push("/phone-otp-verification", { mobile: userData.mobile });
  };

  return (
    <div className="login-container">
      {!verificationData ? (
        <div className="login-box">
          <h2>
            Create your &nbsp;
            <span style={{ color: "#7734ef", display: "inline-block" }}>
              Account
            </span>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="input-box-name">
              <div className="user-icon">
                <CiUser />
              </div>
              <div className="input-name">
                <input
                  type="text"
                  name="fName"
                  value={userData.fName}
                  onChange={handleUserData}
                  placeholder="First name"
                />
                <input
                  type="text"
                  name="lName"
                  value={userData.lName}
                  onChange={handleUserData}
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="input-box-email">
              <div className="user-icon">
                <LuPhone />
              </div>
              <input
                type="text"
                name="mobile"
                value={userData.mobile}
                onChange={handleUserData}
                placeholder="Mobile"
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
              <span onClick={handleshowPassword} className="button-eye">
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
            <div className="input-box-pass">
              <div className="user-icon">
                <TbPasswordFingerprint />
              </div>
              <input
                type={showPasswordOne ? "text" : "password"}
                value={rePassword}
                onChange={handleRePasswordChange}
                placeholder="Re-Password"
                className="password-input"
              />
              <span onClick={handleshowPasswordOne} className="button-eye">
                {showPasswordOne ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            <button type="submit" className="btn">
              Sign Up
            </button>
            <h5 style={{ fontWeight: "450", margin: "5px 1px" }}>
              Already have an account?{" "}
              <a href="/sign-in" onClick={props.handleCreate}>
                Login
              </a>
            </h5>

            <h3>OR</h3>

            <GoogleS />
          </form>
        </div>
      ) : (
        <PhoneOtpVerification
          verificationData={verificationData}
          password={showPassword}
        />
      )}
    </div>
  );
}
