import { PokemonCard } from '../components/PokemonCard'
import { LoadMoreButton } from '../components/LoadMoreButton'
import { PokemonCardSkeleton } from '../../../shared/components/LoadingSkeleton'
import { ErrorState } from '../../../shared/components/ErrorState'
import { usePokemonInfinite } from '../hooks/usePokemonInfinite'
import { POKEMON_PER_PAGE } from '../../../constants/pokemonConstants'

export default function LoadMoreList() {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = usePokemonInfinite(POKEMON_PER_PAGE)

  const allPokemon = data?.pages.flatMap((page) => page.pokemonList) || []

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
      <div className="grid grid-cols-1 justify-items-center gap-5 px-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {allPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}

        {/* Show loading skeletons while fetching next page */}
        {isFetchingNextPage &&
          Array.from({ length: POKEMON_PER_PAGE }).map((_, index) => (
            <PokemonCardSkeleton key={`loading-${index}`} />
          ))}
      </div>

      {/* Show initial loading state */}
      {isLoading && allPokemon.length === 0 && (
        <div className="grid grid-cols-1 justify-items-center gap-3 px-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {Array.from({ length: POKEMON_PER_PAGE }).map((_, index) => (
            <PokemonCardSkeleton key={index} />
          ))}
        </div>
      )}

      {/* Load more button */}
      {!isLoading && allPokemon.length > 0 && (
        <LoadMoreButton
          onLoadMore={() => fetchNextPage()}
          hasNextPage={!!hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          isError={isError}
          pageSize={POKEMON_PER_PAGE}
          currentCount={allPokemon.length}
        />
      )}

      {/* Counter text at bottom */}
      {allPokemon.length > 0 && (
        <div className="mt-6 text-center text-sm text-gray-600">
          Showing {allPokemon.length} Pokemon
        </div>
      )}
    </>
  )
}
