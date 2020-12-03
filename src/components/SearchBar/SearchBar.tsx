import React from 'react';
import { Box, TextInput } from 'grommet';
import { Search } from 'grommet-icons';
import './SearchBar.css';
interface SearchBarProps {
  onMovieSearch: ({ target }: { target: HTMLInputElement }) => void;
}
export const SearchBar = ({ onMovieSearch }: SearchBarProps) => {
  return (
    <Box className='search-bar' background='light-1'>
      <Box>
        <TextInput
          icon={<Search />}
          placeholder='Type movie name here...'
          onChange={onMovieSearch}
        />
      </Box>
    </Box>
  );
};
