import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzRhY2JjNmQ4ZDc5MWIwOTljZGJjZjlhNjc4OTI1YSIsInN1YiI6IjY2NWNhZTA1M2NjZDBmODljODQ4MjQ5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4YJUgjyEGPXo0o5oM03FeM3xoAPXe7XjKX1axQJAQtk",
  },
};

export const getMovies = async () => {
  const response = await axios.get("/trending/movie/day", options);
  return response.data;
};

export const getSearchMovies = async (query) => {
  const response = await axios.get("/search/movie", {
    params: {
      query: query,
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzRhY2JjNmQ4ZDc5MWIwOTljZGJjZjlhNjc4OTI1YSIsInN1YiI6IjY2NWNhZTA1M2NjZDBmODljODQ4MjQ5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4YJUgjyEGPXo0o5oM03FeM3xoAPXe7XjKX1axQJAQtk",
    },
  });
  return response.data.results;
};

export const getDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, options);
  return response.data;
};

export const getCastMovie = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`, options);
  return response.data.cast;
};

export const getReviewsMovie = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, options);
  return response.data.results;
};
