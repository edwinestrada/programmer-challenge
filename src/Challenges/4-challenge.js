import React from 'react';
import Table from '../Table/Table';
import Paper from 'material-ui/Paper';

let paperStyle = {
  padding: 48,
  float: 'left',
  width: '100%',
};

var rawData = [
  /* year, sales, expenses */
  ['2004', 1000, 400],
  ['2005', 1170, 460],
  ['2006', 660, 1120],
  ['2007', 1030, 540]
];

export default class ChallengeFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rawData: null,
    };
  }

  componentWillMount() {
    this.setState({rawData: rawData});
  }

  render() {
    return (
      <Paper zDepth={1} style={paperStyle}>
        <Table rowsData={this.state.rawData} />
      </Paper>
    );
  }
}