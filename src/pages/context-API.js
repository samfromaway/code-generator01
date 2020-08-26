import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Input from "../components/contextAPI/Input";
import Result from "../components/contextAPI/Result";
import Imports from "../components/contextAPI/Imports";
import { ContentContext } from "../context/ContentContext";
import Instruction from "./../components/Instruction";
import ContextApiInstruction from "./../components/contextAPI/ContextApiInstruction";

const ContextAPI = () => {
  const {
    nameSingular,
    setNameSingular,
    namePlural,
    setNamePlural,
    uniqueSelector,
    setUniqueSelector,
    actions,
    setActions,
  } = useContext(ContentContext);

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid container item>
          <Instruction>
            <ContextApiInstruction />
          </Instruction>
        </Grid>

        <Grid item xs={12} lg={5}>
          <Input
            nameSingular={nameSingular}
            setNameSingular={setNameSingular}
            namePlural={namePlural}
            setNamePlural={setNamePlural}
            uniqueSelector={uniqueSelector}
            setUniqueSelector={setUniqueSelector}
            actions={actions}
            setActions={setActions}
          />
        </Grid>
        <Grid item xs={12} lg={7}>
          <Imports nameSingular={nameSingular} namePlural={namePlural} />
        </Grid>
        <Result
          nameSingular={nameSingular}
          namePlural={namePlural}
          uniqueSelector={uniqueSelector}
          actions={actions}
        />
      </Grid>
    </Container>
  );
};

export default ContextAPI;
