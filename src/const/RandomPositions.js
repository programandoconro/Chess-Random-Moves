import myBoard from "./Board";

const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const myRandomPositions = () => {
  const setBoard = [];
  const fixBoard = [];
  const ChessPieces = [
    "R",
    "r",
    "q",
    "Q",
    "B",
    "b",
    "n",
    "N",
    "R",
    "r",
    "B",
    "N",
    "b",
    "n",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "P",
    "P",
    "P",
    "P",
    "P",
    "P",
    "P",
    "P"
  ];

  const randomChessPieces = shuffle(ChessPieces);

  //Set Board and Coordenates

  const randomSquare = () => Math.floor(Math.random() * board.length);
  const randomPiece = () =>
    Math.floor(Math.random() * randomChessPieces.length);
  const board = myBoard();
  const randomNumber = array => {
    return Math.floor(Math.random() * array.length);
  };

  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const WhiteKingNumber = Number(randomNumber(numbers));
  const WhiteKingLetter = Number(randomNumber(letters));

  const BlackKingNumber = Number(randomNumber(numbers));
  const BlackKingLetter = Number(randomNumber(letters));

  const kingPosition = () => {
    for (let index = 0; index < setBoard.length; index++) {
      let s = setBoard[index];
      fixBoard.push(s.substr(2));
    }

    // Avoid kings to be one square near to each other

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
      console.log("kings were too close, so sent to opposite corners");
      setBoard.push("K@" + "a1", "k@" + "h8");
    } else {
      setBoard.push(
        "K@" + letters[WhiteKingLetter] + numbers[WhiteKingNumber],
        "k@" + letters[BlackKingLetter] + numbers[BlackKingNumber]
      );
    }
  };

  for (let i = 0; i < randomPiece(); i++) {
    for (let index = 0; index < board.length; index++) {
      if (
        board[index] ===
        letters[WhiteKingLetter] + numbers[WhiteKingNumber]
      ) {
        board.splice(index, 1);
        board.splice(0, 1);
      }
      if (
        board[index] ===
        letters[BlackKingLetter] + numbers[BlackKingNumber]
      ) {
        board.splice(index, 1);
        board.splice(board.length - 1, 1);
      }
    }

    const b = board[randomSquare()];
    for (let index = 0; index < board.length; index++) {
      if (board[index] === b) {
        board.splice(index, 1);
      }
    }

    setBoard.push(randomChessPieces[i] + "@" + b);

    const removePawns = val => {
      for (let index = 0; index < setBoard.length; index++) {
        for (let j = 0; j < val.length; j++) {
          if (setBoard[index] === val[j]) {
            setBoard.splice(index, 1);
          }
        }
      }
    };
    removePawns([
      "P@a1",
      "P@b1",
      "P@c1",
      "P@d1",
      "P@e1",
      "P@f1",
      "P@g1",
      "P@h1",
      "p@a1",
      "p@b1",
      "p@c1",
      "p@d1",
      "p@e1",
      "p@f1",
      "p@g1",
      "p@h1",
      "P@a8",
      "P@b8",
      "P@c8",
      "P@d8",
      "P@e8",
      "P@f8",
      "P@g8",
      "P@h8",
      "p@a8",
      "p@b8",
      "p@c8",
      "p@d8",
      "p@e8",
      "p@f8",
      "p@g8",
      "p@h8"
    ]);
  }

  kingPosition();
  console.log(setBoard);
  return setBoard;
};

export default myRandomPositions;
