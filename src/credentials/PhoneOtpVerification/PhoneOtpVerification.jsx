import React, { useState } from "react";
import { auth } from "./FirebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import "./PhoneOtpVerification.css";

export default function PhoneOtpVerification(props) {
  const [phone, setPhone] = useState(
    "+91" + (props.verificationData.mobile || "")
  );
  const [hasFilled, setHasFilled] = useState(false);
  const [otp, setOtp] = useState("");
  const [verificationInProgress, setVerificationInProgress] = useState(false);
  const [editable, setEditable] = useState(false);

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
    event.preventDefault();
    if (otp.length === 6 && !verificationInProgress) {
      setVerificationInProgress(true);
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          let user = result.user;
          console.log(user);
          alert("User signed in successfully");

          // Send mobile number and user data to the backend
          console.log(
            phone,
            props.verificationData.fName,
            props.verificationData.lName,
            props.password
          );
          sendUserDataToBackend(
            phone,
            props.verificationData.fName,
            props.verificationData.lName,
            props.password
          );

          // Redirect to the login page
          redirectToLoginPage();
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          alert("User couldn't sign in (bad verification code?)");
        })
        .finally(() => {
          setVerificationInProgress(false);
        });
    }
  };

  const toggleInput = () => {
    setEditable(!editable);
  };

  const sendUserDataToBackend = (phone, fName, lName, password) => {
    console.log(phone, fName, lName, password);
    // Implement API call to send mobile number and user data to backend
    // Example:
    // fetch('backend-url', {
    //   method: 'POST',
    //   body: JSON.stringify({ mobile, userData }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error('Failed to send data to backend');
    //   }
    //   // Data sent successfully
    // })
    // .catch(error => {
    //   console.error('Error sending data to backend:', error);
    // });
  };

  const redirectToLoginPage = () => {
    // Implement redirect to login page
    // Example:
    // history.push('/login');
  };

  return (
    <div className={hasFilled ? "login-container" : "otp-container"}>
      <div className="otp-box">
        <h4>{hasFilled ? "Enter the OTP" : "Check Mobile"}</h4>
        <div className="input-box-phone-otp">
          <form onSubmit={hasFilled ? verifyOtp : handleSend}>
            <input
              type="phone"
              value={hasFilled ? otp : phone}
              onChange={
                hasFilled
                  ? (e) => setOtp(e.target.value)
                  : (e) => setPhone(e.target.value)
              }
              disabled={verificationInProgress || !editable}
            />
            {!hasFilled && (
              <div style={{ display: "flex", marginTop: "10px" }}>
                <input type="checkbox" onChange={toggleInput} />
                <h6 style={{ marginLeft: "5px" }}>edit</h6>
              </div>
            )}
            <button
              type="submit"
              className="btn"
              disabled={verificationInProgress}
            >
              {hasFilled ? "Submit" : "Send"}
            </button>
          </form>
        </div>
        <div id="recaptcha"></div>
      </div>
    </div>
  );
}
