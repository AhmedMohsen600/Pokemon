import { cn } from '../lib/cn'

interface LoadingSkeletonProps {
  className?: string
}

export function LoadingSkeleton({ className }: LoadingSkeletonProps) {
  return (
    <div className={cn('animate-pulse rounded-md bg-gray-300', className)} />
  )
}

export function PokemonCardSkeleton() {
  return (
    <div className="w-72 rounded-lg border border-gray-200 bg-white p-4 text-center transition-all duration-200">
      {/* Image skeleton - simple gray rectangle */}
      <div className="mx-auto mb-4 h-[190px] w-full rounded-md bg-gray-300"></div>

      {/* Content skeleton */}
      <div className="space-y-2">
        {/* Pokemon name skeleton - longer bar */}
        <div className="h-4 w-40 rounded bg-gray-300"></div>
        {/* Pokemon ID skeleton - shorter bar */}
        <div className="h-3 w-16 rounded bg-gray-300"></div>
      </div>
    </div>
  )
}

export function PokemonDetailSkeleton() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <div className="space-y-4 text-center">
        <LoadingSkeleton className="mx-auto h-8 w-48" />
        <LoadingSkeleton className="mx-auto h-64 w-64 rounded-full" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <LoadingSkeleton className="h-6 w-32" />
          <div className="space-y-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex justify-between">
                <LoadingSkeleton className="h-4 w-20" />
                <LoadingSkeleton className="h-4 w-16" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <LoadingSkeleton className="h-6 w-32" />
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <LoadingSkeleton key={i} className="h-4 w-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
