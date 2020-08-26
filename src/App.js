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
import ContentContextProvider from "./context/ContentContext";
import ContentFirebaseProvider from "./context/ContentFirebaseContext";
import ContentHooksProvider from "./context/ContentHooksContext";
import Home from "./pages/home";

const App = () => {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
      primary: { main: "#497ed5", light: "#729bdf", dark: "#2759aa" },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ContentContextProvider>
        <ContentFirebaseProvider>
          <ContentHooksProvider>
            <Router>
              <Header>
                <Container>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/context-api" component={ContextAPI} />
                    <Route
                      exact
                      path="/validation-firebase-web"
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
          </ContentHooksProvider>
        </ContentFirebaseProvider>
      </ContentContextProvider>
    </ThemeProvider>
  );
};

export default App;

// Clear Local Storage Button
