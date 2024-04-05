

export default function GameBoard({onSelectSquare, board}){

   //Flyttat kod till App.jsx för att minimera onödiga states
   //Använder istället prop board

   //Returnerar spelbrädet med <li och <ol-element, knapp, symbol och funktion
    return(
        <ol id="game-board">
               {board.map((row, rowIndex) => (
               <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                        <button onClick={() => onSelectSquare(rowIndex, colIndex)}
                        disabled= {playerSymbol !== null}
                        >
                            {playerSymbol}
                            </button>
                    </li>
                    ))}
                </ol>
               </li>
               ))}
        </ol>
    );
}