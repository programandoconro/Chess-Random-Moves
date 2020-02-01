import React, { useState } from 'react';
import Chess from 'react-chess';

const BishopLightSquares = () => {
    const [piece] = useState(['B@']);
    const [position, handlePosition] = useState(['B@e4']);
    const [diagonal, setDiagonal] = useState(['e4']);

    //light squares

    //short diagonals
    const mov1LB = ['a8'];
    const mov2LB = ['a6', 'b7', 'c8'];
    const mov3LB = ['a4', 'b5', 'c6', 'd7', 'e8'];
    const mov4LB = ['a2', 'b3', 'c4', 'd4', 'e6', 'f7', 'g8'];
    const mov5LB = ['b1', 'c2', 'd3', 'e4', 'f5', 'g6', 'h7'];
    const mov6LB = ['d1', 'e2', 'f3', 'g4', 'h5'];
    const mov7LB = ['f1', 'g2', 'h3'];
    const mov8LB = ['h1'];

    //long diagonals 
    const mov1GDLB = ['g8', 'h7'];
    const mov2GDLB = ['e8', 'f7', 'g6', 'h5'];
    const mov3GDLB = ['c8', 'd7', 'e6', 'f5', 'g4', 'h3'];
    const mov4GDLB = ['a8', 'b7', 'c6', 'd5', 'e4', 'f3', 'g2', 'h1'];
    const mov5GDLB = ['a6', 'b5', 'c4', 'd3', 'e2', 'f1'];
    const mov6GDLB = ['a4', 'b3', 'c2', 'd1'];
    const mov7GDLB = ['a2', 'b1'];

    const allMoves = [mov1LB, mov2LB, mov3LB, mov4LB, mov5LB, mov6LB, mov7LB, mov8LB];
    const allMoves2 = [mov1GDLB, mov2GDLB, mov3GDLB, mov4GDLB, mov5GDLB, mov6GDLB, mov7GDLB];

    const randomMoveBishopLightSquares = (array) => {

        for (let index = 0; index < array.length; index++) {

            const cond = diagonal.some((val) => array[index].indexOf(val) !== -1);

            if (cond === true) {
                const d = array[index];
                const n = Math.floor(Math.random() * d.length);
                setDiagonal([d[n]]);
            }
        }
    }

    const makeBishopLightSquaresMoveLightSquares = () => {

        if (Number(Math.random()) > 0.49) {
            randomMoveBishopLightSquares(allMoves2);
        }

        else {
            randomMoveBishopLightSquares(allMoves);
        }

        handlePosition([piece + diagonal]);
        console.log(position, diagonal);
    }

    return (
        <div >
            <button onClick={(e) => makeBishopLightSquaresMoveLightSquares(e.target.value)} > Move </button>
            <hr />
            <Chess pieces={position} allowMoves={false} />

        </div>
    )
}

export default BishopLightSquares;