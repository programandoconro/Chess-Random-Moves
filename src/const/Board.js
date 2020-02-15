

const myBoard = () =>{
const board = [];

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];

for (let i = 0; i < letters.length; i++) {
   for (let index = 0; index < numbers.length; index++) {
      board.push(letters[i] + numbers[index])
       
   }
    
}

return(board)
}


export default myBoard;