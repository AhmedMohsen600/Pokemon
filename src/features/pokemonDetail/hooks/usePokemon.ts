import { useQuery } from '@tanstack/react-query'
import { api } from '../../../shared/api/client'
import type { PokemonDetail, PokemonSpecies } from '../types'

export function usePokemon(id: string | number) {
  return useQuery({
    queryKey: ['pokemon', 'detail', id],
    queryFn: async (): Promise<PokemonDetail> => {
      const response = await api.get(`/pokemon/${id}`)
      return response.data
    },
    enabled: !!id,
    staleTime: 10 * 60 * 1000,
  })
}

export function usePokemonSpecies(id: string | number) {
  return useQuery({
    queryKey: ['pokemon', 'species', id],
    queryFn: async (): Promise<PokemonSpecies> => {
      const response = await api.get(`/pokemon-species/${id}`)
      return response.data
    },
    enabled: !!id,
    staleTime: 10 * 60 * 1000,
  })
}

export function usePokemonWithSpecies(id: string | number) {
  const pokemonQuery = usePokemon(id)
  const speciesQuery = usePokemonSpecies(id)

  return {
    pokemon: pokemonQuery.data,
    species: speciesQuery.data,
    isLoading: pokemonQuery.isLoading || speciesQuery.isLoading,
    isError: pokemonQuery.isError || speciesQuery.isError,
    error: pokemonQuery.error || speciesQuery.error,
    refetch: () => {
      pokemonQuery.refetch()
      speciesQuery.refetch()
    },
  }
}
