import * as React from 'react'

const MOBILE_BREAKPOINT = 768

const getSnapshot = () => window.innerWidth < MOBILE_BREAKPOINT

const getServerSnapshot = () => false

export function useIsMobile() {
  const subscribe = React.useCallback((notify: () => void) => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    mql.addEventListener('change', notify)
    return () => mql.removeEventListener('change', notify)
  }, [])

  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
