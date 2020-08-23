import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const Paper02 = (props) => {
  return (
    <Paper>
      <Typography style={{ padding: "10px 15px" }} variant="h5">
        {props.title}
      </Typography>

      {props.children}
    </Paper>
  );
};

export default Paper02;
