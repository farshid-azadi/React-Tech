import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
    setActivePlayer((prevTurn) => {
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex } },
        ...prevTurn,
      ];
    });
  }
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName="player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              initialName="player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard
            onSelectSquare={handleSelectSquare}
            activePlayerSymbol={activePlayer}
          />
        </div>
        <Log />
      </main>
    </>
  );
}

export default App;
