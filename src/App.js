import React, { Fragment, useEffect } from "react";
import Navbar from "./components/layout/Navbar/Navbar";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import Intro from "./components/layout/pages/intro";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <div className="container-fluid">
        {" "}
        <Navbar />
        <Sidebar />
        <Intro />
      </div>
    </Fragment>
  );
};

export default App;
