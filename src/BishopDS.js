import React, { useState } from 'react';
import Chess from 'react-chess';

const BishopDarkSquares = () => {
    const [piece] = useState(['B@']);
    const [position, handlePosition] = useState(['B@e5']);
    const [diagonal, setDiagonal] = useState(['e5']);

    //black squares

    //short diagonals
    const mov1BB = ['a1'];
    const mov2BB = ['a3', 'b2', 'c1'];
    const mov3BB = ['a5', 'b4', 'c3', 'd2', 'e1'];
    const mov4BB = ['a7', 'b6', 'c5', 'd4', 'e3', 'f2', 'g1'];
    const mov5BB = ['b8', 'c7', 'd6', 'e5', 'f4', 'g3', 'Bh2'];
    const mov6BB = ['d8', 'e7', 'f6', 'g5', 'h4'];
    const mov7BB = ['f8', 'g7', 'h6'];
    const mov8BB = ['h8'];

    //long diagonals 
    const mov1GDBB = ['g1', 'h2'];
    const mov2GDBB = ['e1', 'f2', 'g3', 'h4'];
    const mov3GDBB = ['c1', 'd2', 'e3', 'f4', 'g5', 'h6'];
    const mov4GDBB = ['a1', 'b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8'];
    const mov5GDBB = ['a3', 'b4', 'c5', 'd6', 'e7', 'f8'];
    const mov6GDBB = ['a5', 'b6', 'c7', 'd8'];
    const mov7GDBB = ['a7', 'b8'];

    const allMoves = [mov1BB, mov2BB, mov3BB, mov4BB, mov5BB, mov6BB, mov7BB, mov8BB];
    const allMoves2 = [mov1GDBB, mov2GDBB, mov3GDBB, mov4GDBB, mov5GDBB, mov6GDBB, mov7GDBB];

    const randomMoveBishopDarkSquares = (array) => {

        for (let index = 0; index < array.length; index++) {

            const cond = diagonal.some((val) => array[index].indexOf(val) !== -1);

            if (cond === true) {
                const d = array[index];
                const n = Math.floor(Math.random() * d.length);
                setDiagonal([d[n]]);
            }
        }
    }

    const makeBishopDarkSquaresMoveDarkSquares = () => {

        if (Number(Math.random()) > 0.49) {
            randomMoveBishopDarkSquares(allMoves2);
        }

        else {
            randomMoveBishopDarkSquares(allMoves);
        }

        handlePosition([piece + diagonal]);
        console.log(position, diagonal);
    }

    return (
        <div >
            <button onClick={(e) => makeBishopDarkSquaresMoveDarkSquares(e.target.value)} > Move </button>
            <hr />
            <Chess pieces={position} allowMoves={false} />

        </div>
    )
}

export default BishopDarkSquares;