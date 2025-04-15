import React from "react";
import Card from "./Card";           // Komponenta pro jednotlivou kartu
import "./CardList.css";            // Stylování seznamu karet

function CardList({ cards }) {
  // Ověření, že máme správný seznam karet
  if (!cards || !Array.isArray(cards)) {
    return <p>Žádné karty k zobrazení.</p>; // Pokud nejsou, zobrazíme hlášku
  }

  return (
    <div className="card-list">
      {/* Pro každou kartu vytvoříme komponentu Card */}
      {cards.map((card) => (
        <Card key={card.id} {...card} /> // Rozbalíme všechny props
      ))}
    </div>
  );
}

export default CardList;
