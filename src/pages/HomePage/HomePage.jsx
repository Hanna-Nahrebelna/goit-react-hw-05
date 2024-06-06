import { useEffect, useState, lazy } from "react";
import { getMovies } from "../../movie-api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "./HomePage.module.css";

const MovieList = lazy(() => import("../../components/MovieList/MovieList"));

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoader(true);
        setIsError(false);
        const data = await getMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <h1 className={css.text}>Trending today</h1>
      {isLoader && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} />}
      {isError && <ErrorMessage />}
    </>
  );
}
