import React from "react";

const footer = () => {
  return (
    <div className=" container center">
      <a
        target="__blank"
        href="https://github.com/ViataF"
        className=" btn-large  grey darken-3"
      >
        <i className="fa fa-github" />
      </a>{" "}
      <a
        target="__blank"
        href="https://za.linkedin.com/in/viata-fredericks-2580151ab"
        className=" btn-large  light-blue darken-4 "
      >
        <i className="fa fa-linkedin" />
      </a>{" "}
      <a
        target="__blank"
        href="mailto:viataruth@gmail.com"
        className=" btn-large  deep-orange darken-3"
      >
        <i className="fa fa-google" />
      </a>
    </div>
  );
};

export default footer;
