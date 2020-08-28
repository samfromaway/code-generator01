import React from 'react';
import Paper01 from './../Paper01';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ReactStateHooksList from './ReactStateHooksList';

const ReactStateInput = (props) => {
  return (
    <Paper01 title="React State Hooks">
      <Grid container item xs={12}>
        <TextField
          size="small"
          variant="outlined"
          id="variable"
          label="Variable"
          onChange={(e) => props.setInput(e.target.value)}
          value={props.input}
          helperText="In camelCase 🐫 e.g. myUser"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              props.handleAddItems();
            }
          }}
        />

        <Button
          style={{ marginTop: 5, marginLeft: 20, height: 30 }}
          variant="contained"
          size="small"
          color="primary"
          onClick={props.handleAddItems}
        >
          Add
        </Button>
        <Button
          style={{ marginTop: 5, marginLeft: 10, height: 30 }}
          variant="outlined"
          size="small"
          onClick={props.handleClear}
        >
          Clear All
        </Button>
      </Grid>
      <Grid container item xs={12}>
        <ReactStateHooksList
          items={props.items}
          handleDelete={props.handleDelete}
        />
      </Grid>
    </Paper01>
  );
};

export default ReactStateInput;
