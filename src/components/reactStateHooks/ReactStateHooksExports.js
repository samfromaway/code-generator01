import React from 'react';
import Paper02 from './../Paper02';
import CodeBlock from './../CodeBlock';
import { capitalize } from './../../functions/textTransform';

const ReactStateHooksExports = (props) => {
  const items = props.items.map((item) => {
    const capitalizedItem = capitalize(item);
    return `${item},\nset${capitalizedItem},`;
  });

  const content = items.join('\n');

  return (
    <Paper02 title="Exports">
      <CodeBlock content={content || 'Add a variable'} />
    </Paper02>
  );
};

export default ReactStateHooksExports;
