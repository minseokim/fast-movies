import React, { useState, useEffect } from 'react';
import { Box, TextInput } from 'grommet';
import { Header } from '../Header';

const API_KEY = `6f2ce34a`;

export const FastMovies = (props) => {
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [userSelectedMovies, setUserSelectedMovies] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const movieResult = await fetch(
          `http://www.omdbapi.com/?t=the+terminal&apikey=6f2ce34a`
        );
        const movieResultJson = await movieResult.json();

        console.log('movieResltJson :', movieResultJson);
      } catch {
        throw new Error('Movie failed to fetch');
      }
    };

    fetchApi();
  });

  // TODO : Display sample list of movies on initial load

  return (
    <>
      <Header>Fast Films</Header>
      <Box>
        <TextInput />
      </Box>
    </>
  );
};
