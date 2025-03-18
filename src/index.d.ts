import { RefObject } from 'react'

export declare function useExpiration(
  key: string,
  expirySeconds?: number,
  expiryDateString?: string,
  onExpire?: () => void,
): {
  expired: boolean
  setExpiration: (dateString?: string) => void
}

export declare function useClickOutside<T extends HTMLElement>(
  cb: (event: MouseEvent | TouchEvent) => void,
  dependencies?: any[],
): RefObject<T>
