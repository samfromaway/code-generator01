import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { CopyToClipboard } from "react-copy-to-clipboard";
import IconButton from "@material-ui/core/IconButton";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

const Paper02Copy = (props) => {
  return (
    <Paper style={{ position: "relative" }}>
      <Typography style={{ padding: "10px 15px" }} variant="h5">
        {props.title}
      </Typography>
      <CopyToClipboard text={props.title}>
        <IconButton
          style={{ position: "absolute", right: 0, top: 0 }}
          aria-label="copy"
          component="span"
        >
          <FileCopyOutlinedIcon />
        </IconButton>
      </CopyToClipboard>
      {props.children}
    </Paper>
  );
};

export default Paper02Copy;
