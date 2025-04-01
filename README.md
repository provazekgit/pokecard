# pokecard
# 🃏 Pokémon Katalog

Interaktivní katalog Pokémon karet postavený v Reactu. Aplikace využívá oficiální [Pokémon TCG API](https://pokemontcg.io/) pro získání informací o jednotlivých kartách.

## ✨ Funkce

- 🗂️ Výpis karet s obrázkem, typem, HP, vzácností a dalšími vlastnostmi
- 🔍 Filtrování podle jména a typu Pokémonů
- 🔁 Stránkování s možností volby počtu karet na stránku (10–250)
- 📊 Informace o počtu zobrazených / dostupných karet
- 👀 Modal okno s větším náhledem karty a detailními údaji
- 🇨🇿 Překlad typů, rarit a supertypů do češtiny
- ⚡ Rychlé a přehledné rozhraní bez zbytečného načítání

## 🔧 Použité technologie

- [React](https://reactjs.org/)
- [Parcel](https://parceljs.org/)
- [Pokémon TCG API v2](https://docs.pokemontcg.io/)
- CSS (modulární stylování komponent)

## 📂 Struktura projektu

src/ ├── components/ # Komponenty (Card, Pagination, SearchBar, Modal…) ├── utils/ # Překlady a pomocné funkce ├── App.js # Hlavní logika a stavová data ├── index.js # Vstupní bod Reactu public/ ├── index.html # HTML šablona

## 🚀 Spuštění projektu lokálně

```bash
npm install
npm start

Aplikace se automaticky otevře na adrese http://localhost:1234

📦 Build pro produkci

```bash
npm run build

Autor Karel Provázek Project ENGETO React
