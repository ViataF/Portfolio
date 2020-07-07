import React from "react";

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
          <a href="/portfolio">1</a>
        </li>
        <li className="waves-effect">
          <a href="/about">2</a>
        </li>
        <li className="waves-effect">
          <a href="/myportfolio">3</a>
        </li>
        <li className="waves-effect">
          <a href="/contact">4</a>
        </li>
        <li className="waves-effect">
          <a href="/testimonial">5</a>
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
