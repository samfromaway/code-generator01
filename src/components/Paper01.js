import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Paper01 = (props) => {
  return (
    <Paper>
      <Typography style={{ padding: '10px 15px 15px 15px' }} variant="h5">
        {props.title}
      </Typography>
      <Container>{props.children}</Container>
    </Paper>
  );
};

export default Paper01;
