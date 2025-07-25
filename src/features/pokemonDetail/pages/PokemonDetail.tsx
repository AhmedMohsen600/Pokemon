import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Ruler, Weight, Zap } from 'lucide-react'

import { PokemonDetailSkeleton } from '../../../shared/components/LoadingSkeleton'
import {
  ErrorState,
  PokemonNotFound,
} from '../../../shared/components/ErrorState'
import { PokemonStats } from '../components/PokemonStats'
import { usePokemonWithSpecies } from '../hooks/usePokemon'

const typeColors: Record<string, string> = {
  normal: 'bg-gray-400',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  electric: 'bg-yellow-400',
  grass: 'bg-green-500',
  ice: 'bg-cyan-400',
  fighting: 'bg-red-700',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-600',
  flying: 'bg-indigo-400',
  psychic: 'bg-pink-500',
  bug: 'bg-green-400',
  rock: 'bg-yellow-800',
  ghost: 'bg-purple-700',
  dragon: 'bg-indigo-700',
  dark: 'bg-gray-800',
  steel: 'bg-gray-500',
  fairy: 'bg-pink-300',
}

function PokemonDetail() {
  const { id } = useParams<{ id: string }>()

  const { pokemon, isLoading, isError, error, refetch } = usePokemonWithSpecies(
    id!
  )

  if (isLoading) return <PokemonDetailSkeleton />

  if (isError) {
    if ((error as any)?.response?.status === 404)
      return <PokemonNotFound pokemonId={id!} />

    return (
      <div className="container mx-auto px-4 py-8">
        <ErrorState
          title="Failed to load Pokémon"
          message={
            error?.message ||
            'Something went wrong while fetching the Pokémon details.'
          }
          onRetry={() => refetch()}
        />
      </div>
    )
  }

  if (!pokemon) return <PokemonNotFound pokemonId={id!} />

  const formatPokemonId = (id: number) => `#${id.toString().padStart(3, '0')}`

  const getPokemonImageUrl = () => {
    if (pokemon.sprites?.other?.['official-artwork']?.front_default)
      return pokemon.sprites.other['official-artwork'].front_default

    if (pokemon.sprites?.front_default) return pokemon.sprites.front_default

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
  }
  //   const navigate = useNavigate()

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pb-8 pt-[90px]">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Back button */}
        <div className="absolute left-[100px] top-[32px] mb-6">
          <Link
            className="flex items-center justify-center gap-3 rounded-md border border-gray-200 bg-white px-4 py-2"
            to="/pagination"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to List
          </Link>
        </div>

        {/* Main Pokemon Card */}
        <div className="overflow-hidden rounded-md bg-white shadow-lg">
          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-6 text-center text-white">
            <h1 className="flex items-center justify-center gap-3 text-4xl font-bold capitalize">
              <Zap className="h-6 w-6 text-white" />
              {pokemon.name}
            </h1>
            <div className="mt-6 text-sm font-medium opacity-90">
              {formatPokemonId(pokemon.id)}
            </div>
          </div>

          {/* Card Content */}
          <div className="p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left column - Image and basic info */}
              <div className="space-y-6">
                {/* Pokemon image */}
                <div className="text-center">
                  <div className="mx-auto flex h-80 w-80 items-center justify-center rounded-full bg-gray-100">
                    <img
                      src={getPokemonImageUrl()}
                      alt={pokemon.name}
                      className="h-[300px] w-[300px] object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `https://via.placeholder.com/288x288.png?text=${pokemon.name
                          .charAt(0)
                          .toUpperCase()}`
                      }}
                    />
                  </div>
                </div>

                {/* Type badge */}
                <div className="flex justify-center">
                  {pokemon.types.slice(0, 1).map((type) => (
                    <span
                      key={type.type.name}
                      className={`rounded-full px-3 py-[2px] text-sm font-medium text-white ${
                        typeColors[type.type.name] || 'bg-gray-400'
                      }`}
                    >
                      {type.type.name}
                    </span>
                  ))}
                </div>

                {/* Height and Weight */}
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="rounded-md bg-[#fafbfd] p-4">
                    <div className="mb-1 flex items-center justify-center gap-2">
                      <Ruler className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">Height</span>
                    </div>
                    <div className="text-xl font-semibold">
                      {pokemon.height / 10} m
                    </div>
                  </div>
                  <div className="rounded-md bg-[#fafbfd] p-4">
                    <div className="mb-1 flex items-center justify-center gap-2">
                      <Weight className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-500">Weight</span>
                    </div>
                    <div className="text-xl font-semibold">
                      {pokemon.weight / 10} kg
                    </div>
                  </div>
                </div>
              </div>

              {/* Right column - Stats, Abilities, Base Experience */}
              <div className="space-y-6">
                <PokemonStats stats={pokemon.stats} />

                {/* Abilities */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold">Abilities</h3>
                  <div className="space-y-2">
                    {pokemon.abilities.map((ability) => (
                      <div className="flex items-center gap-1">
                        <div
                          key={ability.ability.name}
                          className={`w-fit rounded-full px-2 text-xs font-semibold text-black ${
                            ability.is_hidden
                              ? 'bg-gray-100 py-1'
                              : 'border-[1.5px] border-gray-200 bg-white py-[2.5px]'
                          }`}
                        >
                          {ability.ability.name.replace('-', ' ')}
                        </div>
                        {ability.is_hidden && (
                          <span className="text-sm text-gray-500">
                            (Hidden)
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Base Experience */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold">
                    Base Experience
                  </h3>
                  <div className="text-2xl font-bold text-purple-600">
                    {pokemon.base_experience || 0} XP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetail
