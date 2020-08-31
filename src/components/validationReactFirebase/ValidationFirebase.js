import React, { useState, useEffect } from 'react';
import Paper02 from './../Paper02';
import CodeBlock from './../CodeBlock';
import { capitalize } from './../../functions/textTransform';

const ValidationFirebase = (props) => {
  const [items, setItems] = useState('');
  const prefixFirebase = 'request.resource.data';
  const collectionName = props.collectionName || 'ADD-COLLECTION-NAME';
  const variable = props.variable || 'ADD-VARIABLE';
  const rateLimitTime = props.rateLimit || 'ADD-RATE-LIMIT';
  const createdDateSelector = props.createdDateSelector || 'ADD-DATE-SELECTOR';
  const someActionChecked = props.actions.some((e) => e.checked);
  const capitalizedVariable = capitalize(variable);
  const space = '    ';
  const space2 = '      ';
  const space3 = '        ';
  const space4 = '          ';
  const andBrk = ' &&\n';
  const brk = '\n';
  const brkSpace = brk + brk + space2;

  const setContent = () => {
    setItems('');
    props.items.forEach((e) => {
      setItems((prev) => prev + generateItems(e));
    });
  };

  useEffect(() => {
    setContent();
    // eslint-disable-next-line
  }, [props.items, props.variable]);

  //KEYS//
  const type = (input) => {
    const inputType = () => {
      if (input.type === 'boolean') {
        return 'bool';
      } else if (input.type === 'object') {
        return 'map';
      } else if (input.type === 'array') {
        return 'list';
      } else return input.type;
    };

    return `${variable}.${input.myKey} is ${inputType()}`;
  };

  const rangeType = (input) => {
    const inputRange =
      input.type === 'string' ? `'${input.range}'` : input.range;

    const rangeSymbol = () => {
      switch (input.rangeType) {
        case 'equal':
          return '==';
        case 'notEqual':
          return '!=';
        case 'lessThan':
          return '<';
        case 'lessThanOrEqualTo':
          return '<=';
        case 'greaterThan':
          return '>';
        case 'greaterThanOrEqualTo':
          return '>=';
        case 'between':
          return '>=';
        default:
          return '';
      }
    };

    return `${variable}.${input.myKey} ${rangeSymbol()} ${inputRange}`;
  };

  const range2 = (input) => {
    const inputRange =
      input.type === 'string' ? `'${input.range2}'` : input.range2;
    return `${variable}.${input.myKey} <= ${inputRange}`;
  };

  const isRequired = (input) => {
    return `${variable}.${input.myKey} != ''`;
  };

  const generateItems = (item) => {
    const comment = item.myKey ? `\n${space4}// ${variable}.${item.myKey}` : '';
    const curType = item.type ? brk + space4 + type(item) : '';
    const curRangeType = item.rangeType
      ? andBrk + space4 + rangeType(item)
      : '';
    const curRange2 = item.range2 ? andBrk + space4 + range2(item) : '';
    const curRequired = item.isRequired
      ? andBrk + space4 + isRequired(item)
      : '';
    const allContent =
      comment + curType + curRangeType + curRange2 + curRequired + ' &&';
    return allContent;
  };

  // IS SIGNED IN
  const isSignedIn = (name) => {
    if (name) {
      const item = props.actions.filter((e) => e.title === name);
      if (item[0].checked) {
        return isSignedInCallContent;
      } else return '';
    }
  };

  const isSignedInFunctionContent = `${space2}function isSignedIn() {
  ${space2}return request.auth != null;
  ${space}}
  `;
  const isSignedInCallContent = ` &&\n${space2}isSignedIn()`;

  // ONLY OWNER ACCESS
  const isOwnerFunctionContent = `${space2}function isOwner(${variable}) {
  ${space2}return request.auth.uid == ${variable}.${props.ownerSelector};
${space2}}
  `;

  const isOwnerCallRead = props.onlyOwnerGetAccess
    ? ` &&\n${space2}isOwner(resource.data)`
    : '';
  const isOwnerCallCreate = props.onlyOwnerGetAccess
    ? ` &&\n${space2}isOwner(request.resource.data)`
    : '';
  const isOwnerCallEdit = props.onlyOwnerGetAccess
    ? ` &&\n${space2}isOwner(resource.data)`
    : '';
  const isOwnerCallDelete = props.onlyOwnerGetAccess
    ? ` &&\n${space2}isOwner(resource.data)`
    : '';

  // slice used to delete last &&
  const isValidFunction = `${space2}function isValid${capitalizedVariable}(${variable}) {
  ${space2}return (${items.slice(0, -2)}
  ${space2});
${space2}}

`;

  //   //HAS ALL KEYS   // to finish
  //   const hasAllKeysContent = `${space2}function ${variable}hasAllRequiredFields() {
  //   ${space2}let requiredFields = []
  //   ${space2}return ${prefixFirebase}.keys().hasAll(requiredFields)
  // ${space2}}
  // `;

  // RATE LIMIT
  const rateLimitFunctionContent = `${space2}function isCalm() {
  ${space2}return ( 
  ${space3}request.time > resource.data.${createdDateSelector} +
  ${space3}duration.value(${rateLimitTime}, 's')
  ${space2}); 
${space2}}
`;

  const rateLimitCallContent = ` &&\n${space2}isCalm()`;
  const rateLimitCall = (name) => {
    if (name) {
      const item = props.rateLimitActions.filter((e) => e.title === name);
      if (item[0].checked) {
        return rateLimitCallContent;
      } else return '';
    }
  };

  // ALLOW CALLS FOR FIREBASE
  const allowRead = () => {
    const content =
      isOwnerCallRead + isSignedIn('read') + rateLimitCall('read');
    if (isOwnerCallRead || isSignedIn('read') || rateLimitCall('delete')) {
      return `allow read: if ${content.slice(10)};`;
    } else return 'allow read: if //add validation or remove';
  };

  const allowCreate = `allow create: if isValid${capitalizedVariable}(${prefixFirebase})${isOwnerCallCreate}${isSignedIn(
    'create'
  )}${rateLimitCall('create')};`;

  const allowUpdate = `allow update: if isValid${capitalizedVariable}(${prefixFirebase})${isOwnerCallEdit}${isSignedIn(
    'update'
  )}${rateLimitCall('update')};`;

  const allowDelete = () => {
    const content =
      isOwnerCallDelete + isSignedIn('delete') + rateLimitCall('delete');
    if (isOwnerCallDelete || isSignedIn('delete') || rateLimitCall('delete')) {
      return `allow delete: if ${content.slice(10)};`;
    } else return 'allow delete: if //add validation or remove';
  };

  // GENERATE CONTENT
  const generateContent = () => {
    const isOwnerFunction = props.onlyOwnerGetAccess
      ? isOwnerFunctionContent + brk
      : '';
    const isSignedInFunction = someActionChecked
      ? isSignedInFunctionContent + brk
      : '';

    const rateLimitFunction = props.hasRateLimit
      ? rateLimitFunctionContent + brk
      : '';

    const allContent =
      `    match /${collectionName}/{itemId}{` +
      brkSpace +
      allowRead() +
      brkSpace +
      allowCreate +
      brkSpace +
      allowUpdate +
      brkSpace +
      allowDelete() +
      brkSpace +
      '// FUNCTIONS' +
      brk +
      isSignedInFunction +
      isOwnerFunction +
      isValidFunction +
      rateLimitFunction +
      '    }' +
      brk +
      brk;
    return allContent;
  };

  return (
    <Paper02 title="Firestore Validation">
      <CodeBlock content={generateContent()} />
    </Paper02>
  );
};

export default ValidationFirebase;
