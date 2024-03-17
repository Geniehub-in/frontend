import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="firstcolumn">
          <div>
            <img src="./assets/geniehub-logo.png" alt="logo" className="logo" />
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
            asperiores maiores, minus, nisi in et temporibus iste error fuga
            nemo, numquam aspernatur cum quis delectus atque veniam. Maiores, id
            officia?
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </div>
        </div>
        <div className="footer-links secondcolumn">
          <div>
            <a href="/career">Career</a>
            <a href="/more">More</a>
            <a href="/more">More</a>
            <a href="/more">More</a>
            <a href="/more">More</a>
          </div>
        </div>
        <div className="footer-links secondcolumn">
          <div>
            <a href="/career">Career</a>
            <a href="/more">More</a>
            <a href="/more">More</a>
            <a href="/more">More</a>
            <a href="/more">More</a>
          </div>
        </div>
        <div className="footer-links secondcolumn">
          <div>
            <a href="/career">Career</a>
            <a href="/more">More</a>
            <a href="/more">More</a>
            <a href="/more">More</a>
            <a href="/more">More</a>
          </div>
        </div>

        <div className="thirdcolumn">
          <div className="subscribe">SUBSCRIBE TO NEWSLETTER</div>
          <div className="subscribe">
            <input
              type="email"
              alt="Email"
              placeholder="Your email address __________"
            />
          </div>
          <div className="social-icons">
            <SocialIcon
              className="social-icon"
              url="https://www.instagram.com/"
            />
            <SocialIcon className="social-icon" url="https://twitter.com" />
            <SocialIcon
              className="social-icon"
              url="https://www.linkedin.com/"
            />
            <SocialIcon
              className="social-icon"
              url="https://www.facebook.com/"
            />
          </div>
          <div className="country-flag">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png"
              alt="India"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
