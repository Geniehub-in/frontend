import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./components/Page/Landingpage/LandingPage";
import SignIn from "./credentials/sign-in/SignIn";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  function handleLogin() {
    setIsLogin(!isLogin);
  }
  return (
    <div className="App">
      <Header handleLogin={handleLogin} />
      {isLogin == false ? <SignIn /> : <LandingPage />}
      <Footer />
    </div>
  );
}

export default App;
