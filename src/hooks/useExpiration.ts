import React from 'react'
import { parseDate } from '../utils/date'
import { storage } from '../utils/storage'

export const useExpiration = (
  key: string,
  expirySeconds?: number,
  expiryDateString?: string,
  onExpire?: () => void,
) => {
  const getExpiryTime = () => {
    const lastSetAt = storage.getItem(key)
    if (!lastSetAt) return null

    const lastTime = new Date(parseInt(lastSetAt, 10))
    const expiryTime = expiryDateString
      ? parseDate(expiryDateString)
      : new Date(lastTime.getTime() + (expirySeconds || 0) * 1000)

    return expiryTime
  }

  const [expired, setExpired] = React.useState(() => {
    const expiryTime = getExpiryTime()
    return expiryTime ? expiryTime <= new Date() : true
  })

  React.useEffect(() => {
    const interval = setInterval(() => {
      const expiryTime = getExpiryTime()
      if (expiryTime && expiryTime <= new Date()) {
        setExpired(true)
        onExpire?.()
        storage.removeItem(key)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [key, expirySeconds, expiryDateString])

  const setExpiration = (dateString?: string) => {
    const expirationTime = dateString
      ? parseDate(dateString)?.getTime()
      : Date.now()
    if (!expirationTime) return

    setExpired(false)
    storage.setItem(key, expirationTime.toString())
  }

  return { expired, setExpiration }
}
