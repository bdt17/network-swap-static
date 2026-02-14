import { render, screen } from '@testing-library/react'
import App from '../App'

test('dashboard renders Thomas IT UI correctly', () => {
  render(<App />)
  
  // Emoji-safe regex matches (ignore emoji prefix)
  expect(screen.getByText(/Tech Dashboard/i)).toBeInTheDocument()
  expect(screen.getByText('Phoenix DC21')).toBeInTheDocument()
  expect(screen.getByText(/Dispatch Tower/i)).toBeInTheDocument()
  expect(screen.getByText(/EOL Swaps/i)).toBeInTheDocument()
  
  // Test link roles instead of emoji text
  expect(screen.getAllByRole('link')).toHaveLength(4)
  expect(screen.getByRole('link', { name: /Dispatch Tower/i })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /Inventory/i })).toBeInTheDocument()
})
