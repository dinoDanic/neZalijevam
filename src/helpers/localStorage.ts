type LocalItemTypes = "nezalijevam-token" 

export const LocalStorage = {
  register: {
    discoveryToken: 'nezalijevam-token',
  },
  setItem: (key: LocalItemTypes, value: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value)
    }
  },
  getItem: (key: LocalItemTypes) => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key)
    }
  },
  clearStorage: () => {
    if (typeof window !== 'undefined') {
      localStorage.clear()
    }
  }
}
