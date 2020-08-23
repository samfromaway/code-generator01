import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const ReactStateHooksList = (props) => {
  return (
    <List style={{ width: "100%" }}>
      {props.items.map((item) => (
        <ListItem
          key={item}
          style={{ background: "#303030", borderRadius: 5, marginBottom: 5 }}
        >
          <ListItemText primary={item} />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="comments"
              onClick={() => props.handleDelete(item)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default ReactStateHooksList;
