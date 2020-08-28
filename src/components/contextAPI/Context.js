import React from 'react';
import CodeBlock from './../CodeBlock';

const Context = ({ namePlural }) => {
  const context = `
import { createContext } from 'react';

const ${namePlural}Context = createContext();

export default ${namePlural}Context;
`;

  const contextContent = namePlural
    ? context
    : 'Fill out the required form fields to see the code.';

  return <CodeBlock content={contextContent} />;
};

export default Context;
