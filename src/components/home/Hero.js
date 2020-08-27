import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import DevWorldLogo from "../../images/logo.png";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import HeroAnimation from "./HeroAnimation";
import Link from "@material-ui/core/Link";

const Hero = () => {
  return (
    <Paper style={{ padding: 24 }}>
      <div style={{ position: "relative", zIndex: 20 }}>
        <Typography align="center" variant="h4" gutterBottom>
          Code Snipped Generator
        </Typography>
        <Typography align="center" variant="h6">
          Be Lazy Smart | Code In Seconds Instead Of Hours
        </Typography>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href="https://dev-world.info/" target="_blank">
            <Typography align="center" variant="h6">
              By Dev World
            </Typography>
          </Link>
          <img
            src={DevWorldLogo}
            width={20}
            height={20}
            alt="logo"
            style={{ marginLeft: 8 }}
          />
        </Box>
      </div>
      <Grid container>
        <Grid item xs={12} md={6} style={{ marginTop: 20 }}>
          <Typography variant="h6">What's This?</Typography>
          <Typography>
            As programmers, we are trained to hate repetitive tasks but still,
            we have to do it way too much. Use the code snippets generator to
            generate repetitive but useful/mandatory code with a GUI for your
            application.
            <br /> <br />
            Find also optimized code snippets and other useful tools for your
            project. Code faster, more reliably, and have more fun doing it.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <HeroAnimation />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Hero;
