export const ROUTER_CONSTANTS = {
  HOME: '/',
  POKEMON_LISTING: {
    PAGINATION_LIST: '/pagination',
    LOADMORE_LISTING: '/load-more',
  },
  POKEMON_DETAIL: {
    ROOT: '/pokemon/:id',
  },
  NOT_FOUND: '*',
} as const
