import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";
import Checkbox from "@material-ui/core/Checkbox";

const YellowStarCheckbox = withStyles({
  root: {
    color: yellow[400],
    "&$checked": {
      color: yellow[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
export default YellowStarCheckbox;
