import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../../../shared/ui/button'

interface PaginationControlsProps {
  currentPage: number
  totalCount: number
  pageSize: number
  hasNext: boolean
  hasPrevious: boolean
  onPageChange: (page: number) => void
}

export function PaginationControls({
  currentPage,
  totalCount,
  pageSize,
  hasNext,
  hasPrevious,
  onPageChange,
}: PaginationControlsProps) {
  const totalPages = Math.ceil(totalCount / pageSize)

  const getVisiblePageNumbers = () => {
    const pages: (number | string)[] = []

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)

      if (currentPage <= 4) {
        for (let i = 2; i <= 5; i++) pages.push(i)
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 3) {
        pages.push('...')
        for (let i = totalPages - 4; i <= totalPages; i++) {
          if (i !== 1) pages.push(i)
        }
      } else {
        pages.push('...')
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      }
    }

    return pages
  }

  if (totalPages <= 1) return null

  return (
    <div className="mt-8 flex flex-col items-center gap-4">
      <div className="flex items-center gap-1 sm:gap-2">
        {/* Previous page */}
        <Button
          variant="outline"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!hasPrevious}
          className="flex items-center gap-1 px-2 py-2 text-xs sm:px-3 sm:text-sm"
        >
          <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">Previous</span>
          <span className="sm:hidden">Prev</span>
        </Button>

        {/* Page numbers */}
        <div className="flex items-center gap-1 sm:gap-2">
          {getVisiblePageNumbers().map((pageNumber, index) => {
            if (pageNumber === '...') {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="px-1 py-2 text-xs text-gray-500 sm:px-3 sm:text-sm"
                >
                  ...
                </span>
              )
            }

            const page = pageNumber as number
            return (
              <Button
                key={page}
                variant={page === currentPage ? 'default' : 'outline'}
                size="icon"
                onClick={() => onPageChange(page)}
                className={`h-8 text-xs sm:h-10 sm:text-sm ${
                  page === totalPages
                    ? 'w-[32px] sm:w-[40px]'
                    : 'w-[28px] sm:w-[34px]'
                }`}
              >
                {page}
              </Button>
            )
          })}
        </div>

        {/* Next page */}
        <Button
          variant="outline"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!hasNext}
          className="flex items-center gap-1 px-2 py-2 text-xs sm:px-3 sm:text-sm"
        >
          <span className="hidden sm:inline">Next</span>
          <span className="sm:hidden">Next</span>
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </div>

      <div className="text-sm text-gray-500">
        Page {currentPage} of {totalPages} (
        {Math.min(pageSize, totalCount - (currentPage - 1) * pageSize)} Pokemon
        shown)
      </div>
    </div>
  )
}
