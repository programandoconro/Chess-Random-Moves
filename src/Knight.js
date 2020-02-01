import React, { useState } from 'react';
import Chess from 'react-chess';

const Knight = () => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const [index, setIndex] = useState(Number(4));
    const [number, setNumber] = useState(Number(4));
    const [piece] = useState(['N@']);
    const [position, handlePosition] = useState([piece + letters[index] + numbers[number]]);

    const mov1 = () => {
        setNumber(number + 2);
        setIndex(index + 1);

    }
    const mov2 = () => {
        setNumber(number + 1);
        setIndex(index + 2);


    }
    const mov3 = () => {
        setNumber(number + 2);
        setIndex(index - 1);

    }
    const mov4 = () => {
        setNumber(number + 1);
        setIndex(index - 2);


    }
    const mov5 = () => {
        setNumber(number - 2);
        setIndex(index + 1);

    }
    const mov6 = () => {
        setNumber(number - 2);
        setIndex(index - 1);


    }
    const mov7 = () => {
        setNumber(number - 1);
        setIndex(index + 2);


    }
    const mov8 = () => {
        setNumber(number - 1);
        setIndex(index - 2);



    }

    const num = [];
    const ind = [];


    const makeKnightMove = () => {

        const arrayOfMoves = [mov1, mov2, mov3, mov4, mov5, mov6, mov7, mov8];
        const n = Math.floor(Math.random() * arrayOfMoves.length);


        if (number < 6 && number > 2 && index < 6 && index > 2) {
            arrayOfMoves[Number(n)]();
            num.push(number);
            ind.push(index);
            console.log(num, ind)

        }

        else {

            setIndex(Number(4));
            setNumber(Number(4));
            console.log('handleBoard2', position, letters[index], number, index);



        }

        handlePosition([piece + letters[index] + numbers[number]]);
        console.log(num, ind);
    }

    return (
        <div >
            <button onClick={(e) => makeKnightMove(e.target.value)} > Move </button>
            <hr />
            <Chess pieces={position} allowMoves={false} />

        </div>
    )
}

export default Knight;

