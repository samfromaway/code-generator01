import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Accordion01 from '../Accordion01';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  formInput: {
    width: '100%',
    marginBottom: 12,
  },
  divider: { marginTop: 10, marginBottom: 10 },
}));

const InputValidationRateLimit = (props) => {
  const classes = useStyles();

  return (
    <Accordion01 title="Rate Limit" active={props.hasRateLimit}>
      <FormControl className={classes.formInput}>
        <FormControlLabel
          control={
            <Checkbox
              checked={props.hasRateLimit}
              onChange={(e) => props.setHasRateLimit(e.target.checked)}
              name="isRequired"
              color="primary"
            />
          }
          label="Is Rate Limited"
        />
      </FormControl>
      <TextField
        variant="outlined"
        size="small"
        className={classes.formInput}
        label="Rate Limit In Seconds"
        onChange={(e) => props.setRateLimit(e.target.value)}
        value={props.rateLimit}
        helperText="recommended 1-5 seconds"
        disabled={!props.hasRateLimit}
      />
      <TextField
        variant="outlined"
        size="small"
        className={classes.formInput}
        label="Create Date Selector"
        onChange={(e) => props.setCreatedDateSelector(e.target.value)}
        value={props.createdDateSelector}
        helperText="e.g. createdAt or timestamp"
        disabled={!props.hasRateLimit}
      />
    </Accordion01>
  );
};

export default InputValidationRateLimit;
