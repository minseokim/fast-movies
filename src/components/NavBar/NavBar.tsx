import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Box, ResponsiveContext, Menu, Nav, Header, Heading } from 'grommet';
import { Cart, Ticket } from 'grommet-icons';
import './NavBar.css';

interface NavBarProps {
  selectedMovieCount: number;
}

export const NavBar = ({ selectedMovieCount }: NavBarProps) => {
  const history = useHistory();
  return (
    <Header background='dark-1' pad='medium' className='nav-bar'>
      <Box direction='row' align='center' gap='small'>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Heading size='small'>Fast Films</Heading>
        </Link>
      </Box>
      <ResponsiveContext.Consumer>
        {(responsive) =>
          responsive === 'small' ? (
            <Menu
              label='Menu'
              items={[
                {
                  label:
                    selectedMovieCount === 0
                      ? 'Checkout'
                      : `${selectedMovieCount} Movies Selected`,
                  onClick: () => {
                    history.push('/checkout');
                  },
                },
                {
                  label: 'Movies',
                  onClick: () => {
                    history.push('/');
                  },
                },
              ]}
            />
          ) : (
            <Nav direction='row'>
              <Link to='/checkout'>
                <Cart size='large' />
              </Link>
              <Link to='/'>
                <Ticket size='large' />
              </Link>
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  );
};
