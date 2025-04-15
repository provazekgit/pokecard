// Překlady typů Pokémonů z angličtiny do češtiny
export const typeTranslations = {
    Fire: "Oheň",
    Water: "Voda",
    Grass: "Tráva",
    Psychic: "Psychika",
    Electric: "Elektřina",
    Fighting: "Boj",
    Darkness: "Temnota",
    Metal: "Kov",
    Dragon: "Drak",
    Fairy: "Víla",
    Colorless: "Bezbarvý", // tzv. "normální" typ
  };
  
  // Překlady vzácnosti karty (rarity)
  export const rarityTranslations = {
    "Common": "Běžná",
    "Uncommon": "Neobvyklá",
    "Rare": "Vzácná",
    "Rare Holo": "Vzácná holografická",
    "Rare Ultra": "Ultra vzácná",
  };
  
  // Překlady typu karty (např. Pokémon, Energie, Trenér)
  export const supertypeTranslations = {
    "Pokémon": "Pokémon",
    "Trainer": "Trenér",
    "Energy": "Energie",
  };

//Tyto překlady můžeš používat například takto:
//  typeTranslations[card.types[0]] || card.types[0]
