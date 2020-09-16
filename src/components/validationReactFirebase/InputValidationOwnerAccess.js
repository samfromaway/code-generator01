import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Accordion01 from '../Accordion01';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  formInput: {
    width: '100%',
    marginBottom: 12,
  },
  divider: { marginTop: 10, marginBottom: 10 },
}));

const InputValidationOwnerAccess = (props) => {
  const classes = useStyles();
  const someActionChecked = props.onlyOwnerGetAccessActions.some(
    (e) => e.checked
  );

  return (
    <Accordion01 title="Owner Access" active={someActionChecked}>
      <FormControl className={classes.formInput}>
        <FormLabel focused style={{ paddingBottom: 8, color: 'inherit' }}>
          Only Owner Has Access To
        </FormLabel>
        <FormGroup>
          {props.onlyOwnerGetAccessActions.map((action) => (
            <FormControlLabel
              key={action.title}
              label={action.title}
              control={
                <Switch
                  checked={action.checked}
                  onChange={props.handleOnlyOwnerGetAccessActionsChange}
                  name={action.title}
                />
              }
            />
          ))}
        </FormGroup>
      </FormControl>
      <TextField
        variant="outlined"
        size="small"
        className={classes.formInput}
        label="Owner Selector"
        onChange={(e) => props.setOwnerSelector(e.target.value)}
        value={props.ownerSelector}
        helperText="e.g. owner or createdBy"
        disabled={!someActionChecked}
      />
    </Accordion01>
  );
};

export default InputValidationOwnerAccess;
