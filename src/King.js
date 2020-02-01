import React, { useState } from 'react';
import Chess from 'react-chess';

const King = () => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const [letter, setLetter] = useState(['b']);
    const [number, setNumber] = useState(Number(1));
    const [piece] = useState(['K@']);
    const [index, setIndex] = useState(Number(1));
    const [position, handlePosition] = useState(['K@a1']);

    const makeKingMove = () => {

        const randomMove = () => {
            if (Number(Math.random()) > 0.49) {
                setNumber(Number(number) + 1)
            }
            else {
                if (Number(Math.random()) > 0.49) {
                    setIndex(index + 1)
                }
                else {
                    setIndex(index - 1)
                }
                setNumber(Number(number) - 1)
            }
            if (Number(number) >= 8) {
                setNumber(Number(number) - 1)
            }
            if (Number(number <= 1)) {
                setNumber(Number(number) + 1)
            }
            if (Number(index) >= 7) {
                setIndex(Number(index) - 1)
            }
            if (Number(index) <= 0) {
                setIndex(Number(index) + 1)
            }

            setLetter(letters[Number(index)])
            handlePosition([piece + letter + number]);
            console.log(position);

        }
        randomMove();

    }

    return (
        <div >
            <button onClick={(e) => makeKingMove(e.target.value)} > Move </button>
            <hr />
            <Chess pieces={position} allowMoves={false} />

        </div>
    )
}

export default King;