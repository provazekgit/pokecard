import React from "react";
import "./Pagination.css";

// Komponenta pro stránkování a výběr počtu karet na stránku
function Pagination({
  page,           // aktuální stránka
  setPage,        // funkce pro nastavení nové stránky
  pageSize,       // aktuálně zvolený počet karet na stránku
  setPageSize,    // funkce pro změnu počtu karet na stránku
  totalCards = 0, // celkový počet karet v databázi (z API)
  visibleCards = 0 // kolik jich odpovídá aktuálnímu filtru
}) {
  const totalPages = Math.ceil(totalCards / pageSize); // spočítáme celkový počet stran
  const visibleRange = 5; // kolik stran okolo aktuální zobrazovat

  // Změna velikosti stránky (počet karet na jednu stránku)
  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setPage(1); // při změně resetujeme na první stránku
  };

  // Generování seznamu čísel stránek kolem aktuální
  const generatePageNumbers = () => {
    const pages = [];

    for (
      let i = Math.max(1, page - visibleRange);
      i <= Math.min(totalPages, page + visibleRange);
      i++
    ) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="pagination-wrapper">
      {/* Ovládací panel */}
      <div className="controls">
        {/* Výběr počtu karet na stránku */}
        <label>
          Počet karet na stránku:{" "}
          <select value={pageSize} onChange={handlePageSizeChange}>
            {[10, 25, 50, 100, 250].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>

        {/* Shrnutí zobrazení */}
        <div className="summary">
          Zobrazeno {visibleCards} z {pageSize} na stránce (z celkem {totalCards} všech karet )
        </div>
      </div>

      {/* Navigace mezi stránkami */}
      <div className="pagination">
        {/* Předchozí */}
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
          Předchozí
        </button>

        {/* Tři tečky pokud jsme daleko od začátku */}
        {page > visibleRange + 1 && <span>...</span>}

        {/* Číslované stránky */}
        {generatePageNumbers().map((pg) => (
          <button
            key={pg}
            onClick={() => setPage(pg)}
            disabled={pg === page}
            className={pg === page ? "active" : ""}
          >
            {pg}
          </button>
        ))}

        {/* Tři tečky pokud jsme daleko od konce */}
        {page < totalPages - visibleRange && <span>...</span>}

        {/* Další */}
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page >= totalPages}
        >
          Další
        </button>
      </div>
    </div>
  );
}

export default Pagination;
