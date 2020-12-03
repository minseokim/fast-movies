import React, { useState, useEffect, useCallback } from 'react';
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
  const [errorMessage, setErrorMessage] = useState(null);
  const [selectedMovieList, setSelectedMovieList] = useState([]);
  const [movieSearchResult, setMovieSearchResult] = useState([]);

  const debouncedMovieSearch = debounce((searchQuery: string) => {
    setLoading(true);
    setErrorMessage(null);
    fetchMovies(searchQuery)
      .then((movieList) => {
        setMovieSearchResult(movieList);
        setLoading(false);
      })
      .catch((err: Error) => {
        setLoading(false);
        setErrorMessage(err.message);
      });
  }, 1500);
  // TODO : Display sample list of movies on initial load(Maybe a random list, 'I'm feeling lucky' style)

  const handleMovieAdd = (movie: Movie) => {
    console.log('movie Added :', movie);
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
      <Box>
        {errorMessage ? <h1>{errorMessage}</h1> : null}
        {loading ? (
          <h1>Searching for matching films...</h1>
        ) : (
          <MovieWidget
            movieSearchResult={movieSearchResult}
            onMovieAdd={handleMovieAdd}
          />
        )}
      </Box>
      <SelectedMovieList selectedMovieList={selectedMovieList} />
    </>
  );
};
