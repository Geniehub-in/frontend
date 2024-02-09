import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header-navbar">
      <div className="logo">Your Logo</div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#" onClick={props.handleLogin}>
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
