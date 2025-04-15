import React, { useState } from "react";
import "./Card.css";
import CardModal from "./CardModal";

// Importujeme překlady z angličtiny do češtiny
import {
  typeTranslations,
  rarityTranslations,
  supertypeTranslations,
} from "../utils/translations";

function Card(props) {
  // Stav pro zobrazení/zavření modálního okna
  const [showModal, setShowModal] = useState(false);

  // Rozbalení props do jednotlivých proměnných
  const {
    name,
    image,      // nepoužívá se (máme images.small a images.large)
    types,
    hp,
    rarity,
    supertype,
    subtypes,
    setName,    // název sady (série)
    images,
  } = props;

  return (
    <>
      {/* Karta samotná – kliknutí otevře modal */}
      <div className="card" onClick={() => setShowModal(true)}>

        {/* Obrázek karty (malý) */}
        <img src={images?.small} alt={name} />

        {/* Název karty */}
        <h4>{name}</h4>

        {/* Typ(y) – např. Fire (Oheň), Grass (Tráva) */}
        {types && (
          <p>
            <strong>Type / Typ:</strong>{" "}
            {types.map((t) => `${t} (${typeTranslations[t] || "?"})`).join(", ")}
          </p>
        )}

        {/* HP (životy) */}
        <p>
          <strong>HP:</strong> {hp || "?"}
        </p>

        {/* Vzácnost (rarita) */}
        {rarity && (
          <p>
            <strong>Rarity / Rarita:</strong>{" "}
            {rarity} ({rarityTranslations[rarity] || "?"})
          </p>
        )}

        {/* Supertyp (Pokémon, Energy, Trainer) */}
        {supertype && (
          <p>
            <strong>Supertype / Supertyp:</strong>{" "}
            {supertype} ({supertypeTranslations[supertype] || "?"})
          </p>
        )}

        {/* Subtypy – např. Basic, Stage 1 */}
        {subtypes && (
          <p>
            <strong>Subtypes / Subtypy:</strong> {subtypes.join(", ")}
          </p>
        )}

        {/* Název sady, ze které karta pochází */}
        {setName && (
          <p>
            <strong>Set / Série:</strong> {setName}
          </p>
        )}
      </div>

      {/* Modální okno po kliknutí */}
      {showModal && (
        <CardModal
          card={{ name, types, hp, rarity, supertype, subtypes, setName, images }}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default Card;
