import myBoard from './Board';

function arr_diff (a1, a2) {

    var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
}
    
const myRandomPositions = () => {
    
    const setBoard = [];
    const fixBoard = []
    const chessPieces = ['R', 'Q', 'B', 'N', 'r', 'q', 'b', 'n', 'R', 'B', 'N', 'r', 'b', 'n'];
    
    //Set Board and Coordenates
    
    const randomNumber = ()=> Math.floor(Math.random() * board.length); 
    const randomPiece = ()=> Math.floor(Math.random() * chessPieces.length);    
    const  board = myBoard();

  
        for (let i = 0; i < randomPiece() ; i++) {
           
            const b = board[randomNumber()];
            setBoard.push(chessPieces[i] +'@'+ b );
          
            
           for (let index = 0; index < board.length; index++) {
               if(board[index] === b){
                   board.splice(index,1);
               }
                      
           }
        
        }
       
        const kingPosition = ()=>{
            


            for (let index = 0; index < setBoard.length; index++) {
             let s = setBoard[index]
             fixBoard.push(s.substr(2)); 
            }
            
            setBoard.push('K@a1','k@h8')
        }

        kingPosition();
        const diff = arr_diff(fixBoard);
        console.log(diff)
        return setBoard;
    
}

export default myRandomPositions;