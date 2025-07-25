import { useLocation, Link, Outlet } from 'react-router-dom'
import { ROUTER_CONSTANTS } from '../../../constants/routerConstants'

function ListingLayout() {
  const location = useLocation()
  const isPaginationActive =
    location.pathname === ROUTER_CONSTANTS.POKEMON_LISTING.PAGINATION_LIST
  const isLoadMoreActive =
    location.pathname === ROUTER_CONSTANTS.POKEMON_LISTING.LOADMORE_LISTING

  const mappedColor = {
    pagination: 'bg-[#f4f7fe]',
    loadMore: 'bg-[#ebfff7]',
  }

  return (
    <div
      className={`${mappedColor[isPaginationActive ? 'pagination' : 'loadMore']} px-4 py-8`}
    >
      {/* Shared Header for Listing Pages */}
      <div className="mb-8 text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="text-2xl">⚡</span>
          <h1 className="text-3xl font-bold text-gray-900">Pokédex</h1>
        </div>
        <p className="mb-6 text-gray-600">
          Discover and explore Pokemon with{' '}
          {isPaginationActive ? 'page controls' : 'infinite scroll'}
        </p>

        {/* Toggle Buttons */}
        <div className="flex items-center justify-center gap-2">
          <Link
            to={ROUTER_CONSTANTS.POKEMON_LISTING.PAGINATION_LIST}
            className={`rounded-md border border-gray-200 px-4 py-2 text-sm font-medium transition-colors ${
              isPaginationActive
                ? 'bg-black text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            Page Controls
          </Link>
          <Link
            to={ROUTER_CONSTANTS.POKEMON_LISTING.LOADMORE_LISTING}
            className={`rounded-md border border-gray-200 px-4 py-2 text-sm font-medium transition-colors ${
              isLoadMoreActive
                ? 'bg-black text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            Infinite Scroll
          </Link>
        </div>
      </div>
      <div className="sm:px-4 xl:px-20">
        <Outlet />
      </div>
    </div>
  )
}
export default ListingLayout
