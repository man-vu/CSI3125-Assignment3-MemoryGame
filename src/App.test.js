import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome screen', () => {
  render(<App />);
  const heading = screen.getByText(/memory match/i);
  expect(heading).toBeInTheDocument();
});
