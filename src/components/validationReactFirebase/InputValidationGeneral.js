import React from 'react';
import Paper01 from './../Paper01';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import InputValidationRateLimit from './InputValidationRateLimit';
import InputValidationSignedIn from './InputValidationSignedIn';
//import InputValidationHasKeys from './InputValidationHasKeys';
import InputValidationOwnerAccess from './InputValidationOwnerAccess';

const useStyles = makeStyles((theme) => ({
  formInput: {
    width: '100%',
    marginBottom: 12,
  },
}));

const InputValidationGeneral = (props) => {
  const classes = useStyles();

  return (
    <Paper01 title="Firestore Settings">
      <TextField
        variant="outlined"
        size="small"
        className={classes.formInput}
        label="Collection Name*"
        onChange={(e) => props.setCollectionName(e.target.value)}
        value={props.collectionName}
        helperText="e.g. users or directory"
      />
      <Divider className={classes.divider} />
      <InputValidationOwnerAccess
        onlyOwnerGetAccess={props.onlyOwnerGetAccess}
        setOnlyOwnerGetAccess={props.setOnlyOwnerGetAccess}
        setOwnerSelector={props.setOwnerSelector}
        onlyOwnerGetAccessActions={props.onlyOwnerGetAccessActions}
        handleOnlyOwnerGetAccessActionsChange={
          props.handleOnlyOwnerGetAccessActionsChange
        }
      />
      <Divider className={classes.divider} />
      <InputValidationSignedIn
        actions={props.actions}
        handleActionsChange={props.handleActionsChange}
      />
      <Divider className={classes.divider} />
      {/* <InputValidationHasKeys
        hasAllKeys={props.hasAllKeys}
        setHasAllKeys={props.setHasAllKeys}
      /> */}
      <Divider className={classes.divider} />
      <InputValidationRateLimit
        hasRateLimit={props.hasRateLimit}
        setHasRateLimit={props.setHasRateLimit}
        rateLimit={props.rateLimit}
        setRateLimit={props.setRateLimit}
        setCreatedDateSelector={props.setCreatedDateSelector}
        createdDateSelector={props.createdDateSelector}
        rateLimitActions={props.rateLimitActions}
        handleRateLimitActionsChange={props.handleRateLimitActionsChange}
      />
    </Paper01>
  );
};

export default InputValidationGeneral;
