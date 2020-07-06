import React from "react";

const Pagination = () => {
  return (
    <div>
      <ul class="pagination center">
        <li class="disabled">
          <a href="#!">
            <i class="material-icons">chevron_left</i>
          </a>
        </li>
        <li class="active">
          <a href="/">1</a>
        </li>
        <li class="waves-effect">
          <a href="/about">2</a>
        </li>
        <li class="waves-effect">
          <a href="/portfolio">3</a>
        </li>
        <li class="waves-effect">
          <a href="/contact">4</a>
        </li>
        <li class="waves-effect">
          <a href="/testimonial">5</a>
        </li>
        <li class="disabled">
          <a href="#!">
            <i class="material-icons">chevron_right</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
