import React, { Component } from 'react';
import { Box, Button, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '100' }}
    {...props}
  />
);

class App extends Component {
  state = {
    showSidebar: false,
  }
  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
        <Box fill>
          <AppBar>
            <Heading level='3' margin='none'>My App</Heading>
            <Button
              icon={<Notification />}
              onClick={() => this.setState({ showSidebar: !this.state.showSidebar })}
            />
          </AppBar>
          <Box direction='row' flex>
            <Box flex align='center' justify='center'>
              app body
            </Box>
            {showSidebar && (
              <Box
                width='medium'
                background='light-2'
                elevation='small'
                align='center'
                justify='center'
              >
                sidebar
              </Box>
            )}
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default App;
