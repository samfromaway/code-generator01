import React from "react";
import Paper01 from "./../Paper01";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  formInput: {
    width: "100%",
    marginBottom: 10,
  },
}));

const InputValidationGeneral = (props) => {
  const classes = useStyles();

  return (
    <Paper01 title="General Settings">
      <Grid container item xs={12}>
        <TextField
          className={classes.formInput}
          label="Variable*"
          onChange={(e) => props.setVariable(e.target.value)}
          value={props.variable}
          helperText="In camelCase 🐫"
        />
      </Grid>
      <Divider style={{ margin: "10px 0px" }} />
      <Typography variant="subtitle1">Optional</Typography>

      <Grid item xs={12}>
        <Grid>
          <FormControl className={classes.formInput}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.onlyOwnerGetAccess}
                  onChange={(e) =>
                    props.setOnlyOwnerGetAccess(e.target.checked)
                  }
                  name="isRequired"
                  color="primary"
                />
              }
              label="Only Data Owner Has Access"
            />
          </FormControl>
        </Grid>
        <Grid item>
          <TextField
            className={classes.formInput}
            label="Owner Selector"
            onChange={(e) => props.setOwnerSelector(e.target.value)}
            value={props.ownerSelector}
            helperText="e.g. owner or createdBy"
            disabled={!props.onlyOwnerGetAccess}
          />
        </Grid>
      </Grid>
    </Paper01>
  );
};

export default InputValidationGeneral;
