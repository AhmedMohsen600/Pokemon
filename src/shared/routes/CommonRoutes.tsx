import { Navigate } from 'react-router-dom'
import { ROUTER_CONSTANTS } from '../../constants/routerConstants'
import { ErrorState } from '../components/ErrorState'
import type { RouteObject } from 'react-router-dom'

const commonRoutes: RouteObject[] = [
  {
    path: ROUTER_CONSTANTS.HOME,
    element: (
      <Navigate to={ROUTER_CONSTANTS.POKEMON_LISTING.PAGINATION_LIST} replace />
    ),
  },
  {
    path: ROUTER_CONSTANTS.NOT_FOUND,
    element: (
      <div className="container mx-auto px-4 py-8">
        <ErrorState
          title="Page Not Found"
          message="The page you're looking for doesn't exist."
        />
      </div>
    ),
  },
]

const CommonRoutes = () => null

CommonRoutes.routes = commonRoutes

export default CommonRoutes
