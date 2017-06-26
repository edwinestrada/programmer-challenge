import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import customTheme from './custom-material-design-theme';

import './App.css';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MergeIcon from 'material-ui/svg-icons/communication/call-merge';
import SearchIcon from 'material-ui/svg-icons/content/text-format';
import CodeIcon from 'material-ui/svg-icons/action/code';
import ListIcon from 'material-ui/svg-icons/action/list';

import ChallengeOne from './Challenges/1-challenge';
import ChallengeTwo from './Challenges/2-challenge';
import ChallengeThree from './Challenges/3-challenge';
import ChallengeFour from './Challenges/4-challenge';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      tabOpen: 1,
      content: null
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  componentWillMount() {
    injectTapEventPlugin();
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleMenuClick(tab) {
    this.setState({tabOpen: tab});
    this.handleToggle();
  }

  renderContent() {
    switch (this.state.tabOpen) {
      case 1:
        return (
          <div>
            <h2 className='article-title'>Combining two strings</h2>
            <div className='left-col'>
              <p>Write a function that accepts two strings and outputs an interleaved result made up of alternating letters from each input string.</p>
              <p>For example, if the input strings are "super" and "54321", then the output would be "s5u4p3e2r1".</p>
            </div>
            <div className='right-col'>
              <ChallengeOne />
            </div>
          </div>
        );
      case 2:
        return (
          <ChallengeTwo />
        );
      case 3:
        return (
          <ChallengeThree />
        );
      case 4:
        return (
          <Paper zDepth={1}>
            <ChallengeFour />
          </Paper>
        );
      default:
        return <h1>Pick one</h1>;
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
        <div className="App" style={{height: '100vh'}}>
          <AppBar
            title={this.state.tabOpen ? `Challenge #${this.state.tabOpen}` : "Programming Challenges"}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            style={{position: 'fixed'}}
            onLeftIconButtonTouchTap={this.handleToggle}
          />
          <Drawer open={this.state.open} containerStyle={{top: 64}}>
            <MenuItem primaryText='Challenge #1' leftIcon={<MergeIcon />} onTouchTap={(e) => this.handleMenuClick(1)} />
            <MenuItem primaryText='Challenge #2' leftIcon={<SearchIcon />} onTouchTap={(e) => this.handleMenuClick(2)} />
            <MenuItem primaryText='Challenge #3' leftIcon={<CodeIcon />} onTouchTap={(e) => this.handleMenuClick(3)} />
            <MenuItem primaryText='Challenge #4' leftIcon={<ListIcon />} onTouchTap={(e) => this.handleMenuClick(4)} />
          </Drawer>
          <section>{this.renderContent()}</section>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
