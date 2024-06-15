import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

test('renders learn react link', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Welcome to Our Frontend Store/i);
  expect(linkElement).toBeInTheDocument();
});
