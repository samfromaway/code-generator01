import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { TYPES } from './../../constants';
import Paper01 from './../Paper01';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ConditionalValidationKeyInput from './ConditionalValidationKeyInput';

const useStyles = makeStyles((theme) => ({
  formInput: {
    width: '100%',
    marginBottom: 12,
  },
  divider: { marginTop: 10, marginBottom: 10 },
}));

const InputValidationKey = (props) => {
  const classes = useStyles();

  return (
    <Paper01 title="Add Keys">
      <TextField
        variant="outlined"
        size="small"
        className={classes.formInput}
        label="Variable*"
        onChange={(e) => props.setVariable(e.target.value)}
        value={props.variable}
        helperText="In camelCase 🐫"
      />
      <Divider className={classes.divider} />
      <Typography style={{ margin: '12px 0 8px 0' }} variant="subtitle1">
        Add Keys
      </Typography>
      <TextField
        variant="outlined"
        size="small"
        className={classes.formInput}
        label="Key*"
        onChange={(e) => props.setMyKey(e.target.value)}
        value={props.myKey}
        helperText="In camelCase 🐫"
      />
      <FormControl
        variant="outlined"
        size="small"
        className={classes.formInput}
      >
        <InputLabel>Type*</InputLabel>
        <Select
          label="type*"
          labelId="type"
          value={props.type}
          onChange={(e) => props.setType(e.target.value)}
        >
          <MenuItem value="">Not Specified</MenuItem>
          {TYPES.map((e) => (
            <MenuItem key={e} value={e}>
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl
        variant="outlined"
        size="small"
        className={classes.formInput}
      >
        <FormControlLabel
          disabled={props.type !== 'string'}
          control={
            <Checkbox
              checked={props.notEmpty}
              onChange={(e) => props.setNotEmpty(e.target.checked)}
              name="isRequired"
              color="primary"
            />
          }
          label="Not Empty"
        />
      </FormControl>
      <FormControl
        variant="outlined"
        size="small"
        className={classes.formInput}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={props.isRequired}
              onChange={(e) => props.setIsRequired(e.target.checked)}
              name="isRequired"
              color="primary"
            />
          }
          label="Required Key"
        />
      </FormControl>
      <ConditionalValidationKeyInput {...props} />
      <Grid
        item
        xs={12}
        style={{
          display: 'flex',
          paddingBottom: 10,
          justifyContent: 'center',
        }}
      >
        <Button
          style={{ margin: 10 }}
          variant="contained"
          size="small"
          color="primary"
          onClick={props.handleAddItems}
        >
          Add
        </Button>

        <Button
          style={{ margin: 10 }}
          variant="outlined"
          size="small"
          onClick={props.clearInput}
        >
          Clear
        </Button>
      </Grid>
    </Paper01>
  );
};

export default InputValidationKey;
// change
