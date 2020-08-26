import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import DevWorldLogo from "../../images/logo.png";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const Hero = () => {
  return (
    <Paper style={{ padding: 24 }}>
      <Typography align="center" variant="h4">
        Code Snipped Generator
      </Typography>
      <Typography align="center" variant="h6">
        Be Lazy Smart | Code In Seconds Instead Of Hours
      </Typography>
      <Box
        item
        xs={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography align="center" variant="h6" style={{ paddingRight: 8 }}>
          By Dev World
        </Typography>
        <img src={DevWorldLogo} width={20} height={20} alt="logo" />
      </Box>
      <Grid container xs={12}>
        <Grid item xs={6}>
          <Typography variant="h6">By Dev World</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            consequuntur aspernatur soluta itaque eum corporis porro optio aut
            deleniti facere.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img src={DevWorldLogo} alt="" />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Hero;
