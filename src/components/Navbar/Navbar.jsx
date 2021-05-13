import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

// function navFunction() {

//   }
//   let id1 = document.getElementById('nav-items')
//   let id2 = document.getElementById('list-1')
//   let id3 = document.getElementById('list-2')
//   if (
//     id1.className === 'nav-items center' &&
//     id2.className === 'list center' &&
//     id3.className === 'list center'
//   ) {
//     id1.className = 'nav-items responsive center'
//     id2.className = 'list show center'
//     id3.className = 'list show center'
//   } else {
//     id1.className = 'nav-items center'
//     id2.className = 'list center'
//     id3.className = 'list center'
//   }
// }

export function Navbar() {
  const [nav, setNav] = useState(false);
  let id2 = document.getElementById("list-1");
  let id3 = document.getElementById("list-2");

  const navFunction = () => {
    if (
      window.screen.width <= 700 &&
      id2.className === "list center" &&
      id3.className === "list center"
    ) {
      setNav(true);
    } else {
      setNav(false);
      id2.className = "list center";
      id3.className = "list center";
    }
  };
  return (
    <nav id="navbar" className="center">
      <div className="logo-section center">
        <div className="logo center">
          <h1>wallscraft</h1>
        </div>
        <div className="hamburger-icon">
          <span onClick={navFunction}>&#8801;</span>
        </div>
      </div>
      <div
        id="nav-items"
        className={nav ? "nav-items responsive center" : "nav-items center"}>
        <div className="search-box">
          <input type="search" placeholder="Search for free wallpapers" />
        </div>
        <ul id="list-1" className={nav ? "list show center" : "list center"}>
          <Link to="header" className="hover" smooth={true} duration={1000}>
            <li className="list-item-1">Home</li>
          </Link>
          <Link to="section" className="hover" smooth={true} duration={1000}>
            <li className="list-item-1">Features</li>
          </Link>
          <li className="list-item-1">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </li>
        </ul>
        <ul id="list-2" className={nav ? "list show center" : "list center"}>
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
      </div>
    </nav>
  );
}
