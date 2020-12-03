import { MovieSearchResult } from '../../typeDefs/MovieData';

export const fetchMovies = async (searchQuery: string) => {
  const movieResult = await fetch(
    `http://www.omdbapi.com/?s=${searchQuery}&apikey=${process.env.REACT_APP_API_KEY}`
  );
  const movieResultJson = await movieResult.json();
  const {
    Search,
    Error: _Error,
    Response,
  } = movieResultJson as MovieSearchResult;
  if (Response === 'False' && _Error) {
    throw new Error(_Error);
  }
  return Search;
};
