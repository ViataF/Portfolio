import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <ul className="sidenav" id="mobile-demo">
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
  );
};

export default Sidebar;
