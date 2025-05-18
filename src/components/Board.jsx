import Square from "./Square";

const Board = ({ squares, handleSquare,resetGame }) => {
  return (
  <div>
      <div className="flex gap-2 flex-col mx-auto sm:mx-0">
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
    <button onClick={resetGame} className="mt-8 cursor-pointer px-5 py-2 bg-primary text-white rounded-sm">Reset Game</button>
  </div>
  );
};

export default Board;
