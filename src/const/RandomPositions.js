import myBoard from "./Board";

const myRandomPositions = () => {
  const setBoard = [];
  const fixBoard = [];
  const chessPieces = [
    "R",
    "Q",
    "B",
    "N",
    "r",
    "q",
    "b",
    "n",
    "R",
    "B",
    "N",
    "r",
    "b",
    "n"
  ];

  //Set Board and Coordenates

  const randomSquare = () => Math.floor(Math.random() * board.length);
  const randomPiece = () => Math.floor(Math.random() * chessPieces.length);
  const board = myBoard();

  for (let i = 0; i < randomPiece(); i++) {
    const b = board[randomSquare()];
    setBoard.push(chessPieces[i] + "@" + b);

    for (let index = 0; index < board.length; index++) {
      if (board[index] === b) {
        board.splice(index, 1);
      }
    }
  }

  const kingPosition = () => {
    const randomNumber = array => {
      return Math.floor(Math.random() * array.length);
    };

    const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];

    for (let index = 0; index < setBoard.length; index++) {
      let s = setBoard[index];
      fixBoard.push(s.substr(2));
    }

    const WhiteKingNumber = Number(randomNumber(numbers));
    const WhiteKingLetter = Number(randomNumber(letters));

    const BlackKingNumber = Number(randomNumber(numbers));
    const BlackKingLetter = Number(randomNumber(letters));

    console.log(WhiteKingLetter, WhiteKingNumber);

    const checkNumber = () => {
      if (
        WhiteKingNumber === BlackKingNumber ||
        WhiteKingNumber === BlackKingNumber + 1 ||
        WhiteKingNumber === BlackKingNumber - 1
      ) {
        return "TRUE";
      }
    };

    const checkLetter = () => {
      if (
        WhiteKingLetter === BlackKingLetter ||
        WhiteKingLetter === BlackKingLetter + 1 ||
        WhiteKingLetter === BlackKingLetter - 1
      ) {
        return "TRUE";
      }
    };

    if (checkNumber() === "TRUE" && checkLetter() === "TRUE") {
      console.log("kings are too close");
    }

    setBoard.push(
      "K@" + letters[WhiteKingLetter] + numbers[WhiteKingNumber],
      "k@" + letters[BlackKingLetter] + numbers[BlackKingNumber]
    );
  };

  kingPosition();

  return setBoard;
};

export default myRandomPositions;
