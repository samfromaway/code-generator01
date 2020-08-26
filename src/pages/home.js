import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Paper03 from "./../components/Paper03";
import NavigationItems from "./../components/home/NavigationItems";
import { resources } from "../data/pages";
import FirebaseLogo from "../images/icons/firebase.png";
import Design from "../images/icons/design.svg";
import ReactLogo from "../images/icons/react-logo.svg";

const Home = () => {
  const firebaseItems = resources.filter(
    (resource) => resource.categories.title === "Firebase"
  );
  const reactItems = resources.filter(
    (resource) => resource.categories.title === "React"
  );
  const designItems = resources.filter(
    (resource) => resource.categories.title === "Design"
  );
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper03 title="React" icon={ReactLogo}>
            <Grid container spacing={2}>
              {reactItems.map((page, index) => (
                <NavigationItems
                  key={index}
                  title={page.title}
                  desc={page.desc}
                  path={page.path}
                  categories={page.categories}
                  icon={page.icon}
                />
              ))}
            </Grid>
          </Paper03>
        </Grid>
        <Grid item xs={12}>
          <Paper03 title="Firebase" icon={FirebaseLogo}>
            <Grid container spacing={2}>
              {firebaseItems.map((page, index) => (
                <NavigationItems
                  key={index}
                  title={page.title}
                  desc={page.desc}
                  path={page.path}
                  categories={page.categories}
                  icon={page.icon}
                />
              ))}
            </Grid>
          </Paper03>
        </Grid>
        <Grid item xs={12}>
          <Paper03 title="Design" icon={Design}>
            <Grid container spacing={2}>
              {designItems.map((page, index) => (
                <NavigationItems
                  key={index}
                  title={page.title}
                  desc={page.desc}
                  path={page.path}
                  categories={page.categories}
                  icon={page.icon}
                />
              ))}
            </Grid>
          </Paper03>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
