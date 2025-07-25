import { useInfiniteQuery } from '@tanstack/react-query'
import { api } from '../../../shared/api/client'
import type { PokemonListResponse, PokemonBasicInfo } from '../types'

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

export function usePokemonInfinite(limit: number = 20) {
  return useInfiniteQuery({
    queryKey: ['pokemon', 'infinite', { limit }],
    queryFn: async ({
      pageParam,
    }): Promise<{
      pokemonList: PokemonBasicInfo[]
      totalCount: number
      nextUrl: string | null
    }> => {
      const url = pageParam || `/pokemon?limit=${limit}&offset=0`
      const response = await api.get<PokemonListResponse>(url)
      const { results, count, next } = response.data

      const pokemonInfoPromises = results.map((pokemon) =>
        fetchPokemonBasicInfo(pokemon.url)
      )
      const pokemonList = await Promise.all(pokemonInfoPromises)

      return {
        pokemonList,
        totalCount: count,
        nextUrl: next,
      }
    },
    getNextPageParam: (lastPage) => {
      return lastPage.nextUrl
        ? lastPage.nextUrl.replace('https://pokeapi.co/api/v2', '')
        : undefined
    },
    initialPageParam: undefined as string | undefined,
    staleTime: 5 * 60 * 1000,
  })
}
