import React, { Component } from 'react';
import {
  Box,
  Button,
  Grommet,
  Layer,
} from 'grommet';

class App extends Component {
  state = { showSidebar: true }
  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet>
        <Box>
          <Button
            label='Toggle Sidebar'
            type='submit'
            onClick={() => this.setState({ showSidebar: !this.state.showSidebar })}
          />
        </Box>
        <Box>
          {showSidebar && (
            <Layer position='right' full='vertical' modal={false}>
              <Box
                fill
                background='light-2'
                align='center'
                justify='center'
              >
                Sidebar content
                <Button
                  type='submit' /* DE1872 */
                  label='button'
                />
              </Box>
            </Layer>
          )}
        </Box>
      </Grommet>
    );
  }
}

export default App;
