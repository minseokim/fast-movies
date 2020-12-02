import React from 'react';
import { Box, Text, Anchor, Button, Image } from 'grommet';
import { Movie } from '../../typeDefs/MovieData';

export const MovieWidget = ({
  movieSearchResult,
}: {
  movieSearchResult: Movie[];
}) => {
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
              <Text>{movie.Director}</Text>
              <Text>{movie.Genre}</Text>
              <Text>{movie.Rated}</Text>
              <Button label='Add To Watch List' onClick={() => {}} />
            </Box>
          </Box>
        );
      })}
    </>
  );
};
