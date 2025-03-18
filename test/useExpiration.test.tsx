import { renderHook, act } from '@testing-library/react'
import { useExpiration } from '../src/hooks/useExpiration'
import { storage } from '../src/utils/storage'

describe('useExpiration Hook', () => {
  beforeEach(() => {
    storage.clear()
  })

  test('초기 만료 여부 확인', () => {
    const { result } = renderHook(() => useExpiration('session', 3))

    expect(result.current.expired).toBe(true)
  })

  test('만료 시간 설정 후 정상 작동', () => {
    const { result } = renderHook(() => useExpiration('session', 3))

    act(() => {
      result.current.setExpiration()
    })

    expect(result.current.expired).toBe(false)
  })

  test('만료 시간 지나면 expired = true', async () => {
    jest.useFakeTimers()

    const { result } = renderHook(() => useExpiration('session', 1))

    act(() => {
      result.current.setExpiration()
    })

    expect(result.current.expired).toBe(false)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    expect(result.current.expired).toBe(true)

    jest.useRealTimers()
  })
})
