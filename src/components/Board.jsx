import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextMove, setNextMove] = useState("X");
  const handleSquare = (i) => {
    const squaresCopy = squares.slice();
    if (squaresCopy[i]) {
      return;
    }

    squaresCopy[i] = nextMove;
    setSquares(squaresCopy);

    setNextMove(() => (nextMove === "X" ? "O" : "X"));
  };

  return (
    <div className="flex gap-2 flex-col">
      <div className="flex gap-2">
        <Square handleSquare={() => handleSquare(0)} value={squares[0]} />
        <Square handleSquare={() => handleSquare(1)} value={squares[1]} />
        <Square handleSquare={() => handleSquare(2)} value={squares[2]} />
      </div>
      <div className="flex gap-2">
        <Square handleSquare={() => handleSquare(3)} value={squares[3]} />
        <Square handleSquare={() => handleSquare(4)} value={squares[4]} />
        <Square handleSquare={() => handleSquare(5)} value={squares[5]} />
      </div>
      <div className="flex gap-2">
        <Square handleSquare={() => handleSquare(6)} value={squares[6]} />
        <Square handleSquare={() => handleSquare(7)} value={squares[7]} />
        <Square handleSquare={() => handleSquare(8)} value={squares[8]} />
      </div>
    </div>
  );
};

export default Board;
