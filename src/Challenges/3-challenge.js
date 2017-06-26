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
      <pre style={{fontSize: 13}}>
        SELECT Id, Summary, NewStatus<br/>
        FROM Tickets<br/>
        INNER JOIN (<br/>
        <span style={{paddingLeft: 16}}>
          SELECT TicketId, NewStatus, MAX(Timestamp) as maxTimestamp<br/>
        </span>
        <span style={{paddingLeft: 16}}>
          FROM StatusChanges<br/>
        </span>
        <span style={{paddingLeft: 16}}>
          GROUP BY TicketId<br/>
        </span>
        ) t ON Tickets.Id=t.TicketId<br/>
        WHERE NOT NewStatus='Closed';<br/>
      </pre>
    </Paper>
  </div>
);