/* eslint-disable react/prop-types */
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const Chart = ({ movies }) => {
  const data = movies.reduce((acc, movie) => {
    movie.genre.forEach((g) => {
      const found = acc.find((item) => item.genre === g);
      if (found) {
        found.totalRating += movie.rating;
        found.count += 1;
        found.avgRating = found.totalRating / found.count;
      } else {
        acc.push({ genre: g, totalRating: movie.rating, count: 1, avgRating: movie.rating });
      }
    });
    return acc;
  }, []);

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-bold mb-2">Average Ratings by Genre</h2>
      <ResponsiveContainer aspect={2}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="genre" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="avgRating" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      
    </div>
  );
};

export default Chart;
