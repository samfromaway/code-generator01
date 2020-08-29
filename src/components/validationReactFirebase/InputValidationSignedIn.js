import React from 'react';
import Accordion01 from '../Accordion01';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';

const InputValidationSignedIn = (props) => {
  const someActionChecked = props.actions.some((e) => e.checked);

  return (
    <Accordion01 title="Signed In User" active={someActionChecked}>
      <FormControl>
        <FormLabel focused style={{ paddingBottom: 8, color: 'inherit' }}>
          Only Signed In User Is Allowed To
        </FormLabel>
        <FormGroup>
          {props.actions.map((action) => (
            <FormControlLabel
              key={action.title}
              label={action.title}
              control={
                <Switch
                  checked={action.checked}
                  onChange={props.handleActionsChange}
                  name={action.title}
                />
              }
            />
          ))}
        </FormGroup>
      </FormControl>
    </Accordion01>
  );
};

export default InputValidationSignedIn;
