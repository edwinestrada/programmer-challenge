import React from 'react';
import './Table.css';
import Row from './Row';

export default class Table extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {};
  }

  renderRows = (rowsData) => {
    return rowsData.map((row, index) => <Row key={index} row={row} />);
  };

  render() {
    return (
      <div className="table-container">
        <div className="table-header">
          <div className="table-cell with-padding">Year</div>
          <div className="table-cell with-padding">Sales</div>
          <div className="table-cell with-padding">Expenses</div>
        </div>
        <div className="table-body">{this.renderRows(this.props.rowsData)}</div>
      </div>
    );
  }
};