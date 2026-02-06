import { render, screen } from '@testing-library/react';
import App from './App';

test('renders center circle with photo', () => {
  render(<App />);
  expect(screen.getByAltText(/jeo/i)).toBeInTheDocument();
});
