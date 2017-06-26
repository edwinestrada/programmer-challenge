import React from 'react';
import './Table.css';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class MyTable extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {};
  }

  renderRows = (rowsData) => {
    return rowsData.map((row, index) => {
      return (
        <TableRow key={index}>
          <TableRowColumn>{row[0]}</TableRowColumn>
          <TableRowColumn>{row[1]}</TableRowColumn>
          <TableRowColumn>{row[2]}</TableRowColumn>
        </TableRow>
      );
    });
  };

  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Year</TableHeaderColumn>
            <TableHeaderColumn>Sales</TableHeaderColumn>
            <TableHeaderColumn>Expenses</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>{this.renderRows(this.props.rowsData)}</TableBody>
      </Table>
    );
  }
};