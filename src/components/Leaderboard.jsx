/* eslint-disable react/prop-types */
const Leaderboard = ({ movies }) => {
  const topMovies = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-2">Top 5 Movies</h2>
      <ul className="pl-0 list-style-none">
        {topMovies.map((movie) => (
          <li key={movie.id} className="py-1">
            {movie.title} - {movie.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
