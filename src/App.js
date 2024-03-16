// import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./components/Page/Landingpage/LandingPage";
import LoginPage from "./credentials/Login-page/Login_page";
// import Sign_in from "./credentials/sign-in/Sign_in";
// import Sign_up from "./credentials/sign-up/Sign_up";
// import LandingPage from "./components/Page/Landingpage/LandingPage";
// import SignIn from "./credentials/sign-in/SignIn";

function App() {
  // const [isLogin, setIsLogin] = useState(false);
  // function handleLogin() {
  //   setIsLogin(!isLogin);
  // }
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <LoginPage />
      {/* {isLogin === false ? <SignIn /> : <LandingPage />} */}
      {/* <Sign_in /> */}
      {/* <Sign_up /> */}
      <Footer />
    </div>
  );
}

export default App;
