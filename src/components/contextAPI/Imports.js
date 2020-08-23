import React from "react";
import CodeBlock from "./../CodeBlock";
import Paper02 from "../Paper02";
import { capitalize } from "../../functions/textTransform";
import Box from "@material-ui/core/Box";

const Imports = (props) => {
  const capitalizedNamePlural = capitalize(props.namePlural);
  const check = "Fill out the required form fields to see the code.";

  const appImport = `import ${capitalizedNamePlural}State from "./context/${props.namePlural}/${capitalizedNamePlural}State"`;
  const appImportJSX = `<${capitalizedNamePlural}State></${capitalizedNamePlural}State>`;
  const hocImport = `import ${capitalizedNamePlural}Context from "./../../context/${props.namePlural}/${props.namePlural}Context"`;
  const hocImportApp = `const {get${capitalizedNamePlural}} = useContext(${capitalizedNamePlural}Context)`;

  const appImportContent = props.namePlural ? appImport : check;
  const appImportJSXContent = props.namePlural ? appImportJSX : check;
  const hocImportContent = props.namePlural ? hocImport : check;
  const hocImportAppContent = props.namePlural ? hocImportApp : check;

  return (
    <Paper02 title="Imports">
      <CodeBlock content={appImportContent} />
      <Box m={2} />
      <CodeBlock content={appImportJSXContent} />
      <Box m={2} />
      <CodeBlock content={hocImportContent} />
      <Box m={2} />
      <CodeBlock content={hocImportAppContent} />
    </Paper02>
  );
};

export default Imports;
