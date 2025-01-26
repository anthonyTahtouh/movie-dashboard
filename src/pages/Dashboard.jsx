import { useState, useEffect } from "react";
import { fetchMovies } from "../services/api";
import Chart from "../components/Chart.jsx";
import Leaderboard from "../components/Leaderboard.jsx";
import SearchPanel from "../components/SearchPanel.jsx";
import MovieDetails from "../components/MovieDetails.jsx";

const Dashboard = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    loadMovies();
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Movie Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
        {/* Chart component takes full width (100%) on all screen sizes */}
        <div className="lg:w-full">
          <Chart movies={movies} />
        </div>

        {/* Leaderboard and SearchPanel components take 50% width each on large screens, full width on smaller screens */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="w-full">
            <Leaderboard movies={movies} />
          </div>
          <div className="w-full">
            <SearchPanel movies={movies} onSelectMovie={setSelectedMovie} />
          </div>
        </div>
      </div>
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
    </div>
  );
};

export default Dashboard;
