import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { TYPES, RANGE_TYPES, REDUCED_RANGE_TYPES } from "./../../constants";
import Paper01 from "./../Paper01";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  formInput: {
    width: "100%",
    marginBottom: 10,
  },
}));

const InputValidationKey = (props) => {
  const classes = useStyles();

  const typesWithOptions = () => {
    if (
      props.type === "string" ||
      props.type === "number" ||
      props.type === "boolean"
    ) {
      return true;
    }
  };

  return (
    <Paper01 title="Add Keys">
      <TextField
        className={classes.formInput}
        label="Key*"
        onChange={(e) => props.setMyKey(e.target.value)}
        value={props.myKey}
        helperText="In camelCase 🐫"
      />
      <FormControl className={classes.formInput}>
        <InputLabel>Type*</InputLabel>
        <Select
          labelId="type"
          value={props.type}
          onChange={(e) => props.setType(e.target.value)}
        >
          <MenuItem value="">Not Specified</MenuItem>
          {TYPES.map((e) => (
            <MenuItem key={e} value={e}>
              {e}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formInput}>
        <FormControlLabel
          disabled={
            !props.type ||
            props.type === "boolean" ||
            props.type === "object" ||
            props.type === "array"
          }
          control={
            <Checkbox
              checked={props.isRequired}
              onChange={(e) => props.setIsRequired(e.target.checked)}
              name="isRequired"
              color="primary"
            />
          }
          label="Is Required"
        />
      </FormControl>

      <Divider style={{ marginBottom: 10 }} />

      <>
        <Typography variant="subtitle1">Optional</Typography>
        <FormControl className={classes.formInput}>
          <InputLabel disabled={!typesWithOptions()}>Condition</InputLabel>
          <Select
            label="Condition"
            labelId="rangeType"
            value={props.rangeType}
            onChange={(e) => props.setRangeType(e.target.value)}
            disabled={!typesWithOptions()}
          >
            <MenuItem value="">No Condition</MenuItem>
            {props.type === "number" &&
              RANGE_TYPES.map((e) => (
                <MenuItem key={e.value} value={e.value}>
                  {e.label}
                </MenuItem>
              ))}
            {props.type !== "number" &&
              REDUCED_RANGE_TYPES.map((e) => (
                <MenuItem key={e.value} value={e.value}>
                  {e.label}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        {props.type === "boolean" && (
          <FormControl className={classes.formInput}>
            <InputLabel>Input</InputLabel>
            <Select
              label="Condition"
              labelId="range02"
              value={props.range}
              onChange={(e) => props.setRange(e.target.value)}
            >
              <MenuItem value="">No Condition</MenuItem>
              <MenuItem value="false">false</MenuItem>
              <MenuItem value="true">true</MenuItem>
            </Select>
          </FormControl>
        )}
        {props.type !== "boolean" && (
          <>
            <TextField
              className={classes.formInput}
              disabled={!props.rangeType || !typesWithOptions()}
              label={props.rangeType === "between" ? "From" : "Input"}
              onChange={(e) => props.setRange(e.target.value)}
              value={props.range}
            />
          </>
        )}

        {props.rangeType === "between" && typesWithOptions() && (
          <TextField
            className={classes.formInput}
            label={props.rangeType === "between" ? "To" : "Input"}
            onChange={(e) => props.setRange2(e.target.value)}
            value={props.range2}
          />
        )}
      </>

      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          paddingBottom: 10,
          justifyContent: "center",
        }}
      >
        <Button
          style={{ margin: 10 }}
          variant="contained"
          size="small"
          color="primary"
          onClick={props.handleAddItems}
        >
          Add
        </Button>

        <Button
          style={{ margin: 10 }}
          variant="outlined"
          size="small"
          onClick={props.clearInput}
        >
          Clear
        </Button>
      </Grid>
    </Paper01>
  );
};

export default InputValidationKey;
