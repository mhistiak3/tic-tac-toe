import { useState } from "react";

import Board from "./components/Board";
import Game from "./components/Game";
import History from "./components/History";

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [nextMove, setNextMove] = useState("X");
  const [winner, setWinner] = useState(null);
  const [currentMove, setCurrentMove] = useState(0);
  // current squares
  const currentSquares = history[currentMove];


  // Handle Game Play
  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length -1)
    // Calculate winner
    let getWinner = calculateWinner(nextSquares);
    setWinner(getWinner);

    setNextMove(() => (nextMove === "X" ? "O" : "X"));
  };

  // Handle current squares position
  const handleSquare = (i) => {
    const squaresCopy = currentSquares.slice();

    if (squaresCopy[i] || winner) {
      return;
    }

    squaresCopy[i] = nextMove;
    handlePlay(squaresCopy);

    // winner check
  };

  // back To History
  function backToHistory(move) {
    setCurrentMove(move);
    
    setNextMove(move % 2 === 0 ? "X" : "O");
  }

  // WINNER CALCULATION
  function calculateWinner(updatedSquare) {
    const winMoves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winMoves.length; i++) {
      const [a, b, c] = winMoves[i];
      if (
        updatedSquare[a] &&
        updatedSquare[a] === updatedSquare[b] &&
        updatedSquare[a] === updatedSquare[c]
      ) {
        return nextMove;
      }
    }
  }

  function resetGame(){
    setHistory([Array(9).fill(null)])
    setNextMove("X")
    setWinner(null)
    setCurrentMove(0)
  }
  return (
    <main className="p-5">
      <h1 className="text-center text-5xl">Welcome to React</h1>
      <Game nextMove={nextMove} winner={winner}>
        <Board squares={currentSquares} handleSquare={handleSquare} resetGame={resetGame} />
        <History gameHistory={history} backToHistory={backToHistory} />
      </Game>
    </main>
  );
}

export default App;
