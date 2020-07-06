import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper ">
          <a
            href="/"
            className="brand-logo"
            style={{ fontSize: "100%", color: "white" }}
          >
            <i className="medium material-icons">developer_mode</i>
            Portfolio - Viata Fredericks
          </a>
          <a href="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li className="active">
              <Link to="/">Intro</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/testimonial">Testimonial</Link>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/">Intro</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/portfolio/">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/testimonial">Testimonial</Link>
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
