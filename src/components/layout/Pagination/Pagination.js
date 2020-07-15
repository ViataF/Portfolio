import React from "react";
import { Link } from "react-router-dom";
const Pagination = () => {
  return (
    <div>
      <ul className="pagination center">
        <li className="disabled">
          <Link to="#!">
            <i className="material-icons">chevron_left</i>
          </Link>
        </li>
        <li className="waves-effect">
          <Link to="/Portfolio">1</Link>
        </li>
        <li className="waves-effect">
          <Link to="/about">2</Link>
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
          <Link to="#!">
            <i className="material-icons">chevron_right</i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
