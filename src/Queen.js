import React, { useState } from 'react';
import Chess from 'react-chess';
import Diagonals from './const/Diagonals'

const Queen = () => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const [letter, setLetter] = useState('a');
    const [number, setNumber] = useState('1');
    const [piece] = useState(['Q@']);
    const [position, handlePosition] = useState(['Q@a1']);
    const randomNumber = (array) => { return Math.floor(Math.random() * array.length); }

    const makeQueenMove = () => {
        const diagonal = [letter + number];

        if (Number(Math.random()) > 0.499) {

            if (Number(Math.random()) > 0.499) {
                setNumber(numbers[randomNumber(numbers)]);
            }
            else {
                setLetter(letters[randomNumber(letters)]);

            }
            console.log(position, letter, number, 'caso 1');

        } else {
            for (let index = 0; index < Diagonals.length; index++) {

                const cond = diagonal.some((val) => Diagonals[index].indexOf(val) !== -1);
                if (cond === true) {
                    const d = Diagonals[index];
                    const n = Math.floor(Math.random() * d.length);
                    const square = d[n];
                    const pos = square.split().toString();
                    setLetter(pos[0]);
                    setNumber(pos[1]);
                    console.log(position, letter, number, 'caso2', pos);
                    break;
                }
            }
        }
        handlePosition([piece + letter + number]);
    }

    return (
        <div >
            <button onClick={(e) => makeQueenMove(e.target.value)} > Move </button>
            <hr />
            <Chess pieces={position} allowMoves={false} />

        </div>
    );
}

export default Queen;