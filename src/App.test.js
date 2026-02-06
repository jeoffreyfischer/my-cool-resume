import { render, screen } from '@testing-library/react';
import App from './App';

test('renders click a section prompt', () => {
  render(<App />);
  expect(screen.getByText(/click a section/i)).toBeInTheDocument();
});
