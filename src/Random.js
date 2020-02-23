import React, { useState } from "react";
import Chess from "react-chess";
import myRandomPositions from "./const/RandomPositions";

const Random = () => {
  const [position, handlePosition] = useState(myRandomPositions());
  const [allPositions] = useState([]);
  allPositions.push(" / " + position);
  const makeRandomPosition = () => {
    handlePosition(myRandomPositions());
  };

  return (
    <div>
      <div>
        <br />
        <button onClick={e => makeRandomPosition(e)}>Create</button>
        <hr />

        <Chess pieces={position} allowMoves={false} />
      </div>
      <div>
        <li>{allPositions}</li>
      </div>
    </div>
  );
};

export default Random;
