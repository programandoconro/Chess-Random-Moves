

//light squares

//short diagonals
const mov1LB = ['a8'];
const mov2LB = ['a6', 'b7', 'c8'];
const mov3LB = ['a4', 'b5', 'c6', 'd7', 'e8'];
const mov4LB = ['a2', 'b3', 'c4', 'd4', 'e6', 'f7', 'g8'];
const mov5LB = ['b1', 'c2', 'd3', 'e4', 'f5', 'g6', 'h7'];
const mov6LB = ['d1', 'e2', 'f3', 'g4', 'h5'];
const mov7LB = ['f1', 'g2', 'h3'];
const mov8LB = ['h1'];

//long diagonals 
const mov1GDLB = ['g8', 'h7'];
const mov2GDLB = ['e8', 'f7', 'g6', 'h5'];
const mov3GDLB = ['c8', 'd7', 'e6', 'f5', 'g4', 'h3'];
const mov4GDLB = ['a8', 'b7', 'c6', 'd5', 'e4', 'f3', 'g2', 'h1'];
const mov5GDLB = ['a6', 'b5', 'c4', 'd3', 'e2', 'f1'];
const mov6GDLB = ['a4', 'b3', 'c2', 'd1'];
const mov7GDLB = ['a2', 'b1'];

//black squares

//short diagonals
const mov1DB = ['a1'];
const mov2DB = ['a3', 'b2', 'c1'];
const mov3DB = ['a5', 'b4', 'c3', 'd2', 'e1'];
const mov4DB = ['a7', 'b6', 'c5', 'd4', 'e3', 'f2', 'g1'];
const mov5DB = ['b8', 'c7', 'd6', 'e5', 'f4', 'g3', 'Bh2'];
const mov6DB = ['d8', 'e7', 'f6', 'g5', 'h4'];
const mov7DB = ['f8', 'g7', 'h6'];
const mov8DB = ['h8'];

//long diagonals 
const mov1GDDB = ['g1', 'h2'];
const mov2GDDB = ['e1', 'f2', 'g3', 'h4'];
const mov3GDDB = ['c1', 'd2', 'e3', 'f4', 'g5', 'h6'];
const mov4GDDB = ['a1', 'b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8'];
const mov5GDDB = ['a3', 'b4', 'c5', 'd6', 'e7', 'f8'];
const mov6GDDB = ['a5', 'b6', 'c7', 'd8'];
const mov7GDDB = ['a7', 'b8'];

const Diagonals = [mov1DB, mov2DB, mov3DB, mov4DB, mov5DB, mov6DB, mov7DB, mov8DB, mov1GDDB,
    mov2GDDB, mov3GDDB, mov4GDDB, mov5GDDB, mov6GDDB, mov7GDDB,
    mov1LB, mov2LB, mov3LB, mov4LB, mov5LB, mov6LB, mov7LB, mov8LB,
    mov1GDLB, mov2GDLB, mov3GDLB, mov4GDLB, mov5GDLB, mov6GDLB, mov7GDLB
]

export default Diagonals; 