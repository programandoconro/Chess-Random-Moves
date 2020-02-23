import React, { useState } from "react";
import Chess from "react-chess";
import myRandomPositions from "./const/RandomPositions";

const Random = () => {
  const [position, handlePosition] = useState([]);
  const [allPositions, addPosition] = useState([]);

  const makeRandomPosition = () => {
    handlePosition(myRandomPositions());
    allPositions.push(" / " + position);
    addPosition(allPositions);
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
