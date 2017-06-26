import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

let paperStyle = {
  padding: 48,
};

export default class ChallengeOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstString: 'super',
      secondString: '54321',
      outputString: null,
    };

    this.combineStrings = this.combineStrings.bind(this);
  }

  handleChangeFirstString = (event) => {
    this.setState({
      firstString: event.target.value,
    });
  };

  handleChangeSecondString = (event) => {
    this.setState({
      secondString: event.target.value,
    });
  };

  combineStrings = () => {
    let a = this.state.firstString;
    let b = this.state.secondString;
    let output = '';
    if(a && b) {
      output += a
          .split('')
          .map((l, i) => l + b.slice(i, i+1))
          .join('');
      if(b.length > a.length) {
        output += b.slice(a.length);
      }
    }
    return output;
  }

  render() {
    return (

      <div>
        <Paper zDepth={1} style={paperStyle}>
          <p style={{width: 300}}>Write a function that accepts two strings and outputs an interleaved result made up of alternating letters from each input string.</p>
          <p style={{width: 300}}>For example, if the input strings are "super" and "54321", then the output would be "s5u4p3e2r1".</p>
        </Paper>
        <Paper zDepth={1} style={paperStyle}>
          <TextField
            hintText="type 1st string here"
            value={this.state.firstString}
            onChange={this.handleChangeFirstString.bind(this)}
            floatingLabelText="First String"
            floatingLabelFixed={true}
          /><br />
        </Paper>
        <Paper zDepth={1} style={paperStyle}>
          <TextField
            hintText="type 2nd string here"
            value={this.state.secondString}
            onChange={this.handleChangeSecondString.bind(this)}
            floatingLabelText="Second String"
            floatingLabelFixed={true}
          /><br />
        </Paper>
        <Paper zDepth={1} style={paperStyle}>
          {this.combineStrings()}
        </Paper>
      </div>
    );
  }
}