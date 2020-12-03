import React from 'react';
import { Box, Text, Button, Image, Card, CardBody } from 'grommet';
import { Movie } from '../../typeDefs/MovieData';
import './MovieWidget.css';

interface MovieWidgetProps {
  movieSearchResult: Movie[];
  errorMessage: string;
  loading: boolean;
  onMovieAdd: (movie: Movie) => void;
}

export const MovieWidget = ({
  errorMessage,
  loading,
  movieSearchResult,
  onMovieAdd,
}: MovieWidgetProps) => {
  return (
    <Box pad='large'>
      <Box className='info-box'>
        {errorMessage ? (
          <Card pad='large' gap='large' background='status-error'>
            <CardBody>{errorMessage}</CardBody>
          </Card>
        ) : null}
        {loading ? (
          <Card
            pad='large'
            gap='large'
            background='
          status-unknown'
          >
            <CardBody>Loading...</CardBody>
          </Card>
        ) : null}
      </Box>
      {movieSearchResult?.map((movie) => {
        return (
          <Box
            pad='large'
            round
            background={{ color: 'light-2', opacity: 'strong' }}
            gap='small'
            key={movie.imdbID}
          >
            <Box>
              <Image src={movie.Poster} fit='contain' />
            </Box>

            <Text>{movie.Title}</Text>
            <Text>{movie.Year}</Text>
            <Button
              label='Add To Watch List'
              onClick={() => onMovieAdd(movie)}
            />
          </Box>
        );
      })}
    </Box>
  );
};
