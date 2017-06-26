import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

let paperStyle = {
  padding: 48,
};

export default () => (
  <div>
    <Paper zDepth={1} style={paperStyle}>
      <p style={{width: 300}}>
        We're writing a "Current Open Tickets" report for a ticketing system that tracks Tickets and their Status changes in two separate tables.
      </p>
      <p style={{width: 300}}>
        Write a SQL statement using the two tables below that returns every open ticket (latest status is not Closed) from the "Ticket" table with its current status (status with the latest timestamp) from the "StatusChange" table.
      </p>
    </Paper>
    <Paper zDepth={1} style={paperStyle}>
      <p style={{width: 300}}>
        SELECT Id, Summary, NewStatus<br/>
        FROM Tickets<br/>
        INNER JOIN (<br/>
          SELECT TicketId, NewStatus, MAX(Timestamp) as maxTimestamp<br/>
          FROM StatusChanges<br/>
          GROUP BY TicketId<br/>
        ) tm ON Tickets.Id=tm.TicketId<br/>
        WHERE NOT NewStatus='Closed';<br/>
      </p>
    </Paper>
  </div>
);