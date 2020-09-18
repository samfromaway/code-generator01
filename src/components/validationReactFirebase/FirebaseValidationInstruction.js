import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  subtitle: {
    marginBottom: 3,
  },
  paragraph: {
    marginBottom: 8,
  },
  divider: { margin: '8px 0' },
}));

const FirebaseValidationInstruction = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography className={classes.subtitle} variant="h6">
          Don't Forget
        </Typography>
        <Typography className={classes.paragraph}>
          Always add a "Collection Name" and a "Variable"!
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.subtitle} variant="h6">
          Step 1
        </Typography>
        <Typography className={classes.paragraph}>
          Choose your "Firestore Settings".
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.subtitle} variant="h6">
          Step 2
        </Typography>
        <Typography className={classes.paragraph}>
          Add your keys. <br />
          - "Not Empty" will check if: YOUR_KEY != '' <br />- "Required Key"
          works with the "Keys Checking" from "Firestore Settings" and will make
          sure this key is required to be in your Firestore document.
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.subtitle} variant="h6">
          Step 3
        </Typography>
        <Typography className={classes.paragraph}>
          Copy the code and add it to your Firestore Rules file. <br />
          - JS Validation (Basic) returns true if the conditions are met. <br />
          - JS Validation (Advanced) returns false if the conditions are not met
          and returns an error-statement.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} style={{ padding: '0 30px' }}>
        <Typography className={classes.subtitle} variant="h6">
          Video
        </Typography>
        <Typography className={classes.paragraph}>
          Check out the video for a full explanation.
        </Typography>
        <div className="instructionVideo__wrapper">
          <iframe
            title="video"
            className="instructionVideo"
            src="https://www.youtube.com/embed/oHyTDT3V65U"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Grid>
    </Grid>
  );
};

export default FirebaseValidationInstruction;
