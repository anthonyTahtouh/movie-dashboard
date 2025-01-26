/* eslint-disable react/prop-types */
import { useState } from "react";

const SearchPanel = ({ movies, onSelectMovie }) => {
  const [query, setQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [minRating, setMinRating] = useState(1);

  // Filter logic based on title, genre, year, and rating
  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title.toLowerCase().includes(query.toLowerCase());
    const matchesGenre = selectedGenre ? movie.genre.includes(selectedGenre) : true;
    const matchesYear = selectedYear ? movie.year === parseInt(selectedYear) : true;
    const matchesRating = movie.rating >= minRating;

    return matchesTitle && matchesGenre && matchesYear && matchesRating;
  });

  // Handle change for rating to ensure it's between 1 and 10
  const handleMinRatingChange = (e) => {
    const value = Math.min(10, Math.max(1, e.target.value));
    setMinRating(value);
  };

  // Reset filters to initial state
  const resetFilters = () => {
    setQuery("");
    setSelectedGenre("");
    setSelectedYear("");
    setMinRating(1);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-2">Search and Filter Movies</h2>
      
      {/* Search by Title */}
      <input
        type="text"
        className="w-full p-2 border rounded mb-4"
        placeholder="Search by title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      
      {/* Filter by Genre */}
      <select
        className="w-full p-2 border rounded mb-4"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">Filter by Genre</option>
        {/* Dynamically populate genre options */}
        {[...new Set(movies.flatMap((movie) => movie.genre))].map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      
      {/* Filter by Year */}
      <select
        className="w-full p-2 border rounded mb-4"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        <option value="">Filter by Year</option>
        {/* Dynamically populate year options */}
        {[...new Set(movies.map((movie) => movie.year))].map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      
      {/* Filter by Minimum Rating */}
      <input
        type="number"
        className="w-full p-2 border rounded mb-4"
        placeholder="Minimum Rating (1-10)"
        value={minRating}
        onChange={handleMinRatingChange}
        min="1"
        max="10"
      />

      {/* Reset Filters Button */}
      <button
        onClick={resetFilters}
        className="w-full p-2 bg-black text-white rounded mb-4 hover:bg-gray-800 reset-filter-btn"
      >
        Reset Filters
      </button>

      {/* Filtered Movies List */}
      <ul>
        {filteredMovies.map((movie) => (
          <li
            key={movie.id}
            className="py-1 cursor-pointer hover:text-blue-600"
            onClick={() => onSelectMovie(movie)}
          >
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPanel;
