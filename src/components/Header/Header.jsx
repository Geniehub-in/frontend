import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-navbar sticky-header">
      <div className="logoclass">
        <Link to="/home">
          <img src="./assets/geniehub-logo.png" alt="logo" className="logo" />
        </Link>
      </div>
      <div className="navclass">
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
              <Link to="/sign-in">
                <button className="button">SignUp</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
