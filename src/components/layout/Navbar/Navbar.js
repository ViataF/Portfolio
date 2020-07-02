import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper sticky">
        <a href="#!" className="brand-logo">
          {" "}
          <i className="material-icons">colorize</i>
          ViataF
        </a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Intro</a>
          </li>
          <li>
            <a href="badges.html">Portfolio</a>
          </li>
          <li>
            <a href="collapsible.html">About</a>
          </li>
          <li>
            <a href="mobile.html">Testimonials</a>
          </li>
          <li>
            <a href="mobile.html">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
