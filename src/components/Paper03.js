import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";

const Paper03 = (props) => {
  return (
    <Paper>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          alt={props.title}
          src={props.icon}
          style={{ margin: "10px 10px 15px 15px" }}
        />
        <Typography style={{ padding: "10px 15px 15px 0px" }} variant="h5">
          {props.title}
        </Typography>
      </Box>
      <Container>{props.children}</Container>
    </Paper>
  );
};

export default Paper03;
