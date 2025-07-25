import { LoadingSkeleton, PokemonCardSkeleton } from './LoadingSkeleton'
import { POKEMON_PER_PAGE } from '../../constants/pokemonConstants'

export function ListingPageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Skeleton */}
      <div className="mb-8 text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <LoadingSkeleton className="h-6 w-6 rounded-full" />
          <LoadingSkeleton className="h-8 w-32" />
        </div>
        <LoadingSkeleton className="mx-auto mb-6 h-5 w-64" />

        {/* Toggle Buttons Skeleton */}
        <div className="flex items-center justify-center gap-2">
          <LoadingSkeleton className="h-9 w-24 rounded-lg" />
          <LoadingSkeleton className="h-9 w-28 rounded-lg" />
        </div>
      </div>

      {/* Pokemon Cards Grid Skeleton */}
      <div className="grid grid-cols-1 justify-items-center gap-3 px-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {Array.from({ length: POKEMON_PER_PAGE }).map((_, index) => (
          <PokemonCardSkeleton key={index} />
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className="mt-8 flex items-center justify-center gap-2">
        <LoadingSkeleton className="h-9 w-16 rounded-md" />
        <LoadingSkeleton className="h-9 w-16 rounded-md" />
        <LoadingSkeleton className="h-9 w-8 rounded-md" />
        <LoadingSkeleton className="h-9 w-8 rounded-md" />
        <LoadingSkeleton className="h-9 w-8 rounded-md" />
        <LoadingSkeleton className="h-9 w-16 rounded-md" />
        <LoadingSkeleton className="h-9 w-16 rounded-md" />
      </div>
    </div>
  )
}

export function DetailPageSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Back button skeleton */}
      <div className="container mx-auto max-w-4xl px-4 pt-8">
        <div className="mb-6">
          <LoadingSkeleton className="h-9 w-28 rounded-md" />
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 pb-8">
        {/* Main Pokemon Card Skeleton */}
        <div className="overflow-hidden rounded-md bg-white shadow-lg">
          {/* Header Skeleton */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-6 text-center">
            <LoadingSkeleton className="mx-auto mb-6 h-10 w-48 bg-white/20" />
            <LoadingSkeleton className="mx-auto h-4 w-16 bg-white/20" />
          </div>

          {/* Content Skeleton */}
          <div className="p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left column - Image and basic info */}
              <div className="space-y-6">
                <div className="text-center">
                  <LoadingSkeleton className="mx-auto h-80 w-80 rounded-full" />
                </div>

                {/* Types skeleton */}
                <div className="flex justify-center gap-2">
                  <LoadingSkeleton className="h-6 w-16 rounded-full" />
                  <LoadingSkeleton className="h-6 w-20 rounded-full" />
                </div>

                {/* Height and Weight skeleton */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-md bg-gray-50 p-4">
                    <LoadingSkeleton className="mx-auto mb-2 h-4 w-12" />
                    <LoadingSkeleton className="mx-auto h-6 w-16" />
                  </div>
                  <div className="rounded-md bg-gray-50 p-4">
                    <LoadingSkeleton className="mx-auto mb-2 h-4 w-12" />
                    <LoadingSkeleton className="mx-auto h-6 w-16" />
                  </div>
                </div>
              </div>

              {/* Right column - Stats and abilities */}
              <div className="space-y-6">
                {/* Base Stats skeleton */}
                <div>
                  <LoadingSkeleton className="mb-4 h-6 w-24" />
                  <div className="space-y-3">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <LoadingSkeleton className="h-4 w-20" />
                        <LoadingSkeleton className="h-2 flex-1 rounded-full" />
                        <LoadingSkeleton className="h-4 w-8" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Abilities skeleton */}
                <div>
                  <LoadingSkeleton className="mb-4 h-6 w-20" />
                  <div className="space-y-2">
                    <LoadingSkeleton className="h-4 w-32" />
                    <LoadingSkeleton className="h-4 w-28" />
                  </div>
                </div>

                {/* Base Experience skeleton */}
                <div>
                  <LoadingSkeleton className="mb-2 h-4 w-32" />
                  <LoadingSkeleton className="h-6 w-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AppLoadingSkeleton() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  )
}
