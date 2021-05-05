import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav id="navbar" className="center">
      <div className="logo center">
        <Link to="header" smooth={true} duration={1000}>
          <h1>wallscraft</h1>
        </Link>
      </div>
      <div className="search-box">
      <input type="search" placeholder="Search for free wallpapers"/>
      </div>
      <ul className="list list-1 center">
        <Link to="header" className="hover" smooth={true} duration={1000}>
          <li className="list-item-1">Home</li>
        </Link>
        <Link to="section" className="hover" smooth={true} duration={1000}>
          <li className="list-item-1">Features</li>
        </Link>
        <Link to="#" className="hover" smooth={true} duration={1000}>
          <li className="list-item-1">About</li>
        </Link>
      </ul>
      <ul className="list list-2 center">
        <li className="list-divider">
          <div className="divider"></div>
        </li>
        <Link to="#" className="hover">
          <li className="list-item-2">Sign In</li>
        </Link>
        <Link to="#" className="hover">
          <li className="list-item-2">Join Now</li>
        </Link>
      </ul>
      <div className="hamburger-icon">
        <span>&#8801;</span>
      </div>
    </nav>
  );
}
