import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import _ from 'lodash';

import Table from '../Table/Table';

let paperStyle = {
  padding: 48,
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
    return <Table rowsData={this.state.rawData} />;
  }
}