import React from "react";
import "./CardModal.css";

// Překlady anglických výrazů do češtiny
import {
  typeTranslations,
  rarityTranslations,
  supertypeTranslations,
} from "../utils/translations";

// Komponenta pro modální okno (větší náhled karty)
function CardModal({ card, onClose }) {
  // Pokud karta není dostupná, nic nevykreslíme
  if (!card) return null;

  // Překlady typů (např. Fire → Oheň)
  const translatedTypes = card.types?.map((t) =>
    `${t} (${typeTranslations[t] || "?"})`
  ).join(", ");

  // Překlad rarity
  const translatedRarity = card.rarity
    ? `${card.rarity} (${rarityTranslations[card.rarity] || "?"})`
    : "?";

  // Překlad typu karty (Pokémon, Energy, Trainer)
  const translatedSupertype = card.supertype
    ? `${card.supertype} (${supertypeTranslations[card.supertype] || "?"})`
    : "?";

  return (
    // Kliknutí na pozadí modalu ho zavře
    <div className="modal-backdrop" onClick={onClose}>
      {/* Kliknutí na obsah modalu neprojde až na backdrop */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Velký obrázek karty */}
        <img
          src={card.images?.large || card.image}
          alt={card.name}
          className="modal-image"
        />

        {/* Název karty */}
        <h2>{card.name}</h2>

        {/* Typy */}
        <p><strong>Type / Typ:</strong> {translatedTypes || "?"}</p>

        {/* HP */}
        <p><strong>HP:</strong> {card.hp || "?"}</p>

        {/* Rarita */}
        <p><strong>Rarity / Rarita:</strong> {translatedRarity}</p>

        {/* Supertype */}
        <p><strong>Supertype / Supertyp:</strong> {translatedSupertype}</p>

        {/* Subtypy (např. Stage 1) */}
        {card.subtypes && (
          <p><strong>Subtypes / Subtypy:</strong> {card.subtypes.join(", ")}</p>
        )}

        {/* Název sady */}
        {card.setName && (
          <p><strong>Set / Série:</strong> {card.setName}</p>
        )}

        {/* Tlačítko zavřít */}
        <button onClick={onClose}>Zavřít</button>
      </div>
    </div>
  );
}

export default CardModal;
