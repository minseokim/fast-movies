import React from 'react';
import { Box, Text, Anchor, Button, Image } from 'grommet';
import { Movie } from '../../typeDefs/MovieData';

interface MovieWidgetProps {
  movieSearchResult: Movie[];
  onMovieAdd: (movie: Movie) => void;
}

export const MovieWidget = ({
  movieSearchResult,
  onMovieAdd,
}: MovieWidgetProps) => {
  return (
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
  );
};
