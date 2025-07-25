import { ROUTER_CONSTANTS } from '../../../constants/routerConstants'
import { lazy } from '../../../utils/lazyWithRetry'
import type { RouteObject } from 'react-router-dom'

const ListingLayout = lazy(() => import('../layouts/ListingLayout'))
const PaginationList = lazy(() => import('../pages/PaginationList'))
const LoadMoreList = lazy(() => import('../pages/LoadMoreList'))

const pokemonListRoutes: RouteObject[] = [
  {
    element: <ListingLayout />,
    children: [
      {
        path: ROUTER_CONSTANTS.POKEMON_LISTING.PAGINATION_LIST,
        element: <PaginationList />,
      },
      {
        path: ROUTER_CONSTANTS.POKEMON_LISTING.LOADMORE_LISTING,
        element: <LoadMoreList />,
      },
    ],
  },
]

const PokemonListRoutes = () => null

PokemonListRoutes.routes = pokemonListRoutes

export default PokemonListRoutes
