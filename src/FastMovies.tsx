import React, { useState, useEffect } from 'react';
import { Box, Button, Heading, TextInput } from 'grommet';
import { Header, MovieWidget, SelectedMovieList } from './components';
import { Movie, MovieSearchResult } from './typeDefs/MovieData';

const API_KEY = `6f2ce34a`;

export const FastMovies = () => {
  const [loading, setLoading] = useState(true);
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [selectedMovieList, setSelectedMovieList] = useState([]);
  const [movieSearchResult, setMovieSearchResult] = useState([]);

  // TODO : Display sample list of movies on initial load(Maybe a random list, 'I'm feeling lucky' style)

  useEffect(() => {
    // TODO : Add Infinite Scrolling w/ Pagination
    const fetchApi = async () => {
      try {
        const movieResult = await fetch(
          `http://www.omdbapi.com/?s=guardians&page=1&apikey=6f2ce34a`
        );
        const movieResultJson = await movieResult.json();
        console.log('movieResultJson :', movieResultJson);
        const { Search } = movieResultJson as MovieSearchResult;
        setMovieSearchResult(Search);
      } catch {
        throw new Error('Movie failed to fetch');
      }
    };

    fetchApi();
  }, []);

  const handleMovieAdd = (movie: Movie) => {
    console.log('movie Added :', movie);
    setSelectedMovieList([...selectedMovieList, movie]);
  };

  return (
    <>
      <Header>Fast Films</Header>
      <Box>
        <TextInput placeholder='Search for a movie here...' />
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
