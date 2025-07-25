import type { PokemonStat } from '../types'

interface PokemonStatsProps {
  stats: PokemonStat[]
}

const statNames: Record<string, string> = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  'special-attack': 'Sp. Attack',
  'special-defense': 'Sp. Defense',
  speed: 'Speed',
}

const statColors: Record<string, string> = {
  hp: 'bg-gray-900',
  attack: 'bg-gray-900',
  defense: 'bg-gray-900',
  'special-attack': 'bg-gray-900',
  'special-defense': 'bg-gray-900',
  speed: 'bg-gray-900',
}

export function PokemonStats({ stats }: PokemonStatsProps) {
  const maxBaseStat = 255

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Base Stats</h3>

      <div className="space-y-3">
        {stats.map((stat) => {
          const statKey = stat.stat.name
          const percentage = (stat.base_stat / maxBaseStat) * 100

          return (
            <div key={statKey} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium">
                  {statNames[statKey] || stat.stat.name}
                </span>
                <span className="text-gray-600">{stat.base_stat}</span>
              </div>

              <div className="h-2 w-full rounded-full bg-gray-100">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    statColors[statKey] || 'bg-gray-900'
                  }`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
