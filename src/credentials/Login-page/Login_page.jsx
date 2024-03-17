import { useState } from "react";
import SignIn from "../sign-in/Sign_in";
import SignUp from "../sign-up/Sign_up";
import "./Login_page.css";

const Login_page = () => {
  const [loginPage, setLoginPage] = useState("login");
  function handleCreate(e) {
    e.preventDefault();
    setLoginPage("create");
  }
  function handleSignin(e) {
    e.preventDefault();
    setLoginPage("login");
  }
  return (
    <div className="Login_page_container">
      <div className="Login_page_container_left">
        <img
          src="/assets/login-page.png"
          alt="login-page1"
          className="login-page"
        />
      </div>
      <div className="Login_page_container_right">
        {loginPage === "login" ? (
          <SignIn handleCreate={handleCreate} />
        ) : (
          <SignUp handleSignin={handleSignin} />
        )}
      </div>
    </div>
  );
};

export default Login_page;
