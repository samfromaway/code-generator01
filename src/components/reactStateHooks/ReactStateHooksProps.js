import React from "react";
import Paper02 from "./../Paper02";
import CodeBlock from "./../CodeBlock";
import { capitalize } from "./../../functions/textTransform";

const ReactStateHooksProps = (props) => {
  const items = props.items.map((item) => {
    const capitalizedItem = capitalize(item);
    return `${item}={${item}}\nset${capitalizedItem}={set${capitalizedItem}}`;
  });

  const content = items.join("\n");

  return (
    <Paper02 title="Props">
      <CodeBlock content={content || "Add a variable"} />
    </Paper02>
  );
};

export default ReactStateHooksProps;
