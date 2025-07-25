import { Loader2, Plus } from 'lucide-react'

interface LoadMoreButtonProps {
  onLoadMore: () => void
  hasNextPage: boolean
  isFetchingNextPage: boolean
  isError: boolean
  pageSize: number
  currentCount: number
}

export function LoadMoreButton({
  onLoadMore,
  hasNextPage,
  isFetchingNextPage,
  isError,
  pageSize,
}: LoadMoreButtonProps) {
  if (!hasNextPage) {
    return (
      <div className="flex justify-center py-8">
        <div className="text-sm text-gray-500">
          🎉 You've seen all Pokemon! That's the complete Pokédex!
        </div>
      </div>
    )
  }

  if (isFetchingNextPage) {
    return (
      <div className="flex justify-center py-8">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Loader2 className="h-5 w-5 animate-spin text-green-500" />
          Loading more Pokemon...
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center py-8">
      <button
        onClick={onLoadMore}
        className="flex min-w-[180px] items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-600"
      >
        {isError ? (
          <>
            <Plus className="h-4 w-4" />
            Retry Load More
          </>
        ) : (
          <>
            <Plus className="h-4 w-4" />
            Load {pageSize} More Pokemon
          </>
        )}
      </button>
    </div>
  )
}
