// import { Link } from "react-router-dom"; // Import Link from React Router
import "./Header.css";

export default function Header() {
  return (
    <div className="header-navbar sticky-header">
      <img src="./assets/geniehub-logo.png" alt="logo" className="logo" />
      <nav>
        <ul>
          <li>
            <a href="/features">Features</a>
          </li>
          <li>
            <a href="/resources">Resources</a>
          </li>
          <li>
            <a href="/price">Price</a>
          </li>
          <li>
            <a href="/company">Company</a>
          </li>
          <li>
            {/* <Link to="/login"> */}
            <button>SignUp</button>
            {/* </Link> */}
          </li>
        </ul>
      </nav>
    </div>
  );
}
