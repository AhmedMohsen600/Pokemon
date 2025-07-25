import { ROUTER_CONSTANTS } from '../../../constants/routerConstants'
import { lazy } from '../../../utils/lazyWithRetry'
import type { RouteObject } from 'react-router-dom'

const PokemonDetail = lazy(() => import('../pages/PokemonDetail'))

const pokemonDetailRoutes: RouteObject[] = [
  {
    path: ROUTER_CONSTANTS.POKEMON_DETAIL.ROOT,
    element: <PokemonDetail />,
  },
]

const PokemonDetailRoutes = () => null

PokemonDetailRoutes.routes = pokemonDetailRoutes

export default PokemonDetailRoutes
