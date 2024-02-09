import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/career">Career</a>
          <a href="/more">More</a>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
