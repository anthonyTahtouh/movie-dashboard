/* eslint-disable react/prop-types */
const MovieDetails = ({ movie }) => (
  <div className="p-4 bg-white rounded shadow mt-4">
    <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
    <p><strong>Year:</strong> {movie.year}</p>
    <p><strong>Genre:</strong> {movie.genre.join(", ")}</p>
    <p><strong>Rating:</strong> {movie.rating}</p>
    <p><strong>Director:</strong> {movie.director}</p>
    <p><strong>Plot:</strong> {movie.plot}</p>
    <img src={movie.poster} alt={movie.title} className="mt-2 rounded" />
  </div>
);

export default MovieDetails;
