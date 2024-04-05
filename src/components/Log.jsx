//Funktion för att rendera lista av alla tidigare turer som gjorts under spelet.
//Den ger även informativ text till användare om vems tur det är

export default function Log({ turns }){
   
    return (
    <ol id="log">
{turns.map((turn) => (
<li key={`${turn.square.row}${turn.square.col}`}>
    {turn.player} selected {turn.square.row}, {turn.square.col}
    </li>
    ))}
    </ol>
    );
}