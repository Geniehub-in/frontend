// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./components/Page/Landingpage/LandingPage";
import Login_page from "./credentials/Login-page/Login_page";
import PhoneOtpVerification from "./credentials/PhoneOtpVerification/PhoneOtpVerification";
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
      <Routes>
        <Route path="/" element={[<Header />, <LandingPage />, <Footer />]} />
        <Route
          path="/home"
          element={[
            <Header />,
            <PhoneOtpVerification />,
            <LandingPage />,
            <Footer />,
          ]}
        />
        <Route path="/sign-in" element={[<Header />, <Login_page />]} />
      </Routes>
    </div>
  );
}

export default App;
