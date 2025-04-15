import React from "react";
import "./SearchBar.css";

// Dostupné možnosti typů Pokémonů (mohou být přeloženy při výpisu)
const typeOptions = [
  "", "Colorless", "Darkness", "Dragon", "Fairy", "Fighting",
  "Fire", "Grass", "Lightning", "Metal", "Psychic", "Water"
];

// Komponenta pro vyhledávací lištu
function SearchBar({ filters, onFiltersChange }) {
  // Obsluha změny v inputu nebo selectu
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Změníme odpovídající položku ve filtrech a pošleme zpět do App.js
    onFiltersChange({ ...filters, [name]: value });
  };

  return (
    <div className="search-bar">
      {/* Info hláška – že hledání podle jména je pouze lokální */}
      <p className="note">
        Vyhledávání dle jména probíhá pouze v právě zobrazených kartách.
      </p>

      {/* Textové pole pro vyhledávání podle jména */}
      <input
        type="text"
        name="name" // klíč v objektu filters
        placeholder="Hledat podle jména..."
        value={filters.name}
        onChange={handleChange}
        className="search-input"
      />

      {/* Výběr typu z předem definovaných možností */}
      <select
        name="type" // klíč v objektu filters
        value={filters.type}
        onChange={handleChange}
        className="type-select"
      >
        {/* První možnost – bez typu */}
        <option value="">Všechny typy</option>

        {/* Ostatní typy Pokémonů */}
        {typeOptions.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;
