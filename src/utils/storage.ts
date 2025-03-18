export const storage = {
  getItem: (key: string) => {
    if (!key) throw new Error('Key is required')

    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  },

  setItem: (key: string, value: any) => {
    if (!key || value === undefined)
      throw new Error('Key and value are required')

    localStorage.setItem(key, JSON.stringify(value))
  },

  removeItem: (key: string) => {
    if (!key) throw new Error('Key is required')

    localStorage.removeItem(key)
  },

  clear: (keepKeys: string[] = []) => {
    if (!keepKeys.length) {
      localStorage.clear()
      return
    }

    const savedData = keepKeys.reduce((acc, key) => {
      const value = localStorage.getItem(key)
      if (value !== null) acc.set(key, value)
      return acc
    }, new Map<string, string>())

    localStorage.clear()

    savedData.forEach((value, key) => {
      localStorage.setItem(key, value)
    })
  },
}
