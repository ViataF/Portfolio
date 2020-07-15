import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper ">
          <a href="/Portfolio" className="brand-logo">
            <i className="medium material-icons">developer_mode</i>
            Portfolio
          </a>
          <a
            href="/Portfolio"
            data-target="mobile-demo"
            className="sidenav-trigger"
          >
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down ">
            <li>
              <Link to="/Portfolio">Intro</Link>
            </li>
            <li>
              <Link to="/Portfolio/about">My Profile</Link>
            </li>
            <li>
              <Link to="/Portfolio/myportfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/Portfolio/contact">Contact</Link>
            </li>
            <li>
              <Link to="/Portfolio/testimonial">Testimonials</Link>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/Portfolio">Intro</Link>
        </li>
        <li>
          <Link to="/Portfolio/about">My Profile</Link>
        </li>
        <li>
          <Link to="/Portfolio/myportfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/Portfolio/contact">Contact</Link>
        </li>
        <li>
          <Link to="/Portfolio/testimonial">Testimonials</Link>
        </li>
        <footer className="navbar-footer">
          <a
            href="https://github.com/ViataF"
            className="waves-effect waves-light btn-large  grey darken-3"
          >
            <i className="fa fa-github" />
          </a>
          <a
            href="https://za.linkedin.com/in/viata-fredericks-2580151ab"
            className="waves-effect waves-light btn-large  light-blue darken-4 "
          >
            <i className="fa fa-linkedin" />
          </a>
          <a
            href="https://gmail.com"
            className="waves-effect waves-light btn-large  deep-orange darken-3"
          >
            <i className="fa fa-google" />
          </a>
        </footer>
      </ul>
    </header>
  );
};

export default Navbar;
