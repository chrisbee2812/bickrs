import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import { Board } from '../../components/tictactoe/tttutils'
import '../../styles/projects/tictactoe/tictactoe.css'

export const Route = createFileRoute('/projects/tictactoe')({
  component: RouteComponent,
})


function RouteComponent() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const[currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Goto move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <section className="aside-note">
        <h2>React Application</h2>
        <p>This game was created whilst working</p>
        <p>through the react.com's learning path.</p>
        <h2>Still to implement:</h2>
        <ul>
          <li>Game Over status when there is no winner.</li>
          <li>New Game button</li>
          <li>Adjust game status to show a move later.</li>
        </ul>
      </section>
      <section className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </section>
      <section className="game-info">
        <ol>{moves}</ol>
      </section>
    </div>
  );
}



