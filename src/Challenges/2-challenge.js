import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

let paperStyle = {
  padding: 48,
};

export default class ChallengeTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstString: 'swordfishtrombonesbabyfishmouth',
      secondString: 'fish',
      outputString: null,
    };
  }

  componentDidMount() {
    this.setState({
      outputString: this.stringContainsWord(this.state.firstString, this.state.secondString),
    });
  }

  handleChangeFirstString = (event) => {
    this.setState({
      firstString: event.target.value,
      outputString: this.stringContainsWord(event.target.value, this.state.secondString),
    });
  };

  handleChangeSecondString = (event) => {
    this.setState({
      secondString: event.target.value,
      outputString: this.stringContainsWord(this.state.firstString, event.target.value),
    });
  };

  stringContainsWord(s, word, wordCount = 0) {
    if(!word.length) return 'Need a string to look for.';
    if(s.indexOf(word) >= 0) {
      let foundAtIndex = s.search(word);
      let shorterString = s.slice(foundAtIndex + word.length);
      return this.stringContainsWord(shorterString, word, ++wordCount);
    } else {
      return wordCount;
    }
  }

  render() {
    return (

      <div>
        <Paper zDepth={1} style={paperStyle}>
          <p style={{width: 300}}>Write a method that takes two strings and determines how many times the 2nd string occurs in the first.</p>
          <p style={{width: 300}}>For example, if the input strings are "swordfishtrombonesbabyfishmouth" and "fish", then the output would be 2.</p>
        </Paper>
        <Paper zDepth={1} style={paperStyle}>
          <TextField
            hintText="type string to search here"
            value={this.state.firstString}
            onChange={this.handleChangeFirstString.bind(this)}
            floatingLabelText="String you'd like to search"
            floatingLabelFixed={true}
          /><br />
        </Paper>
        <Paper zDepth={1} style={paperStyle}>
          <TextField
            hintText="type string to search for"
            value={this.state.secondString}
            onChange={this.handleChangeSecondString.bind(this)}
            floatingLabelText="String you'd like to find"
            floatingLabelFixed={true}
          /><br />
        </Paper>
        <Paper zDepth={1} style={paperStyle}>
          {this.state.outputString}
        </Paper>
      </div>
    );
  }
}