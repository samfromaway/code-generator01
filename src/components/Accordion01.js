import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  accordion: { boxShadow: 'none' },
  accordionDetails: { flexDirection: 'column' },
  titleActive: { color: theme.palette.primary.main },
}));
const Accordion01 = ({ children, title, active }) => {
  const classes = useStyles();
  return (
    <Accordion style={{ flex: 1 }} className={classes.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Typography className={active ? classes.titleActive : ''}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

export default Accordion01;
