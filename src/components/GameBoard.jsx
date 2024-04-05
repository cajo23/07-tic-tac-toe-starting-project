//Spelplan
const initialGameBoard = 
[
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({onSelectSquare, turns}){

    let gameBoard = initialGameBoard;
    for(const turn of turns){
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row] [col] = player;
    }

  //Returnerar varje rad representeras av listelement <li och varje ruta av em knapp <button
  //Knapparna är klickbara och när de klickas aktiveras handleSelectSquare med rätt rad och kolumnindex
  //(onSelectSquare innehåller handleSelectSquare)
  

  //{gameBoard.map((row, rowIndex) map itererar över varje rad i arrayen
  //<li key={rowIndex}> För varje rad skapas list-element, key identifiera varje element unikt
  //Inuti varje <li skapar <ol som representerar en rad på spelbrädet
  // {row.map((playerSymbol, colIndex) map itererar över varje cell i row, för varje cell ger en ruta
  // <li key={colIndex}> För varje cell i raden skapas ett <li, key används för identifiera element unikt
  //button inuti varje <li skapas en knapp, när användaren klickar anropas onSelectSquare med rowIndex, colIndex som argument
    return(
        <ol id="game-board">
               {gameBoard.map((row, rowIndex) => (
               <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                        <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                    </li>
                    ))}
                </ol>
               </li>
               ))}
        </ol>
    );
}