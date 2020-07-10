import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div>
      <ul className="pagination center">
        <li className="disabled">
          <a href="#!">
            <i className="material-icons">chevron_left</i>
          </a>
        </li>
        <li className="active">
          <Link to="/Portfolio">1</Link>
        </li>
        <li className="waves-effect">
          <Link to="/Portfolio/about">2</Link>
        </li>
        <li className="waves-effect">
          <Link to="/Portfolio/myportfolio">3</Link>
        </li>
        <li className="waves-effect">
          <Link to="/Portfolio/contact">4</Link>
        </li>
        <li className="waves-effect">
          <Link to="/Portfolio/testimonial">5</Link>
        </li>
        <li className="disabled">
          <a href="#!">
            <i className="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
