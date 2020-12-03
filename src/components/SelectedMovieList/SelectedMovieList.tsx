import React from 'react';
import { Box, Heading, Text, CardBody, Card, List } from 'grommet';
import { Movie } from '../../typeDefs/MovieData';
import './SelectedMovieList.css';
interface SelectedMovieListProps {
  selectedMovieList: Movie[];
}
export const SelectedMovieList = ({
  selectedMovieList,
}: SelectedMovieListProps) => {
  return (
    <Box className='selected-movie-list'>
      <Heading>Selected Movies</Heading>
      <List data={selectedMovieList} pad='medium'>
        {(movie: Movie) => {
          return (
            <Card key={movie.Title}>
              <CardBody>
                <Text>{movie.Title}</Text>
                <Text>{movie.Year}</Text>
              </CardBody>
            </Card>
          );
        }}
      </List>
    </Box>
  );
};
