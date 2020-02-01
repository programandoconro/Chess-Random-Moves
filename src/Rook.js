import React, { useState } from 'react';
import Chess from 'react-chess';

const Rook = () => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const [letter, setLetter] = useState(['b']);
    const [number, setNumber] = useState(1);
    const [piece] = useState(['R@']);
    const [position, handlePosition] = useState(['R@a1']);

    const makeRookMove = () => {
        const randomMove = () => {
            const n = Math.floor(Math.random() * numbers.length);

            if (Number(Math.random()) > 0.49) {
                setNumber(numbers[n]);

            }
            else {
                setLetter(letters[n]);
            }

        }
        randomMove();
        handlePosition([piece + letter + number]);
    }

    return (
        <div >
            <button onClick={(e) => makeRookMove(e.target.value)} > Move </button>
            <hr />
            <Chess pieces={position} allowMoves={false} />

        </div>
    )
}

export default Rook;