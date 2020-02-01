import React from 'react';
import './App.css';
//import ReadPGN from './ReadPGN';
import Random from './Random';
import Pawn from './Pawn';
import King from './King';
import Rook from './Rook';
import Knight from './Knight';
import BishopDS from './BishopDS';
import BishopLS from './BishopLS';
import Queen from './Queen';

function App() {

  return (

    <div className='ChessBoard'>

      <h1> Chess Random Moves Generator, by Ro </h1>

      <h2>King moves</h2>
      <King />
      <br />

      <h2>Rook moves</h2>
      <Rook />
      <br />

      <h2>Bishop moves in Dark Squares</h2>
      <BishopDS />
      <br />

      <h2>Bishop moves in Light Squares</h2>
      <BishopLS />
      <br />

      <h2>Knight moves</h2>
      <Knight />
      <br />

      <h2>Pawn promotion</h2>
      <Pawn />
      <br />

      <h2>Queen Moves</h2>
      <Queen />
      <br />

      <h2>Random Positions</h2>
      <Random />

    </div>

  );
}

export default App;
