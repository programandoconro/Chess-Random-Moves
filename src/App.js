import React from "react";
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
    <div className="ChessBoard">
      <h5> Chess Random Moves Generator, by Ro </h5>

      <h5>Random Positions</h5>
      <Random />
      <br />

      <h5>King</h5>
      <King />
      <br />

      <h5>Rook</h5>
      <Rook />
      <br />

      <h5>Dark square Bishop</h5>
      <BishopDS />
      <br />

      <h5>Light Square Bishop</h5>
      <BishopLS />
      <br />

      <h5>Knight</h5>
      <Knight />
      <br />

      <h5>Pawn</h5>
      <Pawn />
      <br />

      <h5>Queen Moves</h5>
      <Queen />
      <br />
    </div>
  );
}

export default App;
