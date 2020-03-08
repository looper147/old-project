import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import NavBar from "./components/navbar.js";
import "./index.css";
//importing pages
import HtmlPage from "./pages/HtmlPage/index.js";
import PythonPage from "./pages/PythonPage/index.js";
function Site() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={HtmlPage} />
      <Route path="/Python" component={PythonPage} />
    </Router>
  );
}
ReactDOM.render(<Site />, document.getElementById("root"));
