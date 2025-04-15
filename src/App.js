import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";

function App() {
  // Stavy aplikace
  const [cards, setCards] = useState([]); // aktuálně načtené karty z API
  const [loading, setLoading] = useState(true); // stav načítání
  const [page, setPage] = useState(1); // aktuální stránka
  const [pageSize, setPageSize] = useState(25); // kolik karet na stránku
  const [filters, setFilters] = useState({ name: "", type: "" }); // filtry vyhledávání
  const [totalCount, setTotalCount] = useState(0); // celkový počet karet z API (pro stránkování)

  // Fetchování dat z API při změně stránky, počtu na stránku nebo typu
  useEffect(() => {
    setLoading(true);
    let url = `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=${pageSize}`;

    // Přidání filtru typu do URL
    if (filters.type) {
      url += `&types=${encodeURIComponent(filters.type)}`;
    }

    // Načtení dat z API
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCards(data.data || []); // uložíme karty
        setTotalCount(data.totalCount || 0); // celkový počet karet z API
        setLoading(false);
      })
      .catch((err) => {
        console.error("Chyba při načítání karet:", err);
        setCards([]); // v případě chyby nastavíme prázdné pole
        setLoading(false);
      });
  }, [page, pageSize, filters.type]); // znovu načíst při změně stránky, velikosti nebo typu

  // Lokální filtrování podle jména (po načtení ze serveru)
  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(filters.name.toLowerCase())
  );

  return (
    <div>
      <h1>Pokémon Katalog</h1>

      {/* Vyhledávací pole (název a typ) */}
      <SearchBar
        filters={filters}
        onFiltersChange={(newFilters) => {
          setPage(1); // reset na první stránku při změně filtru
          setFilters(newFilters);
        }}
      />

      {/* Komponenta pro stránkování */}
      <Pagination
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        totalCards={totalCount} // celkový počet z API (např. 13 000)
        visibleCards={filteredCards.length} // počet po filtrování (např. 10)
      />

      {/* Výpis karet nebo loading text */}
      {loading ? <p>Načítám karty...</p> : <CardList cards={filteredCards} />}
    </div>
  );
}

export default App;
