import React from 'react';
import './App.css';
import { Grommet } from 'grommet';
import { FastMovies } from './FastMovies';

const fastColors = {
  black: '#010206',
  white: '#FFFFFF',
  green: '#2A8F4C',
};

const theme = {
  global: {
    colors: {
      black: '#010206',
      white: '#FFFFFF',
      green: '#2A8F4C',
    },
    font: {
      family: 'Inter,sans-serif',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full>
      <FastMovies></FastMovies>
    </Grommet>
  );
}

export default App;
