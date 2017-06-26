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
          <div>
            <h2 className='article-title'>Counting strings in a string</h2>
            <div className='left-col'>
              <p>Write a method that takes two strings and determines how many times the 2nd string occurs in the first.</p>
              <p>For example, if the input strings are "swordfishtrombonesbabyfishmouth" and "fish", then the output would be 2.</p>
            </div>
            <div className='right-col'>
              <ChallengeTwo />
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className='article-title'>Getting tickets with SQL</h2>
            <div className='left-col'>
              <p>
                We're writing a "Current Open Tickets" report for a ticketing system that tracks Tickets and their Status changes in two separate tables.
              </p>
              <p>
                Write a SQL statement using the two tables below that returns every open ticket (latest status is not Closed) from the "Ticket" table with its current status (status with the latest timestamp) from the "StatusChange" table.
              </p>
            </div>
            <div className='right-col'>
              <ChallengeThree />
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className='article-title'>Table from an array of arrays</h2>
            <div className='left-col'>
              <p>Create a snippet of HTML and javascript to display a column chart of the values below.</p>
              <p>Feel free to use external charting libraries.</p>
              <p>
                var rawData = [<br />
                <span style={{paddingLeft: 16}}>
                /* year, sales, expenses */<br />
                </span>
                <span style={{paddingLeft: 16}}>
                ['2004', 1000, 400],<br />
                </span>
                <span style={{paddingLeft: 16}}>
                ['2005', 1170, 460],<br />
                </span>
                <span style={{paddingLeft: 16}}>
                ['2006', 660, 1120],<br />
                </span>
                <span style={{paddingLeft: 16}}>
                ['2007', 1030, 540]<br />
                </span>
              ];</p>
            </div>
            <div className='right-col'>
              <ChallengeFour />
            </div>
          </div>
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
