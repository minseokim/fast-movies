import React from 'react';
import { Box, TextInput, Heading } from 'grommet';
import { Search } from 'grommet-icons';
interface SearchBarProps {
  onMovieSearch: ({ target }: { target: HTMLInputElement }) => void;
}
export const SearchBar = ({ onMovieSearch }: SearchBarProps) => {
  return (
    <Box>
      <Box pad='medium'>
        <Heading level='3' size='medium'>
          Look for your favorite films
        </Heading>
      </Box>

      <TextInput
        icon={<Search />}
        placeholder='Type movie name here...'
        onChange={onMovieSearch}
      />
    </Box>
  );
};
