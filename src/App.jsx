import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X'); //Förvalt läge för activePlayer X

  //Funktion som växlar mellan spelare X och O, när en ruta väljs på GameBoard
  function handleSelectSquare(rowIndex, colIndex){
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X' );
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';

      //Kontrollerar tidigare turer och om första spelaren är X.
      //Då ska den växla till O, nästa spelares tur
      if(prevTurns.length > 0 && prevTurns [0].player === 'X'){
        currentPlayer = 'O';
      }

      //Ny lista med turer från prevTurns in i updatedTurns ...prevTurns
      const updatedTurns = [{ square: {row: rowIndex, col: colIndex}, player: currentPlayer },
         ...prevTurns
        ];

        //uppdaterad lista returneras och blir det nya tillståndet
        return updatedTurns;
    });
  }

  return (
  <main>
    <div id="game-container">
     <ol id="players" className="highlight-player">
      {/* Skapa två instanser av Player-komponenten med olika namn och symboler,
      Dessa är isolerade från varandra*/}
     <Player initialName = "Player 1" symbol= "X" isActive={activePlayer === 'X'}/>
     <Player initialName = "Player 2" symbol= "O" isActive={activePlayer === 'O'}/>
     </ol>
     <GameBoard 
     onSelectSquare={handleSelectSquare}
     turns={gameTurns}
     />
    </div>
    <Log turns={gameTurns}/>

  </main>
  );
}

export default App
