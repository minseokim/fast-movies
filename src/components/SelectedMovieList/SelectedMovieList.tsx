import React from 'react';
import { Box, Heading, Text } from 'grommet';
import { Movie } from '../../typeDefs/MovieData';

interface SelectedMovieListProps {
  selectedMovieList: Movie[];
}
export const SelectedMovieList = ({
  selectedMovieList,
}: SelectedMovieListProps) => {
  return (
    <Box>
      <Heading level={3}>Selected Movies</Heading>

      {selectedMovieList?.map((movie) => {
        return (
          <Box key={movie.Title}>
            <Text>{movie.Title}</Text>
            <Text>{movie.Year}</Text>
          </Box>
        );
      })}
    </Box>
  );
};
