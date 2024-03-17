import { gapi } from "gapi-script";
import React, { useEffect } from "react";
import { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import "./GoogleS.css";

const clientId =
  "984888751489-vj2go5gu4cj2pjeos1b1duc70750vujn.apps.googleusercontent.com";

export default function GoogleS() {
  // const handleGoogleSignIn = () => {
  //   if (window.gapi && window.gapi.auth2) {
  //     const auth2 = window.gapi.auth2.getAuthInstance();
  //     if (auth2) {
  //       auth2.signIn().then((googleUser) => {
  //         const profile = googleUser.getBasicProfile();
  //         const email = profile.getEmail(); // Get user's email from Google profile
  //         // Handle the email as needed (e.g., pass it to your backend for authentication)
  //         console.log(email);
  //       });
  //     } else {
  //       console.error("Google Auth2 instance is not available.");
  //     }
  //   } else {
  //     console.error("Google API has not been initialized.");
  //   }
  // };

  // var accessToken = gapi.auth.getToken().access_token;
  // console.log(accessToken + " access token");

  const [success, setSuccess] = useState(true);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  }, []);
  const onSuccess = (res) => {
    console.log("Login Success", res.profileObj);
    setSuccess(false);
  };
  const onFailure = (res) => {
    console.log("Login Failure", res);
  };
  const onSuccessLogout = () => {
    setSuccess(true);
    console.log("Logout successful! ");
  };
  return (
    <div className="google-signin-container">
      {success ? (
        // <div >
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign In with Google account"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
          className="google-login-btn"
        />
      ) : (
        // </div>
        <GoogleLogout
          clientId={clientId}
          buttonText={"Logout"}
          onLogoutSuccess={onSuccessLogout}
          className="google-logout-btn"
        />
      )}
    </div>
  );
}
