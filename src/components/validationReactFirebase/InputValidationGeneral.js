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
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion01 from '../Accordion01';
import InputValidationRateLimit from './InputValidationRateLimit';
import InputValidationSignedIn from './InputValidationSignedIn';
import InputValidationHasKeys from './InputValidationHasKeys';
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
        onlyOwnerGetAccess={props.onlyOwnerGetAccess}
      />
      <Divider className={classes.divider} />
      <InputValidationSignedIn
        actions={props.actions}
        handleActionsChange={props.handleActionsChange}
      />
      <Divider className={classes.divider} />
      <InputValidationHasKeys
        hasAllKeys={props.hasAllKeys}
        setHasAllKeys={props.setHasAllKeys}
      />
      <Divider className={classes.divider} />
      <InputValidationRateLimit
        hasRateLimit={props.hasRateLimit}
        setHasRateLimit={props.setHasRateLimit}
        rateLimit={props.rateLimit}
        setRateLimit={props.setRateLimit}
        setCreatedDateSelector={props.setCreatedDateSelector}
        createdDateSelector={props.createdDateSelector}
      />
    </Paper01>
  );
};

export default InputValidationGeneral;
