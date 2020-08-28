import React, { useState, createContext } from 'react';

export const ContentContext = createContext();

export const ResourcesProvider = ({ children }) => {
  const [nameSingular, setNameSingular] = useState('');
  const [namePlural, setNamePlural] = useState('');
  const [uniqueSelector, setUniqueSelector] = useState('');
  const [actions, setActions] = useState({
    loading: {
      checked: true,
    },
    get: {
      checked: false,
    },
    add: {
      checked: false,
    },
    delete: {
      checked: false,
    },
    edit: {
      checked: false,
    },
  });
  return (
    <ContentContext.Provider
      value={{
        nameSingular,
        setNameSingular,
        namePlural,
        setNamePlural,
        uniqueSelector,
        setUniqueSelector,
        actions,
        setActions,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ResourcesProvider;
