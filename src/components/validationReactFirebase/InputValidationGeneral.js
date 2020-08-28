import React from 'react';
import Paper01 from './../Paper01';
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
    marginBottom: 12,
  },
  divider: { marginTop: 10, marginBottom: 10 },
}));

const InputValidationGeneral = (props) => {
  const classes = useStyles();

  return (
    <Paper01 title="Firestore Settings">
      <TextField
        variant="outlined"
        size="small"
        className={classes.formInput}
        label="Collection Name"
        onChange={(e) => props.setCollectionName(e.target.value)}
        value={props.collectionName}
        helperText="e.g. users or directory"
      />
      <Divider className={classes.divider} />
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
      <Divider className={classes.divider} />
      <FormControl component="fieldset" style={{ margin: '12px 0 20px 0' }}>
        <FormLabel focused style={{ paddingBottom: 8, color: 'inherit' }}>
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
      <Divider className={classes.divider} />
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={props.hasAllKeys}
              onChange={(e) => props.setHasAllKeys(e.target.checked)}
              name="hasAllKeys"
              color="primary"
            />
          }
          label="Has All Keys"
        />
      </FormControl>
      <Divider className={classes.divider} />
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
    </Paper01>
  );
};

export default InputValidationGeneral;
