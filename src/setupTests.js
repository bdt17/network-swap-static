import '@testing-library/jest-dom'
global.fetch = global.fetch || jest.fn()

// Suppress React Router v7 warnings in tests
const originalWarn = console.warn
beforeAll(() => {
  console.warn = (...args) => {
    if (args[0]?.includes?.('React Router Future Flag Warning')) return
    originalWarn(...args)
  }
})
