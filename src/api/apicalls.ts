import {API_KEY, API_READ_ACCESS_TOKEN} from '@env';

// The apiKey constant holds the API key for The Movie Database (TMDB) API
const apiKey = API_KEY;

export const baseImagePath = (size: string, path: string) => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

// nowPlayingMov is a constant that holds the URL for fetching now playing movies from TMDB API
export const nowPlayingMovies: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

// upcomingMovies is a constant that holds the URL for fetching upcoming movies from TMDB API
export const upcomingMovies: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;

// popularMovies is a constant that holds the URL for fetching popular movies from TMDB API
export const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

// searchMovies is a function that returns the URL for searching movies with a given keyword in TMDB API
export const searchMovies = (keyword: string) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`;
};

// movieDetails is a function that returns the URL for fetching details of a movie with a given movie_id from TMDB API
export const movieDetails = (movie_id: number) => {
  return `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`;
};

// movieCastDetails is a function that returns the URL for fetching cast details of a movie with a given movie_id from TMDB API
export const movieCastDetails = (movie_id: number) => {
  return `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${apiKey}`;
};
