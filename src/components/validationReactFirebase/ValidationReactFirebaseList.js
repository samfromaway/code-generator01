import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper01 from './../Paper01';
import Typography from '@material-ui/core/Typography';

const ValidationReactFirebaseInputList = (props) => {
  const secondaryText = (item) => {
    const typeText = item.type ? `Type: ${item.type}` : '';
    const requiredText = item.isRequired ? ' | isRequired' : '';
    const rangeText = item.rangeType
      ? ` | ${item.rangeType} ${item.range}`
      : '';
    const range2Text = item.range2 ? ` and ${item.range2}` : '';

    return typeText + requiredText + rangeText + range2Text;
  };

  return (
    <Paper01 title="Items">
      <List>
        {props.items.length === 0 && (
          <Typography gutterBottom>Add Keys...</Typography>
        )}
        {props.items.map((item) => (
          <ListItem
            dense
            key={item.myKey}
            style={{
              background: '#303030',
              borderRadius: 5,
              marginBottom: 5,
              width: '100%',
            }}
          >
            <ListItemText
              primary={`${item.myKey}`}
              secondary={secondaryText(item)}
            />
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
    </Paper01>
  );
};

export default ValidationReactFirebaseInputList;
