import React, { useState } from "react";
import { auth } from "./FirebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import "./PhoneOtpVerification.css";

export default function PhoneOtpVerification(props) {
  const [phone, setPhone] = useState("+91");
  const [hasFilled, setHasFilled] = useState(false);
  const [otp, setOtp] = useState("");

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
      },
      auth
    );
  };

  const handleSend = (event) => {
    event.preventDefault();
    setHasFilled(true);
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        // Error; SMS not sent
        console.log(error);
      });
  };

  const verifyOtp = (event) => {
    let otp = event.target.value;
    setOtp(otp);

    if (otp.length === 6) {
      // verify otp
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          let user = result.user;
          console.log(user);
          alert("User signed in successfully");
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          alert("User couldn't sign in (bad verification code?)");
        });
    }
  };

  if (!hasFilled) {
    return (
      <div className="login-container">
        <div className="login-box">
          <div className="input-box-email">
            <form onSubmit={handleSend}>
              <input
                type="phone"
                value={phone}
                onChange={() => setPhone(props.verificationData.mobile)}
              />
              <button type="submit" className="btn">
                Send
              </button>
            </form>
          </div>
          <div id="recaptcha"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="login-container">
        <div className="login-box">
          Enter the OTP
          <input type="phone" value={otp} onChange={verifyOtp} />
          <div id="recaptcha"></div>
        </div>
      </div>
    );
  }
}
