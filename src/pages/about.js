import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const About = () => {
  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: 16 }}>
        <Typography gutterBottom variant="h4" align="center">
          About
        </Typography>
        <Typography variant="h5">Who Is Dev-World?</Typography>
        <Typography>
          Dev-World is a Digital Agency with the over-arching mission to combine
          the best of many worlds. <br /> <br />
          We focus on sales first, because we know this is why clients work with
          us, they want to sell more. That's why we are able to stay grounded
          and not loose ourselves in technical details. We work with passion and
          with your goal in mind, so our projects are fun and generate real
          results.
        </Typography>
        <Button
          style={{ margin: '16px 0' }}
          variant="contained"
          color="primary"
          href="http://dev-world.agency/"
          target="_blank"
        >
          Check Out The Website
        </Button>

        <Box m={2} />
        <Typography gutterBottom variant="h5">
          Mission
        </Typography>
        <Typography gutterBottom>
          As programmers, we are trained to hate repetitive tasks. But still, we
          have to do it way too much. Use the code snippets generator to
          generate repetitive but useful/mandatory code with a GUI for your
          application. That's why we created the Code Snipped Generator.
        </Typography>
        <Box m={4} />
        <Typography gutterBottom variant="h5">
          Questions/Add-Ons?
        </Typography>
        <Typography gutterBottom>
          If you have questions you can write us at&nbsp;
          <a
            href="mailto:contact@dev-world.info."
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
          >
            contact@dev-world.info.
          </a>
          &nbsp;If you want us to add a feature or if you have a great idea,
          check out the&nbsp;
          <a
            href="https://github.com/samfromaway/code-generator01"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
          >
            GitHub Repo
          </a>
          &nbsp;for further information.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
