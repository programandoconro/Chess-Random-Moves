import myBoard from './Board'
    
const myRandomPositions = () => {
    
    const setBoard = [];
  
    const chessPieces = ['R', 'Q', 'B', 'N', 'r', 'q', 'b', 'n', 'R', 'B', 'N', 'r', 'b', 'n'];
    
    //Set Board and Coordenates
    
    const randomNumber = ()=> Math.floor(Math.random() * board.length);    
    const  board = myBoard();

  
        for (let i = 0; i < chessPieces.length ; i++) {
           
            const b = board[randomNumber()];
            setBoard.push(chessPieces[i] +'@'+ b );
          
            
           for (let index = 0; index < board.length; index++) {
               if(board[index] === b){
                   board.splice(index,1);
               }
                      
           }
        
        }
       
        return setBoard;
    
}

export default myRandomPositions;