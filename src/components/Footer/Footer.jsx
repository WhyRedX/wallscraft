import React from "react";
import "./Footer.css";
export function Footer() {
  return (
    <footer id="footer">
      <div className="footer">
        <div className="f-1">
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
        <div className="f-2">
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
        <div className="f-3">
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
        <div className="f-4">
          <h3>Follow us</h3>
          <ul>
            <li>
              <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i> Instagram</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i> Facebook</a>
            </li>
            <li>
              <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i> Linkedin</a>
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
