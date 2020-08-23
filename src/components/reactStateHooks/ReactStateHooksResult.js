import React from "react";
import Paper02 from "./../Paper02";
import CodeBlock from "./../CodeBlock";
import { capitalize } from "./../../functions/textTransform";

const ReactStateHooksResult = (props) => {
  const items = props.items.map((item) => {
    const capitalizedItem = capitalize(item);
    return `const [${item}, set${capitalizedItem}] = useState("")`;
  });

  const content = items.join("\n");
  return (
    <Paper02 title="Hooks">
      <CodeBlock content={content || "Add a variable"} />
    </Paper02>
  );
};

export default ReactStateHooksResult;
