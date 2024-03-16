import React, { useState } from "react";
import { auth } from "./FirebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import "./PhoneOtpVerification.css";

export default function PhoneOtpVerification(props) {
  const [phone, setPhone] = useState("+91");
  const [hasFilled, setHasFilled] = useState(false);
  const [otp, setOtp] = useState("");
  // setPhone(props.verificationData.mobile);
  // const generateRecaptcha = () => {
  //   window.recaptchaVerifier = new RecaptchaVerifier(
  //     "recaptcha",
  //     {
  //       size: "invisible",
  //       callback: (response) => {
  //         // reCAPTCHA solved, allow signInWithPhoneNumber.
  //         // ...
  //       },
  //     },
  //     auth
  //   );
  // };
  const generateRecaptcha = () => {
    const appVerifier = new RecaptchaVerifier(
      "recaptcha",
      {
        size: "invisible",
        // Add any additional options if needed
        // For example, if you're using reCAPTCHA in testing mode
        // appVerificationDisabledForTesting: true,
      },
      auth
    );
    return appVerifier;
  };

  const handleSend = (event) => {
    event.preventDefault();
    setHasFilled(true);
    const appVerifier = generateRecaptcha();
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleSend = (event) => {
  //   event.preventDefault();
  //   setHasFilled(true);
  //   generateRecaptcha();
  //   let appVerifier = window.recaptchaVerifier;
  //   signInWithPhoneNumber(auth, phone, appVerifier)
  //     .then((confirmationResult) => {
  //       // SMS sent. Prompt user to type the code from the message, then sign the
  //       // user in with confirmationResult.confirm(code).
  //       window.confirmationResult = confirmationResult;
  //     })
  //     .catch((error) => {
  //       // Error; SMS not sent
  //       console.log(error);
  //     });
  // };

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
      <div className="app__container">
        <Card sx={{ width: "300px" }}>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ padding: "20px" }} variant="h5" component="div">
              Enter your phone number
            </Typography>
            <form onSubmit={handleSend}>
              <TextField
                sx={{ width: "240px" }}
                variant="outlined"
                autoComplete="off"
                label="Phone Number"
                value={phone}
                // onChange={(event) => setPhone(event.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ width: "240px", marginTop: "20px" }}
                onClick={() => setPhone(props.verificationData.mobile)}
              >
                Send Code
              </Button>
            </form>
          </CardContent>
        </Card>
        <div id="recaptcha"></div>
      </div>
    );
  } else {
    return (
      <div className="app__container">
        <Card sx={{ width: "300px" }}>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ padding: "20px" }} variant="h5" component="div">
              Enter the OTP
            </Typography>
            <TextField
              sx={{ width: "240px" }}
              variant="outlined"
              label="OTP "
              value={otp}
              onChange={verifyOtp}
            />
          </CardContent>
        </Card>
        <div id="recaptcha"></div>
      </div>
    );
  }
}
