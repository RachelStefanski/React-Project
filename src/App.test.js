import { render, screen } from '@testing-library/react';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
