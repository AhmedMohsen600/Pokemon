export interface PokemonType {
  slot: number
  type: {
    name: string
    url: string
  }
}

export interface PokemonSprites {
  front_default: string | null
  back_default: string | null
  front_shiny: string | null
  back_shiny: string | null
  other?: {
    'official-artwork'?: {
      front_default: string | null
    }
    dream_world?: {
      front_default: string | null
    }
    home?: {
      front_default: string | null
    }
  }
}

export interface PokemonStat {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export interface PokemonAbility {
  ability: {
    name: string
    url: string
  }
  is_hidden: boolean
  slot: number
}

export interface PokemonDetail {
  id: number
  name: string
  height: number
  weight: number
  base_experience: number
  types: PokemonType[]
  sprites: PokemonSprites
  stats: PokemonStat[]
  abilities: PokemonAbility[]
  species: {
    name: string
    url: string
  }
}

export interface PokemonSpecies {
  id: number
  name: string
  flavor_text_entries: {
    flavor_text: string
    language: {
      name: string
    }
  }[]
  genera: {
    genus: string
    language: {
      name: string
    }
  }[]
}
