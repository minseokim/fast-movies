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
    <Box pad='large'>
      {errorMessage ? <h1>{errorMessage}</h1> : null}
      {loading ? (
        <h1>Searching for matching films...</h1>
      ) : (
        <>
          {movieSearchResult?.map((movie) => {
            return (
              <Box
                pad='large'
                round
                //   align='center'
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
        </>
      )}
    </Box>
  );
};

// <Box pad="large">
// <Grid gap="medium" rows="small" columns={{ count: 'fit', size: 'small' }}>
//   {data.map(value => (
//     <Card background={value.color} key={value.message}>
//       <CardBody pad="small">
//         <Identifier
//           pad="small"
//           title={value.title}
//           subTitle={value.subTitle}
//           size="small"
//           align="start"
//         >
//           {value.icon}
//         </Identifier>
//       </CardBody>
//       <CardFooter pad={{ horizontal: 'medium', vertical: 'small' }}>
//         <Text size="xsmall">{value.message}</Text>
//       </CardFooter>
//     </Card>
//   ))}
// </Grid>
// </Box>
