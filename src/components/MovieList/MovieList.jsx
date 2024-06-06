import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css"

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id} className={css.moviesList}>
          <Link to={`/movies/${movie.id}`} state={location} className={css.movie}>
            {movie.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
}