import React from "react";
import "./Footer.css";
export function Footer() {
  return (
    <footer id="footer">
      <div className="footer">
        <div className="f-1 center">
          <div className="logo center">
            <h1>wallscraft</h1>
          </div>
          <p className="logo-story">
            Wallscraft is an online community of desktop wallpapers
            enthusiasts.
            <a href="#"> Join now</a> to share and explore tons of collections
            of awesome wallpapers.
          </p>
        </div>
        <div className="f-2 center">
          <h3>Tools</h3>
          <ul>
            <li>
              <a href="#">Upload a wallpaper</a>
            </li>
            <li>
              <a href="#">Latest uploads</a>
            </li>
            <li>
              <a href="#">Request a wallpaper</a>
            </li>
            <li>
              <a href="#">Help & FAQs</a>
            </li>
          </ul>
        </div>
        <div className="f-3 center">
          <h3>Info</h3>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright center">
        <p className="footer-copyright-line">
          Copyright&copy; wallscraft 2020 - 2025. All Right Reserved.
        </p>
      </div>
    </footer>
  );
}
