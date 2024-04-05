import { useState } from "react";

export default function Player ({initialName, symbol, isActive, onChangeName}){
   const [playerName, setPlayerName] = useState(initialName);

    //isEditing är initialt false som standard
   const [isEditing, setIsEditing] = useState(false);

   //Funktion för att växla edit mellan true och false beroende på om användare är i redigerarläge eller ej  
   function handleEditClick(){
    setIsEditing((editing) => !editing);

    if(isEditing){
      onChangeName(symbol, playerName);
    }
    
   }

   function handleChange(event){
    setPlayerName(event.target.value);
   }
   
   //Skapar en variabel med spelarens namn
   let editablePlayerName = <span className="player-name">{playerName}</span>;
   
   //Om spelaren är i redigerarläget, ersätt playerName med input-fält för att redigera namn
   if(isEditing){
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
   }

   //renderar spelarposten
    return (
    <li className={isActive ? 'active' : undefined}>
    <span className="player">
      {editablePlayerName}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
  </li>
    );
}