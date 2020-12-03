import React from 'react';
import { Box, Text, Button, Image } from 'grommet';
import { Movie } from '../../typeDefs/MovieData';

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
  console.log('movieSearchResult :', movieSearchResult);
  return (
    <Box>
      {errorMessage ? <h1>{errorMessage}</h1> : null}
      {loading ? (
        <h1>Searching for matching films...</h1>
      ) : (
        <>
          {movieSearchResult?.map((movie) => {
            return (
              <Box
                direction='row-responsive'
                justify='center'
                align='center'
                pad='xlarge'
                background='dark-2'
                gap='medium'
                key={movie.imdbID}
              >
                <Box
                  pad='large'
                  align='center'
                  background={{ color: 'light-2', opacity: 'strong' }}
                  round
                  gap='small'
                >
                  <Box>
                    <Image src={movie.Poster} fit='contain' />
                  </Box>

                  <Text>{movie.Title}</Text>
                  <Text>{movie.Year}</Text>
                  <Text>{movie.Type}</Text>
                  <Button
                    label='Add To Watch List'
                    onClick={() => onMovieAdd(movie)}
                  />
                </Box>
              </Box>
            );
          })}
        </>
      )}
    </Box>
  );
};
