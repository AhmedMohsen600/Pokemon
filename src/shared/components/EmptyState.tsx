import { Search } from 'lucide-react'
import { cn } from '../lib/cn'

interface EmptyStateProps {
  title?: string
  message?: string
  icon?: React.ReactNode
  action?: React.ReactNode
  className?: string
}

export function EmptyState({
  title = 'No results found',
  message = 'Try adjusting your search or filter criteria.',
  icon,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center p-8 text-center',
        className
      )}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
        {icon || <Search className="h-8 w-8 text-muted-foreground" />}
      </div>

      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="mb-6 max-w-md text-muted-foreground">{message}</p>

      {action}
    </div>
  )
}
