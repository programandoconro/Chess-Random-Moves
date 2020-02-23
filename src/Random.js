import React, { useState } from "react";
import Chess from "react-chess";
import myRandomPositions from "./const/RandomPositions";

const Random = () => {
  const [position, handlePosition] = useState(myRandomPositions());
  const [allPositions, addPosition] = useState(myRandomPositions());

  const makeRandomPosition = () => {
    handlePosition(myRandomPositions());
    addPosition(allPositions);
    allPositions.push(" / " + position);
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
