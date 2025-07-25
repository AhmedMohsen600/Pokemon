import { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { MainLayout } from '../shared/layouts/MainLayout'
import { ErrorState } from '../shared/components/ErrorState'
import { AppLoadingSkeleton } from '../shared/components/PageSkeletons'
import PokemonListRoutes from '../features/pokemonList/routes/PokemonListRoutes'
import PokemonDetailRoutes from '../features/pokemonDetail/routes/PokemonDetailRoutes'
import CommonRoutes from '../shared/routes/CommonRoutes'

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error
  resetErrorBoundary: () => void
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <ErrorState
        title="Application Error"
        message={error.message || 'Something went wrong in the application.'}
        onRetry={resetErrorBoundary}
      />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      ...PokemonListRoutes.routes,
      ...PokemonDetailRoutes.routes,
      ...CommonRoutes.routes,
    ],
  },
])

const BrowserRouterWrapper = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      <Suspense fallback={<AppLoadingSkeleton />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default BrowserRouterWrapper
