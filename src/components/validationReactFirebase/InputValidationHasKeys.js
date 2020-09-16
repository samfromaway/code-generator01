import React from 'react';
import Accordion01 from '../Accordion01';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const InputValidationHasKeys = (props) => {
  return (
    <Accordion01
      title="Has Keys"
      active={props.hasAllKeys || props.onlyCurrentKeys}
    >
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={props.hasAllKeys}
              onChange={(e) => props.setHasAllKeys(e.target.checked)}
              name="hasAllKeys"
              color="primary"
            />
          }
          label="Must Have Required Keys"
        />
      </FormControl>
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={props.onlyCurrentKeys}
              onChange={(e) => props.setOnlyCurrentKeys(e.target.checked)}
              name="hasAllKeys"
              color="primary"
            />
          }
          label="Only Current Keys Allowed"
        />
      </FormControl>
    </Accordion01>
  );
};

export default InputValidationHasKeys;
