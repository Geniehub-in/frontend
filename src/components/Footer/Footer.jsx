import React from "react";
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
          <a href="/career">Career</a>
          <a href="/more">More</a>
        </div>
        <div className="thirdcolumn">
          Subscribe to our newsletter
          <div>
            <input type="email" alt="Email" placeholder="Your email address" />
          </div>
          <div>
            <img src="" alt="insta logo" />
            <img src="" alt="twitter logo" />
            <img src="" alt="linkedin logo" />
            <img src="" alt="fb logo" />
          </div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/383px-Flag_of_India.svg.png"
              alt="India"
              style={{ height: "50px", marginTop: "10px" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
