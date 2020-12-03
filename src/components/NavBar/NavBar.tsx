import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Box, ResponsiveContext, Menu, Nav, Header, Heading } from 'grommet';
import { Cart, Ticket } from 'grommet-icons';

export const NavBar = (props) => {
  const history = useHistory();

  return (
    <Header background='dark-1' pad='medium'>
      <Box direction='row' align='center' gap='small'>
        <Heading size='small'>Fast Films</Heading>
      </Box>
      <ResponsiveContext.Consumer>
        {(responsive) =>
          responsive === 'small' ? (
            <Menu
              label='Menu'
              items={[
                {
                  icon: 'Checkout',
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
