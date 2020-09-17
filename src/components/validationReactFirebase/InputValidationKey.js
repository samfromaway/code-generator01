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
import { TYPES, RANGE_TYPES, REDUCED_RANGE_TYPES } from './../../constants';
import Paper01 from './../Paper01';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  formInput: {
    width: '100%',
    marginBottom: 12,
  },
  divider: { marginTop: 10, marginBottom: 10 },
}));

const InputValidationKey = (props) => {
  const classes = useStyles();

  const typesWithOptions = () => {
    if (
      props.type === 'string' ||
      props.type === 'number' ||
      props.type === 'boolean'
    ) {
      return true;
    }
  };

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
          disabled={
            !props.type ||
            props.type === 'boolean' ||
            props.type === 'object' ||
            props.type === 'array'
          }
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
      <>
        <FormControl
          variant="outlined"
          size="small"
          className={classes.formInput}
        >
          <InputLabel disabled={!typesWithOptions()}>Condition</InputLabel>
          <Select
            label="Condition"
            labelId="rangeType"
            value={props.rangeType}
            onChange={(e) => props.setRangeType(e.target.value)}
            disabled={!typesWithOptions()}
          >
            <MenuItem value="">No Condition</MenuItem>
            {props.type === 'number' &&
              RANGE_TYPES.map((e) => (
                <MenuItem key={e.value} value={e.value}>
                  {e.label}
                </MenuItem>
              ))}
            {props.type !== 'number' &&
              REDUCED_RANGE_TYPES.map((e) => (
                <MenuItem key={e.value} value={e.value}>
                  {e.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        {props.type === 'boolean' && (
          <FormControl
            variant="outlined"
            size="small"
            className={classes.formInput}
          >
            <InputLabel>Input</InputLabel>
            <Select
              label="Input"
              labelId="range02"
              value={props.range}
              onChange={(e) => props.setRange(e.target.value)}
            >
              <MenuItem value="">No Condition</MenuItem>
              <MenuItem value="false">false</MenuItem>
              <MenuItem value="true">true</MenuItem>
            </Select>
          </FormControl>
        )}
        {props.type !== 'boolean' && (
          <>
            <TextField
              variant="outlined"
              size="small"
              className={classes.formInput}
              disabled={!props.rangeType || !typesWithOptions()}
              label={props.rangeType === 'between' ? 'From' : 'Input'}
              onChange={(e) => props.setRange(e.target.value)}
              value={props.range}
            />
          </>
        )}

        {props.rangeType === 'between' && typesWithOptions() && (
          <TextField
            variant="outlined"
            size="small"
            className={classes.formInput}
            label={props.rangeType === 'between' ? 'To' : 'Input'}
            onChange={(e) => props.setRange2(e.target.value)}
            value={props.range2}
          />
        )}
      </>
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
