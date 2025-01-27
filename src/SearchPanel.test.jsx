/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchPanel from './components/SearchPanel';

const mockMovies = [
  { id: 6, title: 'Inception', genre: ['Sci-Fi'], year: 2010, rating: 8.8 },
  { id: 10, title: 'Interstellar', genre: ['Sci-Fi', 'Drama'], year: 2014, rating: 8.6 },
];

test('renders the search input and movie list', () => {
  render(<SearchPanel movies={mockMovies} />);

  // Verify the search input is present
  expect(screen.getByPlaceholderText('Search by title')).toBeInTheDocument();

  // Verify the movie titles are rendered
  mockMovies.forEach((movie) => {
    expect(screen.getByText(movie.title)).toBeInTheDocument();
  });
});
