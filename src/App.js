// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./components/Page/Landingpage/LandingPage";
import Login_page from "./credentials/Login-page/Login_page";
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
        <Route
          path="/"
          element={[
            <Header key="header" />,
            <LandingPage key="landingPage" />,
            <Footer key="footer" />,
          ]}
        />
        <Route
          path="/home"
          element={[
            <Header key="header" />,
            <LandingPage key="landingPage" />,
            <Footer key="footer" />,
          ]}
        />
        <Route
          path="/sign-in"
          element={[<Header key="header" />, <Login_page key="loginPage" />]}
        />
      </Routes>
    </div>
  );
}

export default App;
