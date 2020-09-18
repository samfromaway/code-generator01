import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { RANGE_TYPES, REDUCED_RANGE_TYPES } from './../../constants';

const useStyles = makeStyles((theme) => ({
  formInput: {
    width: '100%',
    marginBottom: 12,
  },
}));

const CondSelect = (props) => {
  if (props.type === 'number' || props.type === 'string') {
    return (
      <Select
        label="Condition"
        labelId="rangeType"
        value={props.rangeType}
        onChange={(e) => props.setRangeType(e.target.value)}
        disabled={!props.typesWithOptions()}
      >
        <MenuItem value="">No Condition</MenuItem>
        {RANGE_TYPES.map((e) => (
          <MenuItem key={e.value} value={e.value}>
            {e.label}
          </MenuItem>
        ))}
      </Select>
    );
  } else {
    return (
      <Select
        label="Condition"
        labelId="rangeType"
        value={props.rangeType}
        onChange={(e) => props.setRangeType(e.target.value)}
        disabled={!props.typesWithOptions()}
      >
        <MenuItem value="">No Condition</MenuItem>
        {REDUCED_RANGE_TYPES.map((e) => (
          <MenuItem key={e.value} value={e.value}>
            {e.label}
          </MenuItem>
        ))}
      </Select>
    );
  }
};

const CondFormControl = (props) => {
  const classes = useStyles();
  if (props.type === 'boolean') {
    return (
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
    );
  } else {
    return (
      <TextField
        variant="outlined"
        size="small"
        className={classes.formInput}
        disabled={!props.typesWithOptions()}
        label={props.rangeType === 'between' ? 'From' : 'Input'}
        onChange={(e) => props.setRange(e.target.value)}
        value={props.range}
      />
    );
  }
};

const ConditionalValidationKeyInput = (props) => {
  const classes = useStyles();
  console.log(props.rangeType);
  const typesWithOptions = () => {
    return (
      props.type === 'string' ||
      props.type === 'number' ||
      props.type === 'boolean'
    );
  };
  return (
    <>
      <FormControl
        variant="outlined"
        size="small"
        className={classes.formInput}
      >
        <InputLabel disabled={!typesWithOptions()}>Condition</InputLabel>
        <CondSelect {...props} typesWithOptions={typesWithOptions} />
      </FormControl>
      <CondFormControl {...props} typesWithOptions={typesWithOptions} />

      {props.rangeType === 'between' && (
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
  );
};

export default ConditionalValidationKeyInput;
