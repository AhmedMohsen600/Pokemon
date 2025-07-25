import { useState } from 'react'
import { PokemonCard } from '../components/PokemonCard'
import { PaginationControls } from '../components/PaginationControls'
import { PokemonCardSkeleton } from '../../../shared/components/LoadingSkeleton'
import { ErrorState } from '../../../shared/components/ErrorState'
import { usePokemonList } from '../hooks/usePokemonList'
import { POKEMON_PER_PAGE } from '../../../constants/pokemonConstants'

export default function PaginationList() {
  const [currentPage, setCurrentPage] = useState(1)

  const { data, isLoading, isError, error, refetch } = usePokemonList({
    page: currentPage,
    limit: POKEMON_PER_PAGE,
  })

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-8">
        <ErrorState
          title="Failed to load Pokémon"
          message={
            error?.message ||
            'Something went wrong while fetching the Pokémon list.'
          }
          onRetry={() => refetch()}
        />
      </div>
    )
  }

  return (
    <>
      {isLoading ? (
        <div className="grid grid-cols-1 justify-items-center gap-3 px-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {Array.from({ length: POKEMON_PER_PAGE }).map((_, index) => (
            <PokemonCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 justify-items-center gap-5 px-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {data?.pokemonList.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>

          {data && (
            <PaginationControls
              currentPage={currentPage}
              totalCount={data.totalCount}
              pageSize={POKEMON_PER_PAGE}
              hasNext={data.hasNext}
              hasPrevious={data.hasPrevious}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </>
  )
}
