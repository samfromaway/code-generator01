import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CodeBlock from '../CodeBlock';

const useStyles = makeStyles((theme) => ({
  subtitle: {
    marginBottom: 3,
  },
  paragraph: {
    marginBottom: 8,
  },
  divider: { margin: '8px 0' },
}));

const ContextApiInstruction = () => {
  const classes = useStyles();

  const folderStructure = `ROOT/
├── public/
└── src/
   ├── context/
   │  └── popupAlerts/
   │     ├── PopupAlertState.js
   │     ├── popupAlertsReducer.js
   │     └── popupAlertsContext.js
   ├── components/
   │  └── popupAlerts/
   │     └── PopupAlerts.js
   ├── app.js
   └── ...`;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography className={classes.subtitle} variant="h6">
          Step 1
        </Typography>
        <Typography className={classes.paragraph}>
          Add a "Name Plural". The "Name" is your context name. An example could
          be that you want to have a popup-alert context. Then you might want to
          call the "Name Plural": popupAlerts.
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.subtitle} variant="h6">
          Step 2
        </Typography>
        <Typography className={classes.paragraph}>
          Add a "Name Singular". In our alerts example this would be: popupAlert
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.subtitle} variant="h6">
          Step 3
        </Typography>
        <Typography className={classes.paragraph}>
          Choose your "Unique Selector". Usually this will be something like:
          id, value, uid... The unique selector is the key in your object that
          is unique and used to programmatically identify your item.
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.subtitle} variant="h6">
          Step 4
        </Typography>
        <Typography className={classes.paragraph}>
          Choose your required actions.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography className={classes.subtitle} variant="h6">
          Required Folder Structure
        </Typography>
        <Typography className={classes.paragraph}>
          For the "Imports" to work, please use this folder structure. Otherwise
          you can easily change the imports by hand. Example with popupAlerts:
        </Typography>
        <CodeBlock content={folderStructure} />
      </Grid>
    </Grid>
  );
};

export default ContextApiInstruction;
