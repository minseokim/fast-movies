import React from 'react';
import './App.css';
import { Grommet, Box } from 'grommet';

const fastColors = {
  black: '#010206',
  white: '#FFFFFF',
  green: '#2A8F4C',
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='black'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

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
    <Grommet theme={theme}>
      <AppBar>Fast Films</AppBar>
    </Grommet>
  );
}

export default App;
