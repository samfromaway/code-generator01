import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Instruction = ({ children }) => {
  return (
    <Accordion style={{ flex: 1 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography variant="h5">Instruction</Typography>
      </AccordionSummary>
      <AccordionDetails style={{ padding: '0 24px 24px 24px' }}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default Instruction;
