import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome screen', () => {
  render(<App />);
  // The welcome page contains multiple occurrences of "Memory Match".
  // Verify the main heading text specifically to avoid ambiguity.
  const heading = screen.getByRole('heading', {
    name: /welcome to memory match/i,
  });
  expect(heading).toBeInTheDocument();
});
