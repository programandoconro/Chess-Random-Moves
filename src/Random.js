import React, { useState } from 'react'
import Chess from 'react-chess'
import myRandomPositions from './const/RandomPositions';


const Random = () => {

    const [position, handlePosition] = useState([]);

    const makeRandomPosition = () => {
        handlePosition(myRandomPositions())
    }

    return (
        <div >
            <br />
            <button onClick={(e) => makeRandomPosition(e)} >
                Random
            </button>
            <hr />

            <Chess
                pieces={position}
                allowMoves={false} />

        </div>
    )
}

export default Random;