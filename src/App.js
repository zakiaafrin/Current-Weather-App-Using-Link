import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Day1 from "./components/Day1.js";
import Day2 from "./components/Day2.js";
import "./App.css";

function Index() {
  return (
    <div className="w3-display-container w3-text-black">
      <Day1 />
    </div>
  );
}

function Hourly() {
  return <div className="w3-display-container w3-text-black">{<Day2 />}</div>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="ul">
            <li>
              <Link to="/">Current Weather</Link>
            </li>
            <li>
              <Link to="/Tab/">TAB</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/Tab/" component={Hourly} />
      </div>
    </Router>
  );
}

export default AppRouter;
