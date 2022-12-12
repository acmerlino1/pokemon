export interface NameAndUrl {
  name: string;
  url: string;
}

interface Ability {
  ability: NameAndUrl;
  is_hidden: boolean;
  slot: number;
}

interface GameIndex {
  game_index: number;
  version: NameAndUrl;
}

interface HeldItem {
  item: NameAndUrl;
  version_details: {
    rarity: number;
    version: NameAndUrl;
  }[];
}

interface VersionGroupDetails {
  level_learned_at: number;
  move_learn_method: NameAndUrl;
  version_group: NameAndUrl;
}

interface Move {
  move: NameAndUrl;
  version_group_details: VersionGroupDetails[];
}

interface Sprites {
  back_default: string;
  back_female?: string;
  back_shiny: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
  other: {
    dream_world: {
      front_default: string;
      front_female?: string;
    };
    home: {
      front_default: string;
      front_female?: string;
      front_shiny: string;
      front_shiny_female?: string;
    };
    "official-artwork": {
      front_default: string;
    };
  };
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: NameAndUrl;
}

interface Type {
  slot: number;
  type: NameAndUrl;
}

export interface PokemonList {
  abilities: Ability[];
  id: number;
  main_region: NameAndUrl;
  moves: NameAndUrl[];
  name: string;
  names: {
    language: NameAndUrl;
    name: string;
  }[];
  pokemon_species: NameAndUrl[];
  types: NameAndUrl[];
  version_groups: NameAndUrl[];
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: NameAndUrl[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: [];
  species: NameAndUrl;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}
