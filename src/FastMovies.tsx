import React, { useState } from 'react';
import { Box, Button, Heading, TextInput } from 'grommet';
import { Header, MovieWidget, SelectedMovieList } from './components';
import { Movie, MovieSearchResult } from './typeDefs/MovieData';
import debounce from 'lodash.debounce';

const API_KEY = `6f2ce34a`;

const fetchMovies = async (searchQuery: string) => {
  const movieResult = await fetch(
    `http://www.omdbapi.com/?s=${searchQuery}&page=1&apikey=6f2ce34a`
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
export const FastMovies = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedMovieList, setSelectedMovieList] = useState<Movie[]>([]);
  const [movieSearchResult, setMovieSearchResult] = useState<Movie[]>([]);

  const debouncedMovieSearch = debounce((searchQuery: string) => {
    setLoading(true);
    setErrorMessage(null);

    if (searchQuery === '') {
      setLoading(false);
      setMovieSearchResult([]);
      return;
    }

    fetchMovies(searchQuery)
      .then((movieList) => {
        setMovieSearchResult(movieList);
        setLoading(false);
      })
      .catch((err: Error) => {
        setLoading(false);
        setMovieSearchResult([]);
        setErrorMessage(err.message);
      });
  }, 1500);
  // TODO : Display sample list of movies on initial load(Maybe a random list, 'I'm feeling lucky' style)

  const handleMovieAdd = (movie: Movie) => {
    if (selectedMovieList.includes(movie)) {
      setErrorMessage(`Movie ${movie.Title} is already added!`);
      return;
    }

    setSelectedMovieList([...selectedMovieList, movie]);
  };

  const handleMovieSearch = async ({
    target,
  }: {
    target: HTMLInputElement;
  }) => {
    debouncedMovieSearch(target.value);
  };

  return (
    <>
      <Header>Fast Films</Header>
      <Box>
        <TextInput
          placeholder='Search for a movie here...'
          onChange={handleMovieSearch}
        />
      </Box>
      <Box>
        <Button>Checkout</Button>
      </Box>
      <MovieWidget
        errorMessage={errorMessage}
        loading={loading}
        movieSearchResult={movieSearchResult}
        onMovieAdd={handleMovieAdd}
      />
      <SelectedMovieList selectedMovieList={selectedMovieList} />
    </>
  );
};
