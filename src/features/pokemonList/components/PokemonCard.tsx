import { Link } from 'react-router-dom'

import type { PokemonBasicInfo } from '../types'

interface PokemonCardProps {
  pokemon: PokemonBasicInfo
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const formatPokemonId = (id: number) => {
    return `#${id.toString().padStart(3, '0')}`
  }

  const getPokemonImageUrl = (pokemon: PokemonBasicInfo) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
  }

  return (
    <Link to={`/pokemon/${pokemon.id}`} className="group block">
      <div className="rounded-lg border border-gray-200 bg-white p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
        <div className="mx-auto mb-1 flex h-[190px] w-full items-center justify-center overflow-visible rounded-md bg-gray-100">
          <img
            src={getPokemonImageUrl(pokemon)}
            alt={pokemon.name}
            className="h-full w-[500px] object-contain"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = `https://via.placeholder.com/128x128.png?text=${pokemon.name
                .charAt(0)
                .toUpperCase()}`
            }}
          />
        </div>

        <div className="space-y-1">
          <h3 className="line-clamp-1 text-base font-semibold capitalize text-gray-900">
            {pokemon.name}
          </h3>
          <div className="font-mono text-sm text-gray-500">
            {formatPokemonId(pokemon.id)}
          </div>
        </div>
      </div>
    </Link>
  )
}
