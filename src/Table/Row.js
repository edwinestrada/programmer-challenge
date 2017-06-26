import React from 'react';
import './Row.css';
import Paper from 'material-ui/Paper';

export default (props) => {
  return (
    <Paper zDepth={1} className="table-row">
      <div className="table-cell with-padding">{props.row[0]}</div>
      <div className="table-cell with-padding">{props.row[1]}</div>
      <div className="table-cell with-padding">{props.row[2]}</div>
    </Paper>
  );
};