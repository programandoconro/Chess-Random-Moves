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
      <div className="TabMenu">
        <h1> * </h1>
        <Link to="/">
          <p> Random Positions </p>
        </Link>
        <h1> * </h1>
        <Link to="/pieces">
          <p> Random moves by piece </p>
        </Link>
        <h1> * </h1>
      </div>

      <Switch>
        <div className="ChessBoard">
          <Route exact path="/">
            <Random />
          </Route>

          <Route path="/pieces">
            <p>Queen</p>
            <Queen />
            <br />
            <p>King</p>
            <King />
            <br />
            <p>Pawn</p>
            <Pawn />
            <br />
            <p>Dark Square Bishop</p>
            <BishopDS />
            <br />
            <p>Light Square Bishop</p>
            <BishopLS />
            <br />
            <p>Rook</p>
            <Rook />
            <br />
            <p>Knight</p>
            <Knight />
            <br />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
