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

const InputValidationOwnerAccess = (props) => {
  const classes = useStyles();

  return (
    <Accordion01
      title="Only Owner Has Access"
      active={props.onlyOwnerGetAccess}
    >
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
    </Accordion01>
  );
};

export default InputValidationOwnerAccess;
