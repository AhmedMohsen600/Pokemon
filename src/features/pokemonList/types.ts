export interface PokemonListItem {
  name: string
  url: string
}

export interface PokemonListResponse {
  count: number
  next: string | null
  previous: string | null
  results: PokemonListItem[]
}

export interface PokemonBasicInfo {
  id: number
  name: string
  sprite: string | null
  types: string[]
}

export interface PaginationParams {
  page: number
  limit: number
}

export interface InfiniteListParams {
  pageParam?: string | null
  limit: number
}
