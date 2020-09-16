import React, { useState, createContext } from 'react';

export const ContentFirebase = createContext();

export const ContentFirebaseContext = ({ children }) => {
  const [items, setItems] = useState([]);
  const [variable, setVariable] = useState('');
  const [myKey, setMyKey] = useState('');
  const [type, setType] = useState('');
  const [rangeType, setRangeType] = useState('');
  const [range, setRange] = useState('');
  const [range2, setRange2] = useState('');
  const [isRequired, setIsRequired] = useState(false);
  const [ownerSelector, setOwnerSelector] = useState('');
  const [onlyOwnerGetAccessActions, setOnlyOwnerGetAccessActions] = useState([
    { title: 'read', checked: false },
    { title: 'create', checked: false },
    { title: 'update', checked: false },
    { title: 'delete', checked: false },
  ]);
  const [collectionName, setCollectionName] = useState('');
  const [actions, setActions] = useState([
    { title: 'read', checked: false },
    { title: 'create', checked: false },
    { title: 'update', checked: false },
    { title: 'delete', checked: false },
  ]);

  const [rateLimit, setRateLimit] = useState('');
  const [hasAllKeys, setHasAllKeys] = useState(false);
  const [createdDateSelector, setCreatedDateSelector] = useState('');
  const [rateLimitActions, setRateLimitActions] = useState([
    { title: 'create', checked: false },
    { title: 'update', checked: false },
  ]);
  return (
    <ContentFirebase.Provider
      value={{
        items,
        setItems,
        variable,
        setVariable,
        myKey,
        setMyKey,
        type,
        setType,
        rangeType,
        setRangeType,
        range,
        setRange,
        range2,
        setRange2,
        isRequired,
        setIsRequired,
        ownerSelector,
        setOwnerSelector,
        onlyOwnerGetAccessActions,
        setOnlyOwnerGetAccessActions,
        actions,
        setActions,
        collectionName,
        setCollectionName,
        rateLimit,
        setRateLimit,
        hasAllKeys,
        setHasAllKeys,
        createdDateSelector,
        setCreatedDateSelector,
        rateLimitActions,
        setRateLimitActions,
      }}
    >
      {children}
    </ContentFirebase.Provider>
  );
};

export default ContentFirebaseContext;
