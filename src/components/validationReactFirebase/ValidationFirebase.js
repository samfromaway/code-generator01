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

  // IS VALID FUNCTION
  const isValidCall = (name) => {
    if (name === 'create' || name === 'update') {
      if (props.items.length > 0) {
        return isValidCallContent;
      } else return '';
    } else return '';
  };
  const isValidCallContent = ` &&\n${space3}isValid${capitalizedVariable}(${prefixFirebase})`;
  // slice used to delete last &&
  const isValidFunctionContent = `${space2}function isValid${capitalizedVariable}(${variable}) {
  ${space2}return (${items.slice(0, -2)}
  ${space2});
${space2}}

`;

  // IS SIGNED IN
  const isSignedInCall = (name) => {
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
  const isSignedInCallContent = ` &&\n${space3}isSignedIn()`;

  // ONLY OWNER ACCESS
  const isOwnerCall = (name) => {
    if (name) {
      const item = props.onlyOwnerGetAccessActions.filter(
        (e) => e.title === name
      );
      if (item[0].checked) {
        if (name === 'create') {
          return ` &&\n${space3}isOwner(request.resource.data)`;
        } else return ` &&\n${space3}isOwner(resource.data)`;
      } else return '';
    }
  };
  const isOwnerFunctionContent = `${space2}function isOwner(${variable}) {
  ${space2}return request.auth.uid == ${variable}.${props.ownerSelector};
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
  const rateLimitCallContent = ` &&\n${space3}isCalm()`;
  const rateLimitCall = (name) => {
    if (name === 'create' || name === 'update') {
      const item = props.rateLimitActions.filter((e) => e.title === name);
      if (item[0].checked) {
        return rateLimitCallContent;
      } else return '';
    }
  };

  // CALLS FOR FIREBASE
  const calls = (name) => {
    const content =
      isValidCall(name) +
      isOwnerCall(name) +
      isSignedInCall(name) +
      rateLimitCall(name);
    if (
      isValidCall(name) ||
      isOwnerCall(name) ||
      isSignedInCall(name) ||
      rateLimitCall(name)
    ) {
      return `allow ${name}: if ${content.slice(12)};`;
    } else return `allow ${name}: if //add validation or remove`;
  };

  // GENERATE CONTENT
  const generateContent = () => {
    const isValidFunction =
      props.items.length > 0 ? isValidFunctionContent + brk : '';
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
      calls('read') +
      brkSpace +
      calls('create') +
      brkSpace +
      calls('update') +
      brkSpace +
      calls('delete') +
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
