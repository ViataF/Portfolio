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
          <a href="/Portfolio">1</a>
        </li>
        <li className="waves-effect">
          <a href="/Portfolio/about">2</a>
        </li>
        <li className="waves-effect">
          <a href="/Portfolio/myportfolio">3</a>
        </li>
        <li className="waves-effect">
          <a href="/Portfolio/contact">4</a>
        </li>
        <li className="waves-effect">
          <a href="/Portfolio/testimonial">5</a>
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
