import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Paper01 from "./../Paper01";

const useStyles = makeStyles((theme) => ({
  formInput: {
    marginBottom: 15,
    width: "100%",
  },
}));

const Input = (props) => {
  const classes = useStyles();

  const handleChange = (e) => {
    props.setActions((prev) => {
      return {
        ...prev,
        [e.target.name]: { ...prev[e.target.name], checked: e.target.checked },
      };
    });
  };

  const actionKeys = Object.keys(props.actions);
  return (
    <Paper01 title="Context API">
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          size="small"
          id="namePlural"
          label="Name Plural"
          onChange={(e) => props.setNamePlural(e.target.value)}
          value={props.namePlural}
          className={classes.formInput}
          helperText="In camelCase 🐫 e.g. myUsers"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          size="small"
          id="nameSingular"
          label="Name Singular"
          onChange={(e) => props.setNameSingular(e.target.value)}
          value={props.nameSingular}
          className={classes.formInput}
          helperText="In camelCase 🐫 e.g. myUser"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          size="small"
          id="uniqueSelector"
          label="Unique Selector"
          onChange={(e) => props.setUniqueSelector(e.target.value)}
          value={props.uniqueSelector}
          className={classes.formInput}
          style={{ marginBottom: 30 }}
          helperText="e.g. id"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl component="fieldset" style={{ marginBottom: 20 }}>
          <FormLabel component="legend">Actions</FormLabel>
          <FormGroup>
            {actionKeys.map((action) => (
              <FormControlLabel
                key={action}
                control={
                  <Switch
                    checked={props.actions[action].checked}
                    onChange={handleChange}
                    name={action}
                  />
                }
                label={action}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Grid>
    </Paper01>
  );
};

export default Input;
