import React, { useState, useEffect } from 'react';
import { Box, Heading, TextInput } from 'grommet';
import { Header, MovieWidget } from './components';
import { MovieSearchResult } from './typeDefs/MovieData';

const API_KEY = `6f2ce34a`;

export const FastMovies = () => {
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [userSelectedMovies, setUserSelectedMovies] = useState(null);
  const [movieSearchResult, setMovieSearchResult] = useState(null);

  useEffect(() => {
    // TODO : Add Infinite Scrolling w/ Pagination
    const fetchApi = async () => {
      try {
        const movieResult = await fetch(
          `http://www.omdbapi.com/?s=guardians&page=1&apikey=6f2ce34a`
        );
        const movieResultJson = (await movieResult.json()) as MovieSearchResult;

        const { Search } = movieResultJson;
        setMovieSearchResult(Search);
      } catch {
        throw new Error('Movie failed to fetch');
      }
    };

    fetchApi();
  }, []);

  // TODO : Display sample list of movies on initial load(Maybe a random list, 'I'm feeling lucky' style)

  return (
    <>
      <Header>Fast Films</Header>
      <Box>
        <TextInput />
      </Box>
      <Box>
        <MovieWidget movieSearchResult={movieSearchResult} />
      </Box>
      <Box>
        <Heading level={3}>Selected Movies</Heading>
      </Box>
    </>
  );
};
