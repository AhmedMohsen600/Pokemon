import { useQuery } from '@tanstack/react-query'
import { api } from '../../../shared/api/client'
import type {
  PokemonListResponse,
  PaginationParams,
  PokemonBasicInfo,
} from '../types'

const extractPokemonId = (url: string): number => {
  const segments = url.split('/')
  return parseInt(segments[segments.length - 2], 10)
}

const fetchPokemonBasicInfo = async (
  url: string
): Promise<PokemonBasicInfo> => {
  const id = extractPokemonId(url)
  const response = await api.get(`/pokemon/${id}`)
  const pokemon = response.data

  return {
    id: pokemon.id,
    name: pokemon.name,
    sprite:
      pokemon.sprites?.front_default ||
      pokemon.sprites?.other?.['official-artwork']?.front_default ||
      null,
    types: pokemon.types.map((type: any) => type.type.name),
  }
}

export function usePokemonList({ page, limit }: PaginationParams) {
  const offset = (page - 1) * limit

  return useQuery({
    queryKey: ['pokemon', 'list', { page, limit }],
    queryFn: async (): Promise<{
      pokemonList: PokemonBasicInfo[]
      totalCount: number
      hasNext: boolean
      hasPrevious: boolean
    }> => {
      const response = await api.get<PokemonListResponse>(
        `/pokemon?limit=${limit}&offset=${offset}`
      )
      const { results, count, next, previous } = response.data

      const pokemonInfoPromises = results.map((pokemon) =>
        fetchPokemonBasicInfo(pokemon.url)
      )
      const pokemonList = await Promise.all(pokemonInfoPromises)

      return {
        pokemonList,
        totalCount: count,
        hasNext: !!next,
        hasPrevious: !!previous,
      }
    },
    staleTime: 5 * 60 * 1000,
    enabled: page > 0 && limit > 0,
  })
}
