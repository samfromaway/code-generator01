import React from 'react';
import Paper01 from './../Paper01';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  formInput: {
    width: '100%',
    marginBottom: 10,
  },
}));

const InputValidationGeneral = (props) => {
  const classes = useStyles();

  return (
    <Paper01 title="Firestore Settings">
      <Grid item xs={12} style={{ marginBottom: 10 }}>
        <FormControl className={classes.formInput}>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.onlyOwnerGetAccess}
                onChange={(e) => props.setOnlyOwnerGetAccess(e.target.checked)}
                name="isRequired"
                color="primary"
              />
            }
            label="Only Data Owner Has Access"
          />
        </FormControl>
        <TextField
          variant="outlined"
          size="small"
          className={classes.formInput}
          label="Owner Selector"
          onChange={(e) => props.setOwnerSelector(e.target.value)}
          value={props.ownerSelector}
          helperText="e.g. owner or createdBy"
          disabled={!props.onlyOwnerGetAccess}
        />
      </Grid>
      <Divider style={{ margin: '10px 0 25px 0' }} />
      <Grid item xs={12} style={{ paddingBottom: 20 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend" style={{ paddingBottom: 8 }}>
            Only Signed In User Is Allowed To
          </FormLabel>
          <FormGroup>
            {props.actions.map((action) => (
              <FormControlLabel
                key={action.title}
                label={action.title}
                control={
                  <Switch
                    checked={action.checked}
                    onChange={props.handleActionsChange}
                    name={action.title}
                  />
                }
              />
            ))}
          </FormGroup>
        </FormControl>
      </Grid>
    </Paper01>
  );
};

export default InputValidationGeneral;
