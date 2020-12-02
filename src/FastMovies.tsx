import React, { useState, useEffect, useCallback } from 'react';
import { Box, Button, Heading, TextInput } from 'grommet';
import { Header, MovieWidget, SelectedMovieList } from './components';
import { Movie, MovieSearchResult } from './typeDefs/MovieData';
import debounce from 'lodash.debounce';

const API_KEY = `6f2ce34a`;

const fetchMovies = async (searchQuery: string) => {
  try {
    const movieResult = await fetch(
      `http://www.omdbapi.com/?s=${searchQuery}&page=1&apikey=6f2ce34a`
    );
    const movieResultJson = await movieResult.json();
    const { Search } = movieResultJson as MovieSearchResult;
    return Search;
  } catch {
    throw new Error('Movie failed to fetch');
  }
};
export const FastMovies = () => {
  const [loading, setLoading] = useState(true);
  const [selectedMovieList, setSelectedMovieList] = useState([]);
  const [movieSearchResult, setMovieSearchResult] = useState([]);

  const debouncedMovieSearch = debounce(async (searchQuery: string) => {
    setMovieSearchResult(await fetchMovies(searchQuery));
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
        <MovieWidget
          movieSearchResult={movieSearchResult}
          onMovieAdd={handleMovieAdd}
        />
      </Box>
      <SelectedMovieList selectedMovieList={selectedMovieList} />
    </>
  );
};
