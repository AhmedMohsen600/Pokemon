import { lazy as ReactLazy, type ComponentType } from 'react'

export const lazy = (
  factory: () => Promise<{ default: ComponentType<any> }>
) => {
  return ReactLazy(() => factory().catch(importErrorHandler))
}

export function importErrorHandler(err: string): {
  default: ComponentType<any>
} {
  // Get the last reload time from local storage and the current time
  const timeStr = sessionStorage.getItem('last-reload')
  const time = timeStr ? Number(timeStr) : null
  const now = Date.now()

  // If the last reload time is more than 10 seconds ago, reload the page
  const isReloading = !time || time + 10_000 < now
  if (isReloading) {
    console.log('New version for this module found. Reloading ...')
    sessionStorage.setItem('last-reload', String(now))
    window.location.reload()
    // Return an empty module so we do not see the error in the app before reloading
    return { default: () => null }
  }

  // We let ErrorBoundary handle the error
  throw new Error(err)
}
