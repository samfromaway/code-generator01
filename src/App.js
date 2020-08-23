import React from "react";
import "./App.css";
import { Switch, Route, Router } from "./util/router";
import Header from "./components/header/Header";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ContextAPI from "./pages/context-API";
import ValidationReactFirebase from "./pages/validation-react-firebase";
import ReactStateHooks from "./pages/react-state-hooks";
import About from "./pages/about";
import DesignResources from "./pages/design-resources";

const App = () => {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary: { main: "#497ed5", light: "#729bdf", dark: "#2759aa" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header>
          <Container>
            <Switch>
              <Route exact path="/context-api" component={ContextAPI} />
              <Route
                exact
                path="/validation-react-firebase"
                component={ValidationReactFirebase}
              />
              <Route
                exact
                path="/react-state-hooks"
                component={ReactStateHooks}
              />
              <Route
                exact
                path="/design-resources"
                component={DesignResources}
              />
              <Route exact path="/about" component={About} />
            </Switch>
          </Container>
        </Header>
      </Router>
    </ThemeProvider>
  );
};

export default App;

// Clear Local Storage Button
