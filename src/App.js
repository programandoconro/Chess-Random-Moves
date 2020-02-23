import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
//import ReadPGN from './ReadPGN';
import Random from "./Random";
import Pawn from "./Pawn";
import King from "./King";
import Rook from "./Rook";
import Knight from "./Knight";
import BishopDS from "./BishopDS";
import BishopLS from "./BishopLS";
import Queen from "./Queen";

function App() {
  return (
    <Router>
      <h4 style={{ textAlign: "center" }}>
        Chess Random Moves Generator, by Ro{" "}
      </h4>

      <div className="TabMenu">
        <Link to="random">
          <h5> Random Positions </h5>
        </Link>
        <h1> ''</h1>
        <Link to="/king">
          <h5> King </h5>
        </Link>
        <h1> ''</h1>
        <Link to="/rook">
          <h5> Rook </h5>
        </Link>
        <h1> ''</h1>
        <Link to="/darkbishop">
          <h5> Dark square Bishop </h5>
        </Link>
        <h1> ''</h1>
        <Link to="/lightbishop">
          <h5> Light Square Bishop </h5>
        </Link>
        <h1> ''</h1>
        <Link to="/knight">
          <h5> Knight </h5>
        </Link>
        <h1> ''</h1>
        <Link to="/pawn">
          <h5> Pawn </h5>
        </Link>
        <h1> ''</h1>
        <Link to="/queen">
          <h5> Queen </h5>
        </Link>
      </div>

      <Switch>
        <div className="ChessBoard">
          <Route path="/random">
            <Random />
          </Route>

          <Route path="/queen">
            <Queen />
          </Route>
          <Route path="/pawn">
            <Pawn />
          </Route>
          <Route path="/king">
            <King />
          </Route>
          <Route path="/darkbishop">
            <BishopDS />
          </Route>
          <Route path="/lightbishop">
            <BishopLS />
          </Route>
          <Route path="/rook">
            <Rook />
          </Route>
          <Route path="/knight">
            <Knight />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
