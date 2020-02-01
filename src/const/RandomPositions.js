const myRandomPositions = () => {

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const chessPieces = ['K', 'k', 'R', 'Q', 'B', 'N', 'r', 'q', 'b', 'n', 'R', 'B', 'N', 'r', 'b', 'n', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'];
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];

    //Set Board and Coordenates
    const randomNumbers = () => getRandomInt(numbers.length);
    const randomLetters = () => getRandomInt(letters.length);
    const setBoard = [];
    const randomCoordenates = () => {
        const s = [];

        for (let i = 0; i < 40; i++) {
            s.push(letters[randomLetters()] + numbers[randomNumbers()])

        }
        const coo = [...new Set(s)];

        for (let i = 0; i < chessPieces.length; i++) {
            setBoard.push(chessPieces[i] + '@' + coo[i])

        }

        return setBoard;
    }
    return randomCoordenates();
}

export default myRandomPositions;