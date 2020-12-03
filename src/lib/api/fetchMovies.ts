import { MovieSearchResult } from '../../typeDefs/MovieData';

export const fetchMovies = async (searchQuery: string) => {
  const OMDBApiUrl = `https://www.omdbapi.com/?s=${searchQuery}&apikey=6f2ce34a`;

  const movieResult = await fetch(OMDBApiUrl);
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
