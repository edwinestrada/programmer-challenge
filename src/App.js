import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import customTheme from './custom-material-design-theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
        <h1>Programming Challenge</h1>
      </MuiThemeProvider>
    );
  }
}

export default App;
