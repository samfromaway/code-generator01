import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Accordion01 from '../Accordion01';
import Checkbox from '@material-ui/core/Checkbox';
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
      <FormControl disabled={!props.onlyOwnerGetAccess}>
        <FormLabel focused style={{ paddingBottom: 8, color: 'inherit' }}>
          Only Signed In User Is Allowed To
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
    </Accordion01>
  );
};

export default InputValidationOwnerAccess;
