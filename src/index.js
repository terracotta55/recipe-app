import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./components/Router.jsx";
// import registerServiceWorker from "./registerServiceWorker";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <Router />
  </HashRouter>,
  document.getElementById("root")
);
// registerServiceWorker();
