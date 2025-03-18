import { useEffect, useRef, useLayoutEffect, type RefObject } from 'react'

export function useClickOutside<T extends HTMLElement>(
  cb: (event: MouseEvent | TouchEvent) => void,
  dependencies: any[] = [],
): RefObject<T> {
  const ref = useRef<T>(null)
  const refCb = useRef(cb)

  useLayoutEffect(() => {
    refCb.current = cb
  }, [cb])

  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      const element = ref.current
      if (element && !element.contains(event.target as Node)) {
        refCb.current(event)
      }
    }

    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, dependencies)

  return ref
}
